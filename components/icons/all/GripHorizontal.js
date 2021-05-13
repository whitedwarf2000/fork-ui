import React from 'react';
import enhancerIcon from '../enhancerIcon';

const GripHorizontal = enhancerIcon('grip-horizontal', 'GripHorizontal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="9" r="1" />
  <circle cx="5" cy="15" r="1" />
  <circle cx="12" cy="9" r="1" />
  <circle cx="12" cy="15" r="1" />
  <circle cx="19" cy="9" r="1" />
  <circle cx="19" cy="15" r="1" />
</svg>
));

export default GripHorizontal;
