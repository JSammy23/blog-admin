/* eslint-disable react/prop-types */

import './Card.styles.css';


const Card = ({ post }) => {
  return (
    <div className="card">
      <p className="heading">{post.title}</p>
      <p className="heading">{post.timestamp}</p>
    </div>
  )
}

export default Card;