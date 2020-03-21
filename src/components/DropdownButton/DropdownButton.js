import React, { useMemo, useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Dropdown from '../Dropdown';

const mapToObject = arr => arr.reduce((rs, item) => {
  rs[item.props.value] = item.props.children;
  return rs;
}, {});

const DropdownButton = ({ className, children, placement, defaultValue, placeholder, ...otherProps }) => {
  const isControlled = useMemo(() => otherProps.hasOwnProperty('value'), []);
  const [_value, setValue] = useState(isControlled ? otherProps.value : defaultValue);
  const options = useMemo(() => mapToObject(React.Children.toArray(children)), [children]);

  return (
    <Dropdown overlay={children} placement={placement} {...otherProps}>
      <ButtonGroup className={className}>
        <Button style={{ minWidth: '10em' }}>
          {(<span className="rc-select-input-placeholder">{placeholder}</span>)}
        </Button>
        <Button icon ="caret-down" />
      </ButtonGroup>
    </Dropdown>
  );
};

DropdownButton.displayName = 'DropdownButton';
DropdownButton.propTypes = {
  placement: PropTypes.string,
};
DropdownButton.defaultProps = {
  placement: 'bottom-right',
};

export default DropdownButton;
