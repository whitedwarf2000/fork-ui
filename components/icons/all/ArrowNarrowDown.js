import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ArrowNarrowDown = enhancerIcon('arrow-narrow-down', 'ArrowNarrowDown', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="16" y1="15" x2="12" y2="19" />
  <line x1="8" y1="15" x2="12" y2="19" />
</svg>
));

export default ArrowNarrowDown;
