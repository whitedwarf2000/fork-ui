import { useEffect, useRef } from 'react';

const globalBackdropId = 'overlay-backdrop';

const createOverlay = ({
  overlayElement,
  targetElement,
  arrowElement,
  placement,
}) => {
  return {};
};

const useOverlay = ({
  overlayElement,
  targetElement,
  arrowElement,
  placement,
  portal,
}) => {
  const overlay = useRef(null);
  const backdrop = useRef(null);

  useEffect(() => {
    let currentGlobalBackdrop = document.getElementById(globalBackdropId);
    if (!currentGlobalBackdrop) {
      currentGlobalBackdrop = document.createElement('div');
      currentGlobalBackdrop.id = globalBackdropId;
      document.body.appendChild(currentGlobalBackdrop);
    }

    backdrop.current = currentGlobalBackdrop;
  }, [backdrop]);

  useEffect(() => {
    overlay.current = {
      update: () => createOverlay(overlayElement, targetElement, arrowElement),
    };
  }, [overlay, backdrop]);

  useEffect(() => {

  }, [overlayElement, targetElement, arrowElement, placement]);

  return {
    overlay: {
      style: {},
    },
    arrow: {
      style: {},
    }
  };
};
