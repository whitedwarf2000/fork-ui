import React from 'react';
import enhancerIcon from '../enhancerIcon';

const CaretLeft = enhancerIcon('caret-left', 'CaretLeft', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 15l-6 -6l-6 6h12" transform="rotate(270 12 12)" />
</svg>
));

export default CaretLeft;
