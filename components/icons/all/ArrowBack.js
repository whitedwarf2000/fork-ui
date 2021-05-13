import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ArrowBack = enhancerIcon('arrow-back', 'ArrowBack', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
</svg>
));

export default ArrowBack;
