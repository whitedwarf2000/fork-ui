import React from 'react';
import useUniqueId from '../../hooks/useUniqueId';

const Attract = ({ size }) => {
  return (
    <div
      className="floader-attract"
      style={{
        '--attract-left-color': 'rgba(243, 8, 231, 1)',
        '--attract-right-color': 'rgba(24, 119, 242, 1)',
        '--attract-size': `${size}px`,
      }}
    >
      <div className="floader-attract-left" />
      <div className="floader-attract-right" />
    </div>
  );
};

Attract.defaultProps = {
  size: 16,
};
export default Attract;
