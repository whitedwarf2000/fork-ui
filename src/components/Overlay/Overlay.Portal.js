import React, { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';

import mPlacements from '../placements';
import renderPlacement from './render-placement.portal';
import getPosition from '../../utils/getPosition';
import withFindDOMNode from '../../HOCs/withFindDOMNode';

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
  targetNode,
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

  const overlayRef = useRef();

  const applyHover = useMemo(() => trigger.indexOf('hover') >= 0, [trigger]);
  const applyClick = useMemo(() => trigger.indexOf('click') >= 0, [trigger]);

  // When ever user click outside of overlay, close overlay
  const clickOutsideHandler = useCallback(() => {
    if (canOutsideClickClose) {
      setVisible(false);
    }
  }, [setVisible, canOutsideClickClose]);

  useEffect(() => {
    if (!targetNode) {
      return f => f;
    }

    const listener = (event) => {
      if (targetNode.contains(event.target) || overlayRef.current.contains(event.target)) {
        return;
      }
      return clickOutsideHandler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [targetNode, overlayRef, clickOutsideHandler]);

  // In 'hover' trigger mode, when ever user hover mouse outside of target and not hover on overlay, close overlay
  useEffect(() => {
    if (!targetNode) {
      return f => f;
    }

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

    // cheat isTargetHover for life cycle performance by using setIsOverlayHover
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
  }, [applyHover, overlayRef, setVisible, setIsOverlayHover, setIsTargetHover, targetNode]);

  // trigger mouse
  useEffect(() => {
    if (!targetNode) {
      return f => f;
    }

    const _eventMouseEnterOverlayHandler = () => setIsOverlayHover(true);
    const _eventMouseLeaveOverlayHandler = () => setIsOverlayHover(false);
    const _eventMouseEnterHandler = () => setIsTargetHover(true);
    const _eventMouseLeaveHandler = () => setIsTargetHover(false);

    overlayRef.current.addEventListener('mouseenter', _eventMouseEnterOverlayHandler);
    overlayRef.current.addEventListener('mouseleave', _eventMouseLeaveOverlayHandler);
    targetNode.addEventListener('mouseenter', _eventMouseEnterHandler);
    targetNode.addEventListener('mouseleave', _eventMouseLeaveHandler);

    return () => {
      overlayRef.current.removeEventListener('mouseenter', _eventMouseEnterOverlayHandler);
      overlayRef.current.removeEventListener('mouseleave', _eventMouseLeaveOverlayHandler);
      targetNode.removeEventListener('mouseenter', _eventMouseEnterHandler);
      targetNode.removeEventListener('mouseleave', _eventMouseLeaveHandler);
    }
  }, [overlayRef, setIsOverlayHover, setIsTargetHover, targetNode]);

  // In 'click' trigger mode, when ever user click on taget, toogle overlay
  useEffect(() => {
    if (!targetNode) {
      return f => f;
    }

    const _eventClickHandler = () => setVisible(prev => !prev);

    if (applyClick) {
      targetNode.addEventListener('click', _eventClickHandler);

      return () => {
        targetNode.removeEventListener('mouseenter', _eventClickHandler);
      };
    }
  }, [applyClick, setVisible, targetNode]);

  const [targetPosition, setTargetPosition] = useState({
    pageX: 0,
    pageY: 0,
    clientHeight: 0,
    clientWidth: 0,
  });
  const [overlayPosition, setOverlayPosition] = useState({
    pageX: 0,
    pageY: 0,
    clientHeight: 0,
    clientWidth: 0,
  });

  useEffect(() => {
    if (!targetNode) {
      return f => f;
    }
    setTargetPosition(getPosition(targetNode));
  }, [targetNode]);

  useEffect(() => {
    if (!visible) {
      return f => f;
    }

    setOverlayPosition(getPosition(overlayRef.current));
  }, [overlayRef, visible]);

  const overlayStyle = useMemo(() => renderPlacement[placement](targetPosition, overlayPosition, gap), [
    placement,
    gap,
    targetPosition,
    overlayPosition,
  ]);

  return (
    <React.Fragment>
      {children}
      <Portal>
        <div
          ref={overlayRef}
          className={cn(
            'rc-overlay rc-overlay-portal',
            mPlacements[placement],
            {
              '--hidden': !visible,
              '--arrow': arrow,
            },
            overlayClass
          )}
          style={overlayStyle}
        >
          {visible && overlay}
        </div>
      </Portal>
    </React.Fragment>
  );
};

Overlay.displayName = 'Overlay.Portal';
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

export default withFindDOMNode(Overlay);
