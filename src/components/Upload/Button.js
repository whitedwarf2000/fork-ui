import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from '../Icon';

const UploadButton = ({ className, ...otherProps }) => {
  return (
    <Button className={cn('fui-upload-button', className)}>
      <Icon name="cloud-upload" />
      <input className="fui-upload-input" type="file" {...otherProps} />
    </Button>
  );
};

export default UploadButton;
