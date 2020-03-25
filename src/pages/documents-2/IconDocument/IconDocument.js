import React from 'react';
import { Icon } from '../../../components/core';

import icons from '../../../components/Icon/svg';

require('./IconDocument.scss');

const IconCard = ({ icon }) => {
  return (
    <div className="icon-card">
      <Icon name={icon} />
    </div>
  )
};

const IconDocument = () => {
  return (
    <div className="flex flex-col">
      <div className="icon-list flex flex-wrap">
        {Object.keys(icons).map(key => (
          <IconCard icon={key} />
        ))}
      </div>
    </div>
  );
};

export default IconDocument;
