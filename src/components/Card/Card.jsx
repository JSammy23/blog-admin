import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';
import './Card.styles.css';


const Card = ({ post }) => {

  // Format timestamp
  const timestamp = parseISO(post.timestamp);
  const formattedDate = format(timestamp, 'MMM do, yyyy');
  return (
    <Link to={{
      pathname: `/post/${post._id}`}} style={{textDecoration: 'none'}}  >
      <div className="card">
        <p className="heading">{post.title}</p>
        <p className="heading">{formattedDate}</p>
      </div>
    </Link>
  )
}

export default Card;