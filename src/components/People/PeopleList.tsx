import React, { Component } from 'react';
import { IPeopleListProps } from './types';

class PeopleList extends Component<IPeopleListProps> {
  componentDidMount() {
    const { getPeople } = this.props;
    if (typeof getPeople === 'function') getPeople();
  }

  render() {
    const { people, onDelete } = this.props;
    if (people && people.length > 0)
      return (
        <div>
          {JSON.stringify(people)}
          <button onClick={onDelete}>delete</button>
        </div>
      );
    return <div>no people found</div>;
  }
}

export default PeopleList;
