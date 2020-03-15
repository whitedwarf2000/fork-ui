import React from 'react';

import Progress from '../../components/Progress';
import Rating from '../../components/Rating';

const DisplayDocumentPage = ({ children }) => {
  return (
    <div id="display-document-page" className="flex">
      <div className="w-1/3 px-3">
        <Rating defaultStar={3} />
        <Rating defaultStar={7} max={10} className="mb-10" />
      </div>
      <div className="w-1/3 px-3">
        <div className="flex items-center">
          <Progress percent={0.45} r={60} className="mr-5" />
          <Progress percent={0.95} r={40} className="mr-5" />
        </div>
      </div>
    </div>
  )
};

export default DisplayDocumentPage;
