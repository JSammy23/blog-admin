import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ editorState, handleEditorChange }) => {

  return (
    <ReactQuill className='quill-container' theme='snow' value={editorState} onChange={handleEditorChange} />
  )
}

export default TextEditor