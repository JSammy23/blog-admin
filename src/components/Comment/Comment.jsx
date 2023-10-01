import { useState, useRef, useEffect } from 'react';
import './Comment.Styles.css';
import { format, parseISO } from 'date-fns';

const Comment = ({ comment, onDelete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, []);
  
  // Format timestamp
  const timestamp = parseISO(comment.timestamp);
  const formattedDate = format(timestamp, 'h:mma MM/dd/yy');

  return (
    <div className='comment' >
      <div className="comment-header">
        <h3>{comment.user.username}</h3>
        <p>{formattedDate}</p>
      </div>
      <div className="comment-body">
        <p>{comment.content}</p>
        <div className="comment-controls" ref={menuRef} >
          <button onClick={toggleMenu} >⋮</button>
          {isMenuOpen && (
          <div className='dropdown-content' >
            <a href="#" onClick={onDelete} >Delete</a>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Comment
