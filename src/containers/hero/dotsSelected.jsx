import React from 'react';

const DotsSelected = (props) => {
  const { children, ...restProps } = props;

  return (
    <button className="dot-button" type="button" {...restProps}>
      {children}
    </button>
  );
};

export default DotsSelected;
