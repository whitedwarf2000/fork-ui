import React from 'react';

const Link = ({ href, ...otherProps }) => <div {...otherProps} />;

Link.displayName = 'Anchor.Link';

export default Link;
