import React, { useMemo } from 'react';

const SingleValue = ({ items, value }) => {
  if (!value || !value.length) {
    return null;
  }
  const { title } = items[value[0]];

  return (
    <span>
      <span style={{ margin: '0 0.5em', verticalAlign: 'middle' }}>
        {title}
      </span>
    </span>
  );
};

export default SingleValue;
