import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = () => {};

const mapDispatchToProps = () => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
