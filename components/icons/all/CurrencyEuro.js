import React from 'react';
import enhancerIcon from '../enhancerIcon';

const CurrencyEuro = enhancerIcon('currency-euro', 'CurrencyEuro', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17.2 7a6 7 0 1 0 0 10" />
  <path d="M13 10h-8m0 4h8" />
</svg>
));

export default CurrencyEuro;
