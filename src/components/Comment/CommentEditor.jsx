import {useState} from 'react';
import "./CommentEditor.Styles.css";
import ButtonComponent from '../Button/ButtonComponent';

const CommentEditor = ({ onClose, onSubmit }) => {
    const [editorState, setEditorState] = useState('');

    const handleChange = (event) => {
        setEditorState(event.target.value);
    };

  return (
    <div>
        <textarea onChange={handleChange} name="commentText" id="commentText" cols="80" rows="10"></textarea>
        <div className="controls">
            <ButtonComponent onClick={() => onSubmit(editorState)} >Submit</ButtonComponent>
            <ButtonComponent onClick={onClose} >Cancel</ButtonComponent>
        </div>
    </div>
  )
}

export default CommentEditor;