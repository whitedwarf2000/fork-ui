import React from 'react';
import withIconEnhancer from '../HOCs/withIconEnhancer';

export default withIconEnhancer('RelationOneToMany', 'relation-one-to-many', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <path d="M7 10h1v4" />
  <path d="M14 14v-4l3 4v-4" />
  <line x1="11" y1="10.5" x2="11" y2="10.51" />
  <line x1="11" y1="13.5" x2="11" y2="13.51" />
</svg>
));
