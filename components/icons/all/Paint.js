import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Paint = enhancerIcon('paint', 'Paint', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="5" y="3" width="14" height="6" rx="2" />
  <path d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2" />
  <rect x="10" y="15" width="4" height="6" rx="1" />
</svg>
));

export default Paint;