import React, { Component } from 'react';
import { Headline } from '../../../components';
import { connect } from 'react-redux';
import { TextInput, Button } from 'grommet';
import { IPersonAdderProps, IPersonState } from './types';
import { addPerson } from '../../../api/actions/addPerson';
import { IPerson } from '../../../api/reducers/types';

class index extends Component<IPersonAdderProps, IPersonState> {
  state = {
    name: ''
  };

  changeName = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    this.setState({ name: value });
  };

  render() {
    const { save, isLoading, indicateSuccessfullyAddedPerson } = this.props;
    const person = this.state;

    return (
      <div>
        <Headline label="Person hinzufügen" />
        <TextInput placeholder={'Name'} onChange={this.changeName} />
        <Button
          label={isLoading ? 'Loading' : 'Ok'}
          onClick={() => save(person)}
        />
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
