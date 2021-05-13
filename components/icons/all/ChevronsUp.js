import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ChevronsUp = enhancerIcon('chevrons-up', 'ChevronsUp', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="7 11 12 6 17 11" />
  <polyline points="7 17 12 12 17 17" />
</svg>
));

export default ChevronsUp;
