import React from 'react';
import enhancerIcon from '../enhancerIcon';

const SquareRoot = enhancerIcon('square-root', 'SquareRoot', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 12h2l4 8l4 -16h8" />
</svg>
));

export default SquareRoot;
