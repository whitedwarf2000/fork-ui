import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Activity = enhancerIcon('activity', 'Activity', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 12h4l3 8l4 -16l3 8h4" />
</svg>
));

export default Activity;