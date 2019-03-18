import React from 'react';

const Item = (props: any) => (
  <>
    <li {...props} onClick={props.onClick}>
      {props.label}
    </li>
  </>
);

export default Item;
