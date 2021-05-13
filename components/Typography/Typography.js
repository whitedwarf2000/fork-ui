import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
const mFontStyles = Object.freeze({
  italic: 'ftypo-italic',
  oblique: 'ftypo-oblique',
});
const mTextDecoration = Object.freeze({
  underline: 'ftypo-underline',
  through: 'ftypo-line-through',
});

const lTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'p', 'span'];
const lFontStyles = Object.keys(mFontStyles);
const lTextDecoration = Object.keys(mTextDecoration);

const Typography = ({
  children,
  className,
  disabled,
  color,
  bold,
  tag,
  fontStyle,
  textDecoration,
  ...otherProps
}) => {
  return React.createElement(
    tag,
    {
      style: {
        color: color,
      },
      className: cn(
        'ftypo',
        {
          'ftypo-disabled': disabled,
          'ftypo-strong': bold,
        },
        mFontStyles[fontStyle],
        mTextDecoration[textDecoration],
        className
      ),
      ...otherProps
    },
    children,
  );
};

Typography.displayName = 'Typo';
Typography.propTypes = {
  tag: PropTypes.oneOf(lTags),
  textDecoration: PropTypes.oneOf(lTextDecoration),
  fontStyle: PropTypes.oneOf(lFontStyles),
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  bold: PropTypes.bool,
  color: PropTypes.string,
};
Typography.defaultProps = {
  tag: 'p',
};

export default Typography;
