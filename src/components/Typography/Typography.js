import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mFontStyles = Object.freeze({
  i: 'ftypo-italic',
  oblique: 'ftypo-oblique',
});

const mTextDecoration = Object.freeze({
  u: 'ftypo-underline',
  through: 'ftypo-line-through',
});

const lTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'p', 'span'];
const lFontStyles = Object.keys(mFontStyles);
const lTextDecoration = Object.keys(mTextDecoration);

const Typography = ({ children, className, disabled, color, b, ...otherProps }) => {
  const tag = useSemanticProp('tag', otherProps, lTags) || 'p';
  const fontStyle = useSemanticProp('fontStyle', otherProps, lFontStyles);
  const textDecoration = useSemanticProp('decoration', otherProps, lTextDecoration);

  const passedProps = useMemo(() => omit(otherProps, [
    ...lTags,
    ...lFontStyles,
    ...lTextDecoration,
    'decoration',
    'tag',
    'fontStyle',
  ]), [otherProps]);

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
          'ftypo-strong': b,
        },
        mFontStyles[fontStyle],
        mTextDecoration[textDecoration],
        className
      ),
      ...passedProps
    },
    children
  );
};

Typography.displayName = 'Typo';
Typography.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  decoration: PropTypes.string,
  u: PropTypes.bool,
  through: PropTypes.bool,
  b: PropTypes.bool,
  fontStyle: PropTypes.string,
  i: PropTypes.bool,
  p: PropTypes.bool,
  tag: PropTypes.string,
  div: PropTypes.bool,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
  span: PropTypes.bool,
  oblique: PropTypes.bool,
  color: PropTypes.string,
};
Typography.defaultProps = {};

export default Typography;
