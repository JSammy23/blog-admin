import { useState } from 'react'
import ReactQuill from 'react-quill';
import './TextEditor.styles.css';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
  const [editorState, setEditorState] = useState('');

  return (
    <ReactQuill className='quill-container' theme='snow' value={editorState} onChange={setEditorState} />
  )
}

export default TextEditor