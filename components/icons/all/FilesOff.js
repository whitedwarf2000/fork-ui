import React from 'react';
import enhancerIcon from '../enhancerIcon';

const FilesOff = enhancerIcon('files-off', 'FilesOff', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 17h-6a2 2 0 0 1 -2 -2v-6m0 -4a2 2 0 0 1 2 -2h4l5 5v7c0 .294 -.063 .572 -.177 .823" />
  <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" />
  <line x1="3" y1="3" x2="21" y2="21" />
</svg>
));

export default FilesOff;