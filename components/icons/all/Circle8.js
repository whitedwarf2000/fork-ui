import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Circle8 = enhancerIcon('circle-8', 'Circle8', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="10" r="2" />
  <circle cx="12" cy="14" r="2" />
  <circle cx="12" cy="12" r="9" />
</svg>
));

export default Circle8;
