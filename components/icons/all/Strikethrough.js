import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Strikethrough = enhancerIcon('strikethrough', 'Strikethrough', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 5v9a5 5 0 0 0 10 0v-9" />
  <path d="M4 12h16" />
</svg>
));

export default Strikethrough;
