import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';

const appBootrapNode = document.querySelector('wc-portal-container');
const tagMemo = {};

const registerWebComponent = (tagName) => {
  if (tagMemo[tagName]) {
    return true;
  }
  class CustomWebComponent extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      appBootrapNode.dispatchEvent(new window.CustomEvent(`${tagName}-did-mount`, { detail: tagName }));
    }
    disconnectedCallback() {
      appBootrapNode.dispatchEvent(new window.CustomEvent(`${tagName}-will-unmounting`, { detail: tagName }));
    }
  }
  window.customElements.define(tagName, CustomWebComponent);
  tagMemo[tagName] = true;
}

const withWCPortal = (Component, { tagName }) => {
  const WCPortal = () => {
    const [shouldRender, setShouldRender] = useState(false);
    const ref = useRef();

    const checkNodeExistToRender = useCallback(() => {
      ref.current = document.querySelector(tagName);
      if (ref.current) {
        setShouldRender(true);
      } else {
        setShouldRender(false);
      }
    }, [ref, setShouldRender]);

    useEffect(() => {
      registerWebComponent(tagName);
      checkNodeExistToRender();
    }, [checkNodeExistToRender]);

    useEffect(() => {
      appBootrapNode.addEventListener(`${tagName}-did-mount`, checkNodeExistToRender);
      appBootrapNode.addEventListener(`${tagName}-will-unmounting`, checkNodeExistToRender);
      return () => {
        appBootrapNode.removeEventListener(`${tagName}-did-mount`, checkNodeExistToRender);
        appBootrapNode.removeEventListener(`${tagName}-will-unmounting`, checkNodeExistToRender);
      }
    }, [checkNodeExistToRender]);

    if (!shouldRender) {
      return null;
    }

    return ReactDOM.createPortal(<Component />, ref.current);
  };

  WCPortal.displayName = `withWCPortal(${Component.displayName || Component.name || 'Component'})`;
  WCPortal.propTypes = {};
  WCPortal.defaultProps = {};

  return WCPortal;
};

export default withWCPortal;
