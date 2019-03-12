import React, { Component } from 'react';
import { IPeopleListProps } from './types';
import { IPerson } from '../../api/reducers/types';

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
          <table>
            <tr>
              <th>Name</th>
            </tr>
            {people.map(({ name, id }: IPerson) => (
              <tr>
                <td>{name}</td>
                <td>
                  <button onClick={() => onDelete(id)}>delete</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      );
    return <div>no people found</div>;
  }
}

export default PeopleList;
