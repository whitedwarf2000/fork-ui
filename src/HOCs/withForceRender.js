import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const withFindDOMNode = (WrappedComponent) => {
  
  return function(props) {
    const [toggle, setToggle] = useState(true);
    return toggle ? props.children : null;
  }

  ReturnComponent.displayName = `withFindDOMNode(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return ReturnComponent;
};

export default withFindDOMNode;
