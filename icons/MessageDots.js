import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('MessageDots', 'message-dots', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
  <line x1="12" y1="11" x2="12" y2="11.01" />
  <line x1="8" y1="11" x2="8" y2="11.01" />
  <line x1="16" y1="11" x2="16" y2="11.01" />
</svg>
));