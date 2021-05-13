import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Circle4 = enhancerIcon('circle-4', 'Circle4', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M13 16v-8l-4 6h5" />
  <circle cx="12" cy="12" r="9" />
</svg>
));

export default Circle4;
