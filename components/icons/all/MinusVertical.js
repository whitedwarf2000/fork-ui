import React from 'react';
import enhancerIcon from '../enhancerIcon';

const MinusVertical = enhancerIcon('minus-vertical', 'MinusVertical', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 5v14" />
</svg>
));

export default MinusVertical;
