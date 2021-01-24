import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Header = ({ className, ...otherProps }) => {
  return (
    <div className={cn('fdlg-header', className)} {...otherProps} />
  );
};

Header.displayName = 'Dialog.Header';
Header.propTypes = {};
Header.defaultProps = {};

export const HeaderTitle = ({ className, ...otherProps }) => {
  return (
    <h4 className={cn('fdlg-header-title', className)} {...otherProps} />
  );
};

HeaderTitle.displayName = 'Dialog.HeaderTitle';
HeaderTitle.propTypes = {};
HeaderTitle.defaultProps = {};

export const HeaderButtons = ({ className, ...otherProps }) => {
  return (
    <div className={cn('fdlg-header-btns', className)} {...otherProps} />
  );
};

HeaderButtons.displayName = 'Dialog.HeaderButtons';
HeaderButtons.propTypes = {};
HeaderButtons.defaultProps = {};

export default Header;
