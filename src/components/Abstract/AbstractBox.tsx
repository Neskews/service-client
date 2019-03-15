import React, { Component } from 'react';
import { Box } from 'grommet';

const AbstractBox = (props: any) => {
  return (
    <Box
      animation={'fadeIn'}
      align={'start'}
      elevation={'medium'}
      pad={'10px'}
      margin={'5px'}
      {...props}
    />
  );
};

export default AbstractBox;
