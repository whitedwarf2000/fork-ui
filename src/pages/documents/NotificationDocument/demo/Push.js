import React, { useCallback } from 'react';
import { Button, Alert } from '../../../../components/core';

const Demo = () => {
  const onOpen = useCallback(() => {
    Alert.push({
      success: true,
      title: 'Success Title',
    })
  }, []);

  return (
    <div className="flex">
      <Button onClick={onOpen}>Open Alert</Button>
    </div>
  );
};

Demo.code = `
import React, { useCallback } from 'react';
import { Button, Alert } from '@/components/core';

const Demo = () => {
  const onOpen = useCallback(() => {
    Alert.push({
      success: true,
      title: 'Success Title',
    })
  }, []);

  return (
    <div className="flex">
      <Button onClick={onOpen}>Open Alert</Button>
    </div>
  );
};
`;

export default Demo;
