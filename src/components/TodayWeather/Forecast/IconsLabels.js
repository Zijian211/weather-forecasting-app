import React from 'react';

const IconsLabels = ({ x, y, value, index }) => {
  const href = value ? (value.default || value) : null;
  if (!href) return null;

  return (
    <image
      href={href}
      x={Math.round(x-20)}
      y={Math.round(y-10)}
      width={30}
      height={30}
      preserveAspectRatio="xMidYMid slice"
    />
  );
};

export default IconsLabels;
