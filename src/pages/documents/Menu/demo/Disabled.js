import React from 'react';
import { Menu } from '../../../../components/core';

const Demo = () => {
  return (
    <Menu>
      <Menu.Item key="option-1">Option One</Menu.Item>
      <Menu.Item key="option-2" disabled>Option Two</Menu.Item>
      <Menu.Item key="option-3">Option Three</Menu.Item>
      <Menu.Item key="option-4">Option Four</Menu.Item>
    </Menu>
  );
};

Demo.code = `
import React from 'react';
import { Menu } from '@/components/core';

export default () => {
  return (
    <Menu>
      <Menu.Item key="option-1">Option One</Menu.Item>
      <Menu.Item key="option-2">Option Two</Menu.Item>
      <Menu.Item key="option-3">Option Three</Menu.Item>
      <Menu.Item key="option-4">Option Four</Menu.Item>
    </Menu>
  );
};
`;

export default Demo;
