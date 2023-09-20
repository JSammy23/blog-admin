import { useEffect, useState } from "react";
import { usePost } from "../../context/postContext";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../api";

function PostDetail() {
  const { getPostById } = usePost();
  const { postId } = useParams();
  const [post, setPost] = useState(getPostById(postId));
  const [loading, setLoading] = useState(!post);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const fetchedPost = await fetchPostById(postId);
        setPost(fetchedPost);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    if (!post) {
      fetchPost();
    }
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!post) {
    return <div>Error: Post data not available!</div>;
  }

  return (
    <div>
        PostDetail
        <p>{post.title}</p>
        <p>{post.content}</p>
    </div>
  );
}

export default PostDetail