import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import Max from './demo/Max';
import Size from './demo/Size';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-5" header="BASIC" href="rater-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="SIZE" href="rater-basic" code={Size.code}>
          <Size />
        </Codebox>
      </div>
      <div className="w-1/2 pl-2">
        <Codebox className="mb-5" header="MAX" href="rater-max" code={Max.code}>
          <Max />
        </Codebox>
      </div>
    </div>
  );
};

