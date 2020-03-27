import React from 'react';
import { PureNotification, Avatar, Icon } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <PureNotification title="Notification" className="mb-5">
        <div className="flex">
          <Avatar name="Hoàng Nguyễn" className="mr-3 text-lg" />
          <div className="flex flex-col">
            <span><a className="text-blue-600">Hoàng Nguyễn</a> send you a friend request</span>
            <div className="mt-1 text-gray-600"><Icon name="globe" className="mr-2" fontSize="0.85em" />5 minues ago</div>
          </div>
         
        </div>
      </PureNotification>
      <PureNotification title="Notification" className="mb-5" noTitle>
        <div className="flex">
          <Avatar name="Hoàng Nguyễn" className="mr-3 text-lg" />
          <div className="flex flex-col">
            <span><a className="text-blue-600">Hoàng Nguyễn</a> send you a friend request</span>
            <div className="mt-1 text-gray-600"><Icon name="globe" className="mr-2" fontSize="0.85em" />5 minues ago</div>
          </div>
         
        </div>
      </PureNotification>
    </div>
  );
};

Demo.code = `
import React from 'react';
import { PureAlert } from '@/components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <PureAlert
        info
        title="Info Title"
        className="mb-5"
      />
      <PureAlert
        error
        title="Error Title"
        className="mb-5"
      />
      <PureAlert
        success
        title="Success Title"
        className="mb-5"
      />
      <PureAlert
        warning
        title="Warning Title"
        className="mb-5"
      />
    </div>
  );
};
`;

export default Demo;
