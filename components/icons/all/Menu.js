import React from 'react';
import enhancerIcon from '../enhancerIcon';

const Menu = enhancerIcon('menu', 'Menu', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="8" x2="20" y2="8" />
  <line x1="4" y1="16" x2="20" y2="16" />
</svg>
));

export default Menu;
