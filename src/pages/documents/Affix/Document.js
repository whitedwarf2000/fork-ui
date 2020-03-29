import React from 'react';
import Codebox from '../../../components/Codebox';

import Top from './demo/Top';
import Bottom from './demo/Bottom';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-5" header="TOP" href="affix-top" code={Top.code}>
          <Top />
        </Codebox>
      </div>
      <div className="w-1/2 pl-2">
        <Codebox className="mb-5" header="BOTTOM" href="affix-bottom" code={Bottom.code}>
          <Bottom />
        </Codebox>
      </div>
    </div>
  );
};

