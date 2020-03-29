import React from 'react';
import { InputNumber } from '../../../../components/core';

const Demo = () => {
  return (
    <InputNumber
      disabled
      placeholder="The placeholder"
    />
  );
};

Demo.code = `
import React from 'react';
import { InputNumber } from '@/components/core';

export default () => {
  return (
    <InputNumber
      disabled
      placeholder="The placeholder"
    />
  );
};
`;

export default Demo;
