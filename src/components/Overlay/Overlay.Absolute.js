import React, { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useOnClickOutside from '../../hooks/useOnClickOutside';
import mPlacements from '../placements';
import renderPlacement from './render-placement.absolute';

const Overlay = ({
  className,
  overlayClass,
  children,
  placement,
  trigger,
  onVisibleChange,
  arrow,
  overlay,
  gap,
  canOutsideClickClose,
  ...otherProps
}) => {
  const isControlled = useMemo(() => otherProps.hasOwnProperty('visible'), [otherProps]);
  const [visible, setVisible] = useState(isControlled ? otherProps.visible : otherProps.defaultVisible);
  const [isOverlayHover, setIsOverlayHover] = useState(false);
  const [isTargetHover, setIsTargetHover] = useState(false);

  useMemo(() => {
    if (isControlled) {
      return setVisible(otherProps.visible);
    }
  }, [isControlled, otherProps.visible, setVisible]);

  useEffect(() => {
    onVisibleChange(visible);
  }, [visible]);

  const ref = useRef();
  const wrapperTargetRef = useRef();
  const overlayRef = useRef();

  const applyHover = useMemo(() => trigger.indexOf('hover') >= 0, [trigger]);
  const applyClick = useMemo(() => trigger.indexOf('click') >= 0, [trigger]);

  // When ever user click outside of overlay, close overlay
  const clickOutsideHandler = useCallback(() => {
    if (canOutsideClickClose) {
      setVisible(false);
    }
  }, [setVisible, canOutsideClickClose]);
  useOnClickOutside(ref, clickOutsideHandler);

  // In 'hover' trigger mode, when ever user hover mouse outside of target and not hover on overlay, close overlay
  useEffect(() => {
    const targetNode = wrapperTargetRef.current.firstElementChild;
    let timer = null;
    let timer2 = null;

    // cheat isOverlayHover for life cycle performance by using setIsOverlayHover
    const _eventMouseLeaveHandler = () => {
      timer = setTimeout(() => {
        setIsOverlayHover(prev => {
          // if user still hover overlay after leave target, do nothing
          if (prev) {
            return prev;
          }

          setVisible(false);
          return prev;
        });
      }, 100);
    };

    // cheat isTargetHover for life cycle performance by using setIsTargetHover
    const _eventMouseLeaveOverlayHandler = () => {
      timer2 = setTimeout(() => {
        setIsTargetHover(prev => {
          // if user still hover target after leave overlay, do nothing
          if (prev) {
            return prev;
          }

          setVisible(false);
          return prev;
        });
      }, 100);
    };
  
    const _eventMouseEnterHandler = () => setVisible(true);

    if (applyHover) {
      targetNode.addEventListener('mouseenter', _eventMouseEnterHandler);
      targetNode.addEventListener('mouseleave', _eventMouseLeaveHandler);
      overlayRef.current.addEventListener('mouseleave', _eventMouseLeaveOverlayHandler);

      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
        targetNode.removeEventListener('mouseenter', _eventMouseEnterHandler);
        targetNode.removeEventListener('mouseleave', _eventMouseLeaveHandler);
        overlayRef.current.removeEventListener('mouseleave', _eventMouseLeaveOverlayHandler);
      };
    }
  }, [applyHover, wrapperTargetRef, overlayRef, setVisible, setIsOverlayHover, setIsTargetHover]);

  // trigger mouse
  useEffect(() => {
    const _eventMouseEnterOverlayHandler = () => setIsOverlayHover(true);
    const _eventMouseLeaveOverlayHandler = () => setIsOverlayHover(false);
    const _eventMouseEnterHandler = () => setIsTargetHover(true);
    const _eventMouseLeaveHandler = () => setIsTargetHover(false);

    overlayRef.current.addEventListener('mouseenter', _eventMouseEnterOverlayHandler);
    overlayRef.current.addEventListener('mouseleave', _eventMouseLeaveOverlayHandler);

    const targetNode = wrapperTargetRef.current.firstElementChild;
    targetNode.addEventListener('mouseenter', _eventMouseEnterHandler);
    targetNode.addEventListener('mouseleave', _eventMouseLeaveHandler);

    return () => {
      overlayRef.current.removeEventListener('mouseenter', _eventMouseEnterOverlayHandler);
      overlayRef.current.removeEventListener('mouseleave', _eventMouseLeaveOverlayHandler);
      targetNode.removeEventListener('mouseenter', _eventMouseEnterHandler);
      targetNode.removeEventListener('mouseleave', _eventMouseLeaveHandler);
    }
  }, [overlayRef, wrapperTargetRef, setIsOverlayHover, setIsTargetHover]);

  // In 'click' trigger mode, when ever user click on taget, toogle overlay
  useEffect(() => {
    const targetNode = wrapperTargetRef.current.firstElementChild;
    const _eventClickHandler = () => setVisible(prev => !prev);

    if (applyClick) {
      targetNode.addEventListener('click', _eventClickHandler);

      return () => {
        targetNode.removeEventListener('mouseenter', _eventClickHandler);
      };
    }
  }, [applyClick, wrapperTargetRef, setVisible]);

  const overlayStyle = useMemo(() => renderPlacement[placement](gap), [placement, gap]);

  return (
    <div className={cn('rc-absolute-overlay-container', className)} ref={ref}>
      <div className="rc-absolute-overlay-target-wrapper" ref={wrapperTargetRef}>
        {children}
      </div>
      <div
        ref={overlayRef}
        className={cn(
          'rc-overlay rc-overlay-absolute',
          mPlacements[placement],
          {
            '--hidden': !visible,
            '--arrow': arrow,
          },
          overlayClass
        )}
        style={overlayStyle}
      >
        {overlay}
      </div>
    </div>
  );
};

Overlay.displayName = 'Overlay.Absolute';
Overlay.propTypes = {
  placement: PropTypes.string,
  gap: PropTypes.number,
  defaultVisible: PropTypes.bool,
  overlay: PropTypes.any,
  children: PropTypes.any,
  arrow: PropTypes.bool,
  trigger: PropTypes.array,
  onVisibleChange: PropTypes.func,
  canOutsideClickClose: PropTypes.bool,
};
Overlay.defaultProps = {
  placement: 'top',
  gap: 5,
  trigger: ['click'],
  onVisibleChange: f => f,
};

export default Overlay;
