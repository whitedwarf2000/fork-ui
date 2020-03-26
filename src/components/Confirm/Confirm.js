import React, { useRef, useEffect, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import PureConfirm from '../PureConfirm';

import useDebounce from '../../hooks/useDebounce';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';

require('./Confirm.scss');

const Confirm = ({ className, open, ...otherProps }) => {
  const delayOpen = useDebounce(open, 100);

  useLockBodyScroll(delayOpen);

  return (
    <React.Fragment>
      {delayOpen && (
        <Portal>
          <div className={cn('rc-confirm', { '--close-animation': !open })}>
            <PureConfirm
              className={className}
              {...otherProps}
            />
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
};

Confirm.displayName = 'Confirm';
Confirm.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
};
Confirm.defaultProps = {};

export default Confirm;
