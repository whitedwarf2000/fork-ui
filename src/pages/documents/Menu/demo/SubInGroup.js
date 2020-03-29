import React from 'react';
import { Menu } from '../../../../components/core';

const Demo = () => {
  return (
    <Menu>
      <Menu.ItemGroup key="group-action" title="Action">
        <Menu.Item key="copy" icon="copy">Copy</Menu.Item>
        <Menu.Item key="cog" icon="cog">Config</Menu.Item>
        <Menu.Sub key="sub-other" icon="share" title="Other">
          <Menu.Item key="rating" icon="star">Rating</Menu.Item>
          <Menu.Item key="follow" icon="bell">Follow</Menu.Item>
        </Menu.Sub>
        <Menu.Item key="comments" icon="comments">Comments</Menu.Item>
        <Menu.Item key="heart" icon="heart">Love</Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );
};

Demo.code = `
import React from 'react';
import { Menu } from '@/components/core';

export default = () => {
  return (
    <Menu>
    <Menu.ItemGroup key="group-action" title="Action">
      <Menu.Item key="copy" icon="copy">Copy</Menu.Item>
      <Menu.Item key="cog" icon="cog">Config</Menu.Item>
      <Menu.Sub key="sub-other" icon="share" title="Other">
        <Menu.Item key="rating" icon="star">Rating</Menu.Item>
        <Menu.Item key="follow" icon="bell">Follow</Menu.Item>
      </Menu.Sub>
      <Menu.Item key="comments" icon="comments">Comments</Menu.Item>
      <Menu.Item key="heart" icon="heart">Love</Menu.Item>
    </Menu.ItemGroup>
  </Menu>
  );
};
`;

export default Demo;
