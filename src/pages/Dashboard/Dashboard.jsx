import { useState, useEffect } from 'react';
import { fetchAllPosts } from '../../api';
import './dashboard.styles.css';
import Card from '../../components/Card/Card';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsData = await fetchAllPosts();
      setPosts(postsData);
    };
    getPosts();
  }, []);

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