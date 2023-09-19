import { useEffect } from 'react';
import { fetchAllPosts } from '../../api';
import './dashboard.styles.css';
import Card from '../../components/Card/Card';
import { usePost } from '../../context/postContext';

const Dashboard = () => {
  const { posts, setPosts } = usePost();

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