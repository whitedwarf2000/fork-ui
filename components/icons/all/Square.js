import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Square = enhancerIcon('square', 'Square', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
</svg>
));

export default Square;
