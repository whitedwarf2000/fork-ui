import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Diamond = enhancerIcon('diamond', 'Diamond', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 5h12l3 5l-8.5 9.5a0.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />
  <path d="M10 12l-2 -2.2l.6 -1" />
</svg>
));

export default Diamond;