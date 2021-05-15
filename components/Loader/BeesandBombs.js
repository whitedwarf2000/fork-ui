import React from 'react';
const BeesandBombs = ({ size }) => {
  return (
    <div className="">
      <div className="floader-beesand-bombs">
        <div className="floader-beesand-bomb" />
        <div className="floader-beesand-bomb" />
        <div className="floader-beesand-bomb" />
        <div className="floader-beesand-bomb" />
      </div>
    </div>
  );
};

BeesandBombs.defaultProps = {
  size: 16,
};
export default BeesandBombs;
