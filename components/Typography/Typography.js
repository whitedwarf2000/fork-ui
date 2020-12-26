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

const Typography = ({
  children,
  className,
  disabled,
  color,
  b,
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
          'ftypo-strong': b,
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
  b: PropTypes.bool,
  color: PropTypes.string,
};
Typography.defaultProps = {
  tag: 'p',
};

const withSemantic = (Component) => {
  const SemanticTypography = (props) => {
    const tag = useSemanticProp('tag', props, lTags);
    const fontStyle = useSemanticProp('fontStyle', props, lFontStyles);
    const textDecoration = useSemanticProp('textDecoration', props, lTextDecoration);
  
    const passedProps = useMemo(() => omit(props, [
      ...lTags,
      ...lFontStyles,
      ...lTextDecoration,
      'textDecoration',
      'tag',
      'fontStyle',
    ]), [props]);

    return (
      <Component
        tag={tag}
        textDecoration={textDecoration}
        fontStyle={fontStyle}
        {...passedProps}
      />
    );
  };

  SemanticTypography.displayName = 'SemanticTypography';
  SemanticTypography.propTypes = {
    tag: PropTypes.oneOf(lTags),
    textDecoration: PropTypes.oneOf(lTextDecoration),
    fontStyle: PropTypes.oneOf(lFontStyles),
    u: PropTypes.bool, // textDecoration="u"
    through: PropTypes.bool, // textDecoration="through"
    i: PropTypes.bool, // fontStyle="i"
    oblique: PropTypes.bool, // fontStyle="oblique"
    p: PropTypes.bool, // tag="p"
    div: PropTypes.bool, // tag="div"
    h1: PropTypes.bool, // tag="h1"
    h2: PropTypes.bool, // tag="h2"
    h3: PropTypes.bool, // tag="h3"
    h4: PropTypes.bool, // tag="h4"
    h5: PropTypes.bool, // tag="h5"
    h6: PropTypes.bool, // tag="h6"
    span: PropTypes.bool, // tag="span"
  };
  SemanticTypography.defaultProps = {};

  return SemanticTypography;
};

export default withSemantic(Typography);
