import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ArrowsJoin = enhancerIcon('arrows-join', 'ArrowsJoin', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 7h5l3.5 5h9.5" />
  <path d="M3 17h5l3.495 -5" />
  <path d="M18 15l3 -3l-3 -3" />
</svg>
));

export default ArrowsJoin;
