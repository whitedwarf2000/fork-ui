import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import { CloudUpload } from '../icons';

const UploadButton = ({ className, ...otherProps }) => {
  return (
    <Button className={cn('fui-upload-button', className)}>
      <CloudUpload />
      <input className="fui-upload-input" type="file" {...otherProps} />
    </Button>
  );
};

export default UploadButton;
