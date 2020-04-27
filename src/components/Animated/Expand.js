import React, { memo } from 'react';
import cn from 'classnames';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';

import usePrevious from '../../hooks/usePrevious';
import ResizeObserver from 'resize-observer-polyfill';

const withMeansure = (WrappedComponent) => {
  class Meansure extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        meansure: {
          left: 0,
          top: 0,
          width: 0,
          height: 0,
        },
      };
    }
  
    componentDidMount() {
      this.node = ReactDOM.findDOMNode(this).firstElementChild;
      this.ro =  new ResizeObserver(([entry]) => this.setState({ meansure: entry.contentRect }));
  
      if (this.node) {
        this.ro.observe(this.node);
      }
    }
  
    componentWillUnmount() {
      this.ro.disconnect(this.node);
    }
  
    render() {

      return (
        <WrappedComponent
          {...this.props}
          meansure={this.state.meansure}
        />
      );
    }
  }

  return Meansure;
}

const Expand = memo(({ children, isExpanded, meansure, className }) => {
  const previous = usePrevious(isExpanded);

  const { height, ...otherStyle } = useSpring({
    from: {
      height: 0,
      opacity: 0,
    },
    to: {
      height: isExpanded ? meansure.height : 0,
      opacity: isExpanded ? 1 : 0,
    },
  });

  return (
    <animated.div
      className={cn('rc-animated rc-animated-expand', className)}
      style={{
        ...otherStyle,
        height: isExpanded && previous === isExpanded ? 'auto' : height,
      }}
    >
      {children}
    </animated.div>
  );
});

export default withMeansure(Expand);
