import React from 'react';
import { ListItem, Typography, IconButton } from '@material-ui/core';

const styles = {
  iconButton: {
    borderRadius: '2px'
  },
  typography: {
    marginLeft: '8px'
  }
};

const Item = (props: any) => (
  <>
    <ListItem {...props} onClick={props.onClick}>
      <IconButton style={styles.iconButton}>
        {props.icon}
        <Typography style={styles.typography}>{props.label}</Typography>
      </IconButton>
    </ListItem>
  </>
);

export default Item;
