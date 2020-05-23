import React from 'react';
import Chip from '../../Chip';
import Popover from '../../Popover';
import Menu from '../../Menu';

const Facet = ({}) => {

  return (
    <div className="rc-facet --block">
      <Popover bottom overlay={(
        <Menu>
          <Menu.Item title=")" />
        </Menu>
      )}>
        <Chip label="(" />
      </Popover>
    </div>
  );
};

export default Facet;
