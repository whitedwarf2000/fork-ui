import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import BaseInput from '../BaseInput';
import Eye from '../icons/all/Eye';

const Password = React.forwardRef(({ className, noEye, ...otherProps }, ref) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const toggleShowPassword = useCallback(() => {
    if (noEye) {
      return;
    }
    return setIsShowPassword(prev => !prev)
  }, [noEye, setIsShowPassword]);

  return (
    <div className={cn('fpwd', className)}>
      <BaseInput
        {...otherProps}
        ref={ref}
        htmlType={isShowPassword ? 'text' : 'password'}
      />
      {!noEye && (
        <Eye
          className="fpwd-eye"
          onClick={toggleShowPassword}
        />
      )}
    </div>
  );
});

Password.displayName = 'Password';
Password.propTypes = {
  className: PropTypes.string,
};
Password.defaultProps = {};

export default Password;
