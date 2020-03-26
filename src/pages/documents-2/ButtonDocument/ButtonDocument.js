import React from 'react';
import { Icon } from '../../../components/core';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import GroupButton from './demo/GroupButton';
import WithIcon from './demo/WithIcon';

require('./ButtonDocument.scss');

const ButtonDocument = () => {
  return (
    <div className="flex flex-col">
      <Codebox className="my-5" header="BASIC" href="button-basic" code={Basic.code}>
        <Basic />
      </Codebox>
      <Codebox className="mb-5" header="GROUP BUTTON" href="button-group-button" code={GroupButton.code}>
        <GroupButton />
      </Codebox>
      <Codebox className="mb-5" header="WITH ICON" href="button-with-icon" code={WithIcon.code}>
        <WithIcon />
      </Codebox>
    </div>
  );
};

export default ButtonDocument;
