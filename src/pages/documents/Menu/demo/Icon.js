import React from 'react';
import { Menu } from '../../../../components/core';

const Demo = () => {
  return (
    <Menu>
      <Menu.Item key="copy" icon="copy">Copy</Menu.Item>
      <Menu.Item key="cog" icon="cog">Config</Menu.Item>
      <Menu.Item key="comments" icon="comments">Comments</Menu.Item>
      <Menu.Item key="heart" icon="heart">Love</Menu.Item>
    </Menu>
  );
};

Demo.code = `
import React from 'react';
import { Menu } from '@/components/core';

export default () => {
  return (
    <Menu>
      <Menu.Item key="copy" icon="copy">Copy</Menu.Item>
      <Menu.Item key="cog" icon="cog">Config</Menu.Item>
      <Menu.Item key="comments" icon="comments">Comments</Menu.Item>
      <Menu.Item key="heart" icon="heart">Love</Menu.Item>
    </Menu>
  );
};
`;

export default Demo;
