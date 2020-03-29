import React from 'react';
import { Menu } from '../../../../components/core';

const Demo = () => {
  return (
    <Menu iconOnly>
      <Menu.ItemGroup key="group-action" title="Action">
        <Menu.Item key="copy" icon="copy">Copy</Menu.Item>
        <Menu.Item key="cog" icon="cog">Config</Menu.Item>
        <Menu.Item key="comments" icon="comments">Comments</Menu.Item>
        <Menu.Item key="heart" icon="heart">Love</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup key="group-other" title="Other">
        <Menu.Item key="rating" icon="star">Rating</Menu.Item>
        <Menu.Item key="follow" icon="bell">Follow</Menu.Item>
      </Menu.ItemGroup>
      <Menu.Sub key="sub-order" title="Order" icon="ellipsis-h">
        <Menu.Item key="alarm" icon="clock">Alarm</Menu.Item>
        <Menu.Item key="break-down" icon="caret-down">Break down</Menu.Item>
      </Menu.Sub>
    </Menu>
  );
};

Demo.code = `
import React from 'react';
import { Menu } from '@/components/core';

export default = () => {
  return (
    <Menu iconOnly>
      <Menu.ItemGroup key="group-action" title="Action">
        <Menu.Item key="copy" icon="copy">Copy</Menu.Item>
        <Menu.Item key="cog" icon="cog">Config</Menu.Item>
        <Menu.Item key="comments" icon="comments">Comments</Menu.Item>
        <Menu.Item key="heart" icon="heart">Love</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup key="group-other" title="Other">
        <Menu.Item key="rating" icon="star">Rating</Menu.Item>
        <Menu.Item key="follow" icon="bell">Follow</Menu.Item>
      </Menu.ItemGroup>
      <Menu.Sub key="sub-order" title="Order" icon="ellipsis-h">
        <Menu.Item key="alarm" icon="clock">Alarm</Menu.Item>
        <Menu.Item key="break-down" icon="caret-down">Break down</Menu.Item>
      </Menu.Sub>
    </Menu>
  );
};
`;

export default Demo;
