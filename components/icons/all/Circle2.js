import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Circle2 = enhancerIcon('circle-2', 'Circle2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 10a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 -.001" />
  <circle cx="12" cy="12" r="9" />
</svg>
));

export default Circle2;
