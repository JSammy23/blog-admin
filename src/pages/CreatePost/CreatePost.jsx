import { useState } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";
import './CreatePost.Styles.css';

const CreatePost = () => {
  const [editorState, setEditorState] = useState('');
  const [title, setTitle] = useState('');

  const handleEditorChange = (value) => {
    setEditorState(value);
  };

  return (
    <div className="wrapper">
        <h1>CreatePost</h1>
        <TextEditor editorState={editorState} handleEditorChange={handleEditorChange} />
    </div>
  )
}

export default CreatePost