import React, { Component } from 'react';
import { TextField, Typography } from '@material-ui/core';

class index extends Component {
  render() {
    return (
      <div>
        <Typography>Angebot hinzufügen</Typography>
        <TextField placeholder={'Name'} />
      </div>
    );
  }
}

export default index;
