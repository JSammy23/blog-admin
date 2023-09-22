import ReactQuill from 'react-quill';
import './TextEditor.styles.css';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ editorState, handleEditorChange }) => {

  return (
    <ReactQuill className='quill-container' theme='snow' value={editorState} onChange={handleEditorChange} />
  )
}

export default TextEditor