import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Eyeglass2 = enhancerIcon('eyeglass-2', 'Eyeglass2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 4h-2l-3 10v2.5" />
  <path d="M16 4h2l3 10v2.5" />
  <line x1="10" y1="16" x2="14" y2="16" />
  <circle cx="17.5" cy="16.5" r="3.5" />
  <circle cx="6.5" cy="16.5" r="3.5" />
</svg>
));

export default Eyeglass2;
