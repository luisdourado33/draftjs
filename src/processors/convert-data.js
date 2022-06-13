import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dom-purify';

export const convertContentToHTML = (editorState) => {
  const content = editorState.getCurrentContent();
  return convertToHTML(content);
};

export const createMarkup = (jsContent) => {
  const htmlContent = DOMPurify.sanitize(jsContent);
  return { _html: htmlContent };
};
