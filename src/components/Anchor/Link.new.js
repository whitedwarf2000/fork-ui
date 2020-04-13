import React, { useCallback, useLayoutEffect, useRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Anchor from './Anchor.new';

import getPosition from '../../utils/getPosition';

const Link = ({ className, active, _onTriggered, _key, _top, title, ...otherProps }) => {
  const ref = useRef();

  const onScroll = useCallback(() => {
    const { top } = ref.current.getBoundingClientRect();
    const target = document.querySelector(_key) || { getBoundingClientRect: f => f};
  
    const { top: topTarget } = target.getBoundingClientRect();

    if (top >= topTarget) {
      _onTriggered(_key);
    }
  }, [_key, ref, _onTriggered]);

  const scrollToTarget = useCallback(() => {
    const target = document.querySelector(_key);
    if (!target) {
      return;
    }

    const { pageY } = getPosition(target);
    const { top } = ref.current.getBoundingClientRect();
    const { top: topAnchor } = ref.current.parentElement.getBoundingClientRect();

    let scrollTo = pageY - top;
  
    if (topAnchor > _top) {
      scrollTo = pageY - _top - (top - topAnchor);
    }

    return window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    });
  }, [_key, _top, ref]);

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <li className={cn('rc-anchor-link', { '--active': active })} ref={ref} {...otherProps}>
      <a onClick={scrollToTarget}>
        {title}
      </a>
    </li>
  );
};

Link.displayName = 'Link';
Link.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  title: PropTypes.string,
};
Link.defaultProps = {};

export default Link;
