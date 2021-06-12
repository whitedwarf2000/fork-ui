import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('Square6', 'square-6', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle transform="rotate(180 12 14)" cx="12" cy="14" r="2" />
  <path d="M14 10a2 2 0 1 0 -4 0v4" />
  <rect x="4" y="4" width="16" height="16" rx="2" />
</svg>
));
