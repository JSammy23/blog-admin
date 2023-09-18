/* eslint-disable react/prop-types */
import { format, parseISO } from 'date-fns';
import './Card.styles.css';


const Card = ({ post }) => {

  // Format timestamp
  const timestamp = parseISO(post.timestamp);
  const formattedDate = format(timestamp, 'MMM do, yyyy');
  return (
    <div className="card">
      <p className="heading">{post.title}</p>
      <p className="heading">{formattedDate}</p>
    </div>
  )
}

export default Card;