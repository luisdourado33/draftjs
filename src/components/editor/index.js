import React, { useState } from 'react';

import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import './editor.styles.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { convertContentToHTML } from '../../processors/convert-data';

const RichTextEditor = () => {
  let initialEditorState = () => EditorState.createEmpty();
  const [editorState, setEditorState] = useState(initialEditorState);
  const [convertedContent, setConvertedContent] = useState('');

  const onEditorStateChange = (state) => {
    setEditorState(state);

    const contentParsed = convertContentToHTML(state);
    setConvertedContent(contentParsed);
  };

  return (
    <>
      <div className="container">
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          localization={{
            locale: 'pt',
          }}
          toolbar={{
            image: {
              inDropdown: false,
              urlEnabled: false,
              uploadEnabled: false,
            },
          }}
        />
      </div>
      <div className="preview">
        <div dangerouslySetInnerHTML={{ __html: convertedContent }}></div>
      </div>
    </>
  );
};

export default RichTextEditor;
