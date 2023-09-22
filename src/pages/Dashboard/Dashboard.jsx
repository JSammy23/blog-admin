import { useEffect } from 'react';
import { fetchAllPosts } from '../../api';
import { useNavigate } from 'react-router-dom';
import './dashboard.styles.css';
import Card from '../../components/Card/Card';
import { usePost } from '../../context/postContext';
import ButtonComponent from '../../components/Button/ButtonComponent';

const Dashboard = () => {
  const { posts, setPosts } = usePost();
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      const postsData = await fetchAllPosts();
      setPosts(postsData);
    };
    getPosts();
  }, []);

  const handleComposeClick = () => {
    navigate('/post/compose');
  }

  return (
    <div>
      <div className="header">
        <h1>Blog Admin Portal</h1>
        <ButtonComponent size='large' onClick={handleComposeClick} >Compose</ButtonComponent>
      </div>
      <div className="card-container">
        {posts.map((post) => (
          <Card post={post} key={post._id} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard;