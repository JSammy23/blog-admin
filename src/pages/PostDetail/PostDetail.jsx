import { usePost } from "../../context/postContext";
import { useParams } from "react-router-dom";

function PostDetail() {
  const { getPostById } = usePost();
  const { postId } = useParams();

  const post = getPostById(postId);

  if (!post) {
      return <div>Error: Post data not available!</div>;
  }
    
    
    return (
      <div>
          PostDetail
          <p>{post.title}</p>
          <p>{post.content}</p>
      </div>
    );
}

export default PostDetail