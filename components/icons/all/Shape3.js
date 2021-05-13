import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Shape3 = enhancerIcon('shape-3', 'Shape3', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="5" r="2" />
  <circle cx="19" cy="19" r="2" />
  <circle cx="19" cy="5" r="2" />
  <circle cx="5" cy="19" r="2" />
  <path d="M7 5h10m-12 2v10m14 -10v10" />
</svg>
));

export default Shape3;
