import React, { Component } from 'react';
import { Paper } from '@material-ui/core';

const styles = {
  paper: {
    padding: '20px 10px',
    marginTop: '72px'
  }
};

class Content extends Component {
  render() {
    return <Paper style={styles.paper}>{this.props.children}</Paper>;
  }
}

export default Content;
