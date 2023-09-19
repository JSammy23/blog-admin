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

    return (
        <PostContext.Provider value={{ posts, setPosts, getPostById }}>
            {children}
        </PostContext.Provider>
    );
};