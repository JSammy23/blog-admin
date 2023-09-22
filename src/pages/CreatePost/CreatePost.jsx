import { useState } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";
import './CreatePost.Styles.css';
import { createNewPost } from "../../api";
import ButtonComponent from "../../components/Button/ButtonComponent";

const CreatePost = () => {
  const [editorState, setEditorState] = useState('');
  const [title, setTitle] = useState('');
  const [isPublished, setIsPublished] = useState(false);

  const handleEditorChange = (value) => {
    setEditorState(value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleToggle = () => {
    setIsPublished(prev => !prev);
  };

  const handleSubmit = async () => {
    if (!title.trim() || !editorState.trim()) {
      console.error('Title and content are required!');
      // More user-friendly notification method here.
      return;
    }

    const postDetails = {
        title: title,
        content: editorState,
        isPublished: isPublished
    };

    try {
        const result = await createNewPost(postDetails);
        console.log('Post created successfully:', result);
        // Add a success notification or redirect the user to another page, etc.
    } catch (error) {
        console.error('Error creating post:', error.message);
        // Display an error notification here.
    }
  };

  return (
    <div className="wrapper">
        <div className="create-header">
          <h1>Create New Blog Post</h1>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="title">Title: </label>
            <input className="title-input" type="text" name="title" id="title" onChange={handleTitleChange} />
          </div>
          <div className="form-group">
            <p>Published: </p>
            <input type="checkbox" id="published" checked={isPublished} onChange={handleToggle}  />
            <label className="toggle" htmlFor="published">Toggle</label>
          </div>
        </div>
        <TextEditor editorState={editorState} handleEditorChange={handleEditorChange} />
        <div className="submit">
          <ButtonComponent  size="medium"  onClick={handleSubmit}>Submit Post</ButtonComponent>
        </div>
    </div>
  )
}

export default CreatePost