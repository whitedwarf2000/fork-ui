import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ChevronUp = enhancerIcon('chevron-up', 'ChevronUp', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="6 15 12 9 18 15" />
</svg>
));

export default ChevronUp;
