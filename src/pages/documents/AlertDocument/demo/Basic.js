import React, { useState, useCallback } from 'react';
import { Button, Alert } from '../../../../components/core';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Alert
        warning
        open={open}
        onClose={onClose}
        title="Warning Title"
      />
      <Button onClick={onOpen}>Open Confirm</Button>
    </div>
  );
};

Demo.code = `
import React, { useState, useCallback } from 'react';
import { Button, Alert } from '../../../../components/core';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Alert
        warning
        open={open}
        onClose={onClose}
        title="Warning Title"
      />
      <Button onClick={onOpen}>Open Confirm</Button>
    </div>
  );
};
`;

export default Demo;
