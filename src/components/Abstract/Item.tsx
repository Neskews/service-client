import React from 'react';
import { Text } from 'grommet';

const Item = (props: any) => (
  <>
    <li {...props}>{props.label}</li>
  </>
);

export default Item;
