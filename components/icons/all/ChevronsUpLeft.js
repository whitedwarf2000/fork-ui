import React from 'react';
import enhancerIcon from '../enhancerIcon';

const ChevronsUpLeft = enhancerIcon('chevrons-up-left', 'ChevronsUpLeft', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 15v-8h8" />
  <path d="M11 19v-8h8" />
</svg>
));

export default ChevronsUpLeft;
