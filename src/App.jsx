import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage/Login/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import PostDetail from './pages/PostDetail/PostDetail';
import CreatePost from './pages/CreatePost/CreatePost';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route element={<PrivateRoute />} >
          <Route path='/home' element={<Dashboard />} />
          <Route path='/post/:postId' element={<PostDetail />} />
          <Route path='/post/:postId/edit' element={<CreatePost  />} />
          <Route path='/post/compose' element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
