import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';

export const convertContentToHTML = (editorState) => {
  const content = editorState?.getCurrentContent();
  return convertToHTML(content);
};

export const createMarkup = (jsContent) => {
  const htmlContent = DOMPurify.sanitize(jsContent);
  return { __html: htmlContent };
};
