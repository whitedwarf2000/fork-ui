import React, { useState, useCallback } from 'react';
import { Menu, Divider } from '../../../../components/core';

const Demo = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const onItemClick = useCallback(key => setSelectedKeys([key]));

  return (
    <div>
      <Menu selectedKeys={selectedKeys}>
        <Menu.Item key="option-1" onItemClick={() => onItemClick('option-1')}>Option One</Menu.Item>
        <Menu.Item key="option-2" onItemClick={() => onItemClick('option-2')}>Option Two</Menu.Item>
        <Menu.Item key="option-3" onItemClick={() => onItemClick('option-3')}>Option Three</Menu.Item>
        <Menu.Item key="option-4" onItemClick={() => onItemClick('option-4')}>Option Four</Menu.Item>
      </Menu>
      <Divider dashed title="OTHER WAY" />
      <Menu selectedKeys={selectedKeys} onItemClick={onItemClick}>
        <Menu.Item key="option-1">Option One</Menu.Item>
        <Menu.Item key="option-2">Option Two</Menu.Item>
        <Menu.Item key="option-3">Option Three</Menu.Item>
        <Menu.Item key="option-4">Option Four</Menu.Item>
      </Menu>
    </div>
  );
};

Demo.code = `
import React, { useState, useCallback } from 'react';
import { Menu, Divider } from '@/components/core';

export default () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const onItemClick = useCallback(key => setSelectedKeys([key]));

  return (
    <div>
      <Menu selectedKeys={selectedKeys}>
        <Menu.Item key="option-1" onItemClick={() => onItemClick('option-1')}>Option One</Menu.Item>
        <Menu.Item key="option-2" onItemClick={() => onItemClick('option-2')}>Option Two</Menu.Item>
        <Menu.Item key="option-3" onItemClick={() => onItemClick('option-3')}>Option Three</Menu.Item>
        <Menu.Item key="option-4" onItemClick={() => onItemClick('option-4')}>Option Four</Menu.Item>
      </Menu>
      <Divider dashed title="OTHER WAY" />
      <Menu selectedKeys={selectedKeys} onItemClick={onItemClick}>
        <Menu.Item key="option-1">Option One</Menu.Item>
        <Menu.Item key="option-2">Option Two</Menu.Item>
        <Menu.Item key="option-3">Option Three</Menu.Item>
        <Menu.Item key="option-4">Option Four</Menu.Item>
      </Menu>
    </div>
  );
};
`;

export default Demo;
