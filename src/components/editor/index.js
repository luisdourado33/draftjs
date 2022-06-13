import React from 'react';

import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import './editor.styles.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor = () => {
  const initialEditorState = () => EditorState.createEmpty();
  const [editorState, setEditorState] = useState(initialEditorState);

  return <div className="editor-container">Rich Text Component</div>;
};

export default RichTextEditor;
