import React, { useEffect, useState } from 'react';
import { createMarkup } from '../../processors/convert-data';

const ContainerPreview = ({ convertedContent }) => {
  const [htmlToRender, setHTMLToRender] = useState(
    createMarkup(convertedContent)
  );

  useEffect(() => {
    console.log(htmlToRender);
  }, [htmlToRender]);
  return (
    <div
      className="preview-content"
      dangerouslySetInnerHTML={htmlToRender}
    ></div>
  );
};

export default ContainerPreview;
