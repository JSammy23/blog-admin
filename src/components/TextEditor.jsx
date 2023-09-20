import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import tinymce from 'tinymce';

// DOM model
import 'tinymce/models/dom/model'
// Theme
import 'tinymce/themes/silver';
// Toolbar icons
import 'tinymce/icons/default';
// Editor styles
import 'tinymce/skins/ui/oxide/skin.min.css';

// TinyMCE Plugins
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/image';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/wordcount';

const TextEditor = () => {
  const [editorContent, setEditorContent] = useState('');


  return (
    <Editor
        value={editorContent}
        onEditorChange={(newContent) => setEditorContent(newContent)}
        init={{
            height: 400,
            menubar: false,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
        }}
    />
  );
}

export default TextEditor