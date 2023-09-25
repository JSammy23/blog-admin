import { useEffect, useState } from "react";
import { usePost } from "../../context/postContext";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../api";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { useNavigate } from 'react-router-dom';
import './PostDetail.styles.css';

function PostDetail() {
  const { getPostById } = usePost();
  const { postId } = useParams();
  const [post, setPost] = useState(getPostById(postId));
  const [loading, setLoading] = useState(!post);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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

  const handleEditClick = () => {
    navigate(`/post/${postId}/edit`, { state: { post }});
  };

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
      <div className="controls">
        <ButtonComponent onClick={handleEditClick} >Edit Post</ButtonComponent>
      </div>
      <div className="post-container" >
          <div className="post-header">
            <h3 className="title" >{post.title}</h3>
          </div>
          <hr />
          <div className="content" dangerouslySetInnerHTML={{__html: post.content}} ></div>
      </div>
    </div>
  );
}

export default PostDetail