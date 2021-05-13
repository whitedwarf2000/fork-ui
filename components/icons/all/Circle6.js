import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Circle6 = enhancerIcon('circle-6', 'Circle6', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="14" r="2" />
  <path d="M14 10a2 2 0 1 0 -4 0v4" />
  <circle cx="12" cy="12" r="9" />
</svg>
));

export default Circle6;
