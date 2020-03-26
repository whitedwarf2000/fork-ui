import React, { useState, useCallback } from 'react';
import { Button, Drawer } from '../../../../components/core';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Drawer open={open} onClose={onClose} title="Drawer Title" className="w-1/3">
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Drawer>
      <Button onClick={onOpen}>Open Drawer</Button>
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Radio } from '@/components/core';

export default () => {
  const [value, setValue] = useState();

  return (
    <div className="flex">
      <Radio
        className="mr-5"
        name="same"
        value="value-1"
        onChange={e => setValue(e.target.value)}
      />
      <Radio
        className="mr-5"
        name="same"
        value="value-2"
        onChange={e => setValue(e.target.value)}
      />
      <Radio
        className="mr-5"
        name="same"
        value="value-3"
        disabled
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
};
`;

export default Demo;
