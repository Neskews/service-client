import React from 'react';
import { Box } from 'grommet';

const Flex = (props: any) => (
  <Box style={{ display: 'flex', flexDirection: 'row' }}>{props.children}</Box>
);

export default Flex;
