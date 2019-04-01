import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Typography } from '@material-ui/core';
import { IPersonAdderProps, IPersonState, TPersonField } from './types';
import { addPerson } from '../../../api/actions/addPerson';
import { IPerson } from '../../../api/reducers/views/types';

class index extends Component<IPersonAdderProps, IPersonState> {
  state = {
    first_name: '',
    last_name: '',
    points: 0
  };

  change = (value: string, field: TPersonField) => {
    this.setState({
      [field]: value
    });
  };

  render() {
    const { save, isLoading, indicateAddedPerson, error, success } = this.props;
    const person = this.state;

    return (
      <div>
        <Typography>Person hinzufügen</Typography>
        <TextField
          placeholder={'Vorname'}
          onChange={event => {
            const { value } = event.target;
            if (value) this.change(value, 'first_name');
          }}
        />
        <TextField
          placeholder={'Nachname'}
          onChange={event => {
            const { value } = event.target;
            if (value) this.change(value, 'last_name');
          }}
        />
        <Button onClick={() => save(person)}>
          {isLoading ? 'Loading' : 'Ok'}
        </Button>
        {indicateAddedPerson && (success || error)}
      </div>
    );
  }
}
const mapStateToProps = ({
  isLoading,
  indicateAddedPerson,
  success,
  error
}: {
  isLoading: boolean;
  indicateAddedPerson: boolean;
  success: string;
  error: string;
}) => ({
  isLoading,
  indicateAddedPerson,
  error,
  success
});

const mapDispatchToProps = () => ({
  save: (person: IPerson) => addPerson(person)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
