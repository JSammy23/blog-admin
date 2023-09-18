import { useState, useEffect } from 'react';
import { fetchAllPosts } from '../../api';
import './dashboard.styles.css';
import Card from '../../components/Card/Card';
import { useAuthContext } from '../../context/AuthContext';

const Dashboard = () => {
  const { loading, token } = useAuthContext();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (token) {
      const getPosts = async () => {
        const postsData = await fetchAllPosts();
        setPosts(postsData)
      };
      getPosts();
    }
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="header">
        <h1>Blog Admin Portal</h1>
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