import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Circle7 = enhancerIcon('circle-7', 'Circle7', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 8h4l-2 8" />
  <circle cx="12" cy="12" r="9" />
</svg>
));

export default Circle7;
