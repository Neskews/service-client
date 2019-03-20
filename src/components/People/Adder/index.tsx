import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Typography } from '@material-ui/core';
import { IPersonAdderProps, IPersonState } from './types';
import { addPerson } from '../../../api/actions/addPerson';
import { IPerson } from '../../../api/reducers/types';

class index extends Component<IPersonAdderProps, IPersonState> {
  state = {
    name: ''
  };

  changeName = (event: any) => {
    const { value } = event.currentTarget;

    this.setState({ name: value });
  };

  render() {
    const { save, isLoading, indicateSuccessfullyAddedPerson } = this.props;
    const person = this.state;

    return (
      <div>
        <Typography>Person hinzufügen</Typography>
        <TextField placeholder={'Name'} onChange={this.changeName} />
        <Button onClick={() => save(person)}>
          {isLoading ? 'Loading' : 'Ok'}
        </Button>
        {indicateSuccessfullyAddedPerson && <div>Das hat funktioniert!</div>}
      </div>
    );
  }
}
const mapStateToProps = ({
  isLoading,
  indicateSuccessfullyAddedPerson
}: {
  isLoading: boolean;
  indicateSuccessfullyAddedPerson: boolean;
}) => ({
  isLoading,
  indicateSuccessfullyAddedPerson
});

const mapDispatchToProps = () => ({
  save: (person: IPerson) => addPerson(person)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
