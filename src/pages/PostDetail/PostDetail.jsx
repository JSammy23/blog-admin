import { useEffect, useState } from "react";
import { usePost } from "../../context/postContext";
import { useParams } from "react-router-dom";
import { fetchPostById, deletePost } from "../../api";
import ButtonComponent from "../../components/Button/ButtonComponent";
import Modal from "../../components/Modal/Modal";
import { useNavigate } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import './PostDetail.styles.css';

function PostDetail() {
  const { getPostById } = usePost();
  const { postId } = useParams();
  const [post, setPost] = useState(getPostById(postId));
  const [loading, setLoading] = useState(!post);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  // Format timestamp
  let formattedDate;
  if (post) {
    const timestamp = parseISO(post.timestamp);
    formattedDate = format(timestamp, 'MMM do, yyyy');
  }

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

  const handleDeletePost = async () => {
    await deletePost(post._id);
    navigate('/home');
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
        <ButtonComponent onClick={() => setIsModalOpen(true)} >Delete Post</ButtonComponent>
        <ButtonComponent onClick={handleEditClick} >Edit Post</ButtonComponent>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} >
        <h2>Do you really want to delete this post?</h2>
        <p><span>Title: </span> {post.title}</p>
        <p><span>Date: </span> {formattedDate}</p>
        <button className="btn danger" onClick={handleDeletePost} >Delete</button>
      </Modal>
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