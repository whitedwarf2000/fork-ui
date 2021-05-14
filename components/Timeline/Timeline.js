import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Clock from '../icons/all/Clock';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const Content = ({ className, ...otherProps}) => <div className={cn('ftimeline-content', className)} {...otherProps} />;
const Button = ({ className, ...otherProps}) => <div className={cn('ftimeline-btn', className)} {...otherProps} />;
const Item = ({ className, ...otherProps }) => <li className={cn('ftimeline-item', className)} {...otherProps} />;

const mAlign = Object.freeze({
  right: 'ftimeline-r',
  left: 'ftimeline-l',
  alternate: 'ftimeline-alternate',
});

const lAlign = Object.keys(mAlign);

const Timeline = ({ className, reverse, ...otherProps }) => {
  const align = useSemanticProp('align', otherProps, lAlign);

  // ignore semantic props
  const passedProps = useMemo(() => omit(otherProps, [
    ...lAlign,
    'align',
  ]), [otherProps]);

  return (
    <ul
      className={cn(
        'ftimeline',
        mAlign[align],
        {
          'ftimeline-reverse': reverse
        },
        className
      )}
      {...passedProps}
    />
  );
}

Timeline.displayName = 'Timeline';
Content.displayName = 'Timeline.Content';
Button.displayName = 'Timeline.Button';
Item.displayName = 'Timeline.Item';

Content.defaultProps = {
  className: PropTypes.string,
};
Button.defaultProps = {
  children: <Clock />,
  className: PropTypes.string,
};
Item.defaultProps = {
  className: PropTypes.string,
};

Timeline.Item = Item;
Timeline.Content = Content;
Timeline.Button = Button;

Timeline.propTypes = {
  className: PropTypes.string,
  right: PropTypes.bool,
  left: PropTypes.bool,
  alternate: PropTypes.bool,
  reverse: PropTypes.bool,
};
Timeline.defaultProps = {};

export default Timeline;
