import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, List, ListItemIcon, Button } from '@material-ui/core';
import { People } from '@material-ui/icons';
import { getPeople } from '../../../api/actions/getPeople';
import { removePerson } from '../../../api/actions/removePerson';
import { IPeopleListerProps } from './types';
import { IPerson } from '../../../api/reducers/types';

const styles = {
  listElement: {
    display: 'flex',
    maxWidth: '400px'
  }
};

class index extends Component<IPeopleListerProps> {
  componentDidMount() {
    const { get } = this.props;

    // if we can get a list of people, do it
    if (typeof get === 'function') get();
  }

  render() {
    const { people, remove } = this.props;

    return (
      <List>
        <ListItem>Name</ListItem>
        {people &&
          people.length > 0 &&
          people.map(({ name, id }, idx) => (
            <ListItem style={styles.listElement}>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItem key={idx}>{name}</ListItem>
              <Button onClick={() => remove(id)}>Löschen</Button>
            </ListItem>
          ))}
      </List>
    );
  }
}
const mapStateToProps = ({ people }: { people: IPerson[] }) => ({
  people
});

const mapDispatchToProps = () => ({
  get: () => getPeople(),
  remove: (id: number | undefined) => removePerson(id)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
