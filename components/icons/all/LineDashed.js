import React from 'react';
import enhancerIcon from '../enhancerIcon';

const LineDashed = enhancerIcon('line-dashed', 'LineDashed', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 12h2" />
  <path d="M17 12h2" />
  <path d="M11 12h2" />
</svg>
));

export default LineDashed;
