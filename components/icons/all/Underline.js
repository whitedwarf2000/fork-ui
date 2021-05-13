import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Underline = enhancerIcon('underline', 'Underline', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 5v5a5 5 0 0 0 10 0v-5" />
  <path d="M5 19h14" />
</svg>
));

export default Underline;
