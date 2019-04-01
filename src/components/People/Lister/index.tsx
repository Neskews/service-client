import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, List, ListItemIcon, Button } from '@material-ui/core';
import { People } from '@material-ui/icons';
import { getPeople } from '../../../api/actions/people/getPeople';
import { removePerson } from '../../../api/actions/people/removePerson';
import { IPeopleListerProps } from './types';
import { IPerson } from '../../../api/reducers/views/types';
import { increasePersonPoints } from '../../../api/actions/people/increasePersonPoints';

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
    const { people, remove, error, increase } = this.props;

    return (
      <div>
        {error ? (
          <div>{error}</div>
        ) : (
          <List>
            {people &&
              people.length > 0 &&
              people.map(({ first_name, last_name, points, id }, idx) => (
                <ListItem style={styles.listElement} key={idx}>
                  <ListItemIcon>
                    <People />
                  </ListItemIcon>
                  <ListItem>{first_name}</ListItem>
                  <ListItem>{last_name}</ListItem>
                  <ListItem>{points}</ListItem>
                  <ListItem>
                    <Button onClick={() => remove(id)}>Löschen</Button>
                  </ListItem>
                  <ListItem>
                    <Button onClick={() => increase(id)}>Aufwerten</Button>
                  </ListItem>
                </ListItem>
              ))}
          </List>
        )}
      </div>
    );
  }
}
const mapStateToProps = ({
  people,
  error
}: {
  people: {
    people: IPerson[]
  };
  error: string;
}) => ({
  people: people.people,
  error
});

const mapDispatchToProps = () => ({
  get: () => getPeople(),
  remove: (id?: number) => removePerson(id),
  increase: (id?: number) => increasePersonPoints(id, 10)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
