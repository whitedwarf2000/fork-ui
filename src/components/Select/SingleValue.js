import React, { useMemo } from 'react';
import Icon from '../Icon';

const SingleValue = ({ items, value }) => {
  if (!value || !value.length) {
    return null;
  }
  const { icon, title } = items[value[0]];

  const renderedIcon = useMemo(() => {
    if (!icon) {
      return null;
    }
    return typeof icon === 'string'
      ? <Icon name={icon} />
      : icon;
  }, [icon, title]);

  return (
    <span>
      {renderedIcon}
      <span style={{ margin: '0 0.5em' }}>
        {title}
      </span>
    </span>
  );
};

export default SingleValue;
