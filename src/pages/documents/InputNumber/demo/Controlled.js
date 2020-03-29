import React, { useState, useCallback } from 'react';
import { InputNumber } from '../../../../components/core';

const Demo = () => {
  const [value, setValue] = useState();
  const onChange = useCallback(e => setValue(+e.target.value), []);

  return (
    <InputNumber
      placeholder="The placeholder"
      value={value}
      onChange={onChange}
    />
  );
};

Demo.code = `
import React from 'react';
import { InputNumber } from '@/components/core';

export default () => {
  const [value, setValue] = useState();
  const onChange = useCallback(e => setValue(e.target.value), []);

  return (
    <InputNumber
      placeholder="The placeholder"
      value={value}
      onChange={onChange}
    />
  );
};
`;

export default Demo;
