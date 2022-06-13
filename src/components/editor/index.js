import React, { useState } from 'react';

import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import './editor.styles.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import PreviewContainer from '../preview';

const RichTextEditor = () => {
  let initialEditorState = () => EditorState.createEmpty();
  const [editorState, setEditorState] = useState(initialEditorState);

  return (
    <div className="editor-container">
      <PreviewContainer />
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  );
};

export default RichTextEditor;
