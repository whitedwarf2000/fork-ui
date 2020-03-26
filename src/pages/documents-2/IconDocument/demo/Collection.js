import React from 'react';
import { Icon } from '../../../../components/core';
import list from '../../../../components/Icon/svg';

require('./Collection.scss');

const IconBox = ({ name }) => {
  return (
    <div className="icon-box">
      <Icon name={name} />
    </div>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-wrap">
      {Object.keys(list).map(key => (
        <IconBox name={key} />
      ))}
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Button } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <Icon className="mr-5" name="copy" />
      <Icon className="mr-5" name="cog" />
      <Icon className="mr-5" name="desktop" />
    </div>
  );
};
`;

export default Demo;
