import {useContext, useState, createContext} from 'react'

const PostContext = createContext();

export const usePost = () => {
    return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const getPostById = (id) => {
        return posts.find(post => post._id === id);
    };

    const deleteCommentFromPost = (postId, commentId) => {
        // Find the index of the post with the specified postId
        const postIndex = posts.findIndex(post => post._id === postId);
    
        if (postIndex === -1) {
            return; // Post not found
        }
    
        // Create a shallow copy of the post
        const updatedPost = { ...posts[postIndex] };
    
        // Filter out the comment with the given commentId
        updatedPost.comments = updatedPost.comments.filter(comment => comment._id !== commentId);
    
        // Update the posts state with the new list of posts
        const updatedPosts = [...posts];
        updatedPosts[postIndex] = updatedPost;
        setPosts(updatedPosts);
    };

    const contextValue = {
        posts,
        setPosts,
        getPostById,
        deleteCommentFromPost
    }

    return (
        <PostContext.Provider value={contextValue}>
            {children}
        </PostContext.Provider>
    );
};