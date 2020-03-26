import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import ClickOutside from './demo/ClickOutside';
import Width from './demo/Width';
import Closable from './demo/Closable';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-5" header="BASIC" href="drawer-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="CLOSABLE" href="drawer-closable" code={Closable.code}>
          <Closable />
        </Codebox>
      </div>
      <div className="w-1/2 pl-2">
        <Codebox className="mb-5" header="CLOSE CLICK OUTSIDE" href="drawer-click-outside" code={ClickOutside.code}>
          <ClickOutside />
        </Codebox>
        <Codebox className="mb-5" header="WIDTH" href="drawer-width" code={Width.code}>
          <Width />
        </Codebox>
      </div>
    </div>
  );
};