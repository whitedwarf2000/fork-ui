import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-5" header="BASIC" href="textbox-basic" code={Basic.code}>
          <Basic />
        </Codebox>
      </div>
      <div className="w-1/3 pl-2">
        {/* <Codebox className="mb-5" header="BOTTOM" href="affix-bottom" code={Bottom.code}>
          <Bottom />
        </Codebox> */}
      </div>
    </div>
  );
};

