import { convertToRaw } from 'draft-js';
import draftToHTML from 'draftjs-to-html';

/**
 * Converts a mapped object to HTML
 * @param {*} editorState
 * @returns string
 */
export const convertContentToHTML = (editorState) => {
  const content = convertToRaw(editorState?.getCurrentContent());
  return draftToHTML(content);
};
