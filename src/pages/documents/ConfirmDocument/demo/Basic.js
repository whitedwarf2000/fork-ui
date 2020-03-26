import React, { useState, useCallback } from 'react';
import { Button, Confirm } from '../../../../components/core';

const Demo = () => {
  const [open, setOpen] = useState();

  const onCancel = useCallback(() => setOpen(false), []);
  const onOk = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Confirm
        open={open}
        onCancel={onCancel}
        onOk={onOk}
        title="Confirm Title"
      >
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Confirm>
      <Button onClick={onOpen}>Open Confirm</Button>
    </div>
  );
};

Demo.code = `
import React, { useState, useCallback } from 'react';
import { Button, Modal } from '@/components/core';

export default () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Modal open={open} onClose={onClose} title="Modal Title">
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Modal>
      <Button onClick={onOpen}>Open Modal</Button>
    </div>
  );
};
`;

export default Demo;
