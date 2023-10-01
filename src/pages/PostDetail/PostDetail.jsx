import { useEffect, useState } from "react";
import { usePost } from "../../context/postContext";
import { useParams } from "react-router-dom";
import { fetchPostById, deletePost, updatePost } from "../../api";
import ButtonComponent from "../../components/Button/ButtonComponent";
import Modal from "../../components/Modal/Modal";
import { useNavigate } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import Comment from "../../components/Comment/Comment";
import './PostDetail.styles.css';

function PostDetail() {
  const { getPostById } = usePost();
  const { postId } = useParams();
  const [post, setPost] = useState(getPostById(postId));
  const [loading, setLoading] = useState(!post);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allowComments, setAllowComments] = useState(post?.allowComments)

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

  const toggleAllowComments = async () => {
    try {
      setAllowComments(!allowComments);
      const postDetails = {
        allowComments: (!post.allowComments)
      };
      await updatePost(post._id, postDetails)
    } catch (err) {
      console.error("Failed to toggle comments", err)
    }
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
        <ButtonComponent onClick={toggleAllowComments} >
          Comments Allowed:  
          <span style={{ color: allowComments ? 'inherit' : 'red' }} >
            {allowComments ? ' On' : ' Off'}
          </span>
          </ButtonComponent>
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
      <div className="comment-container">
        {post.comments.length > 0 && post.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default PostDetail