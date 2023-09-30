import './Comment.Styles.css';

const Comment = ({ comment }) => {


  return (
    <div className='comment' >
      <h3>{comment.user.username}</h3>
      <p>{comment.content}</p>
    </div>
  )
}

export default Comment
