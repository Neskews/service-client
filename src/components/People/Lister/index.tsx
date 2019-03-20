import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../../../api/actions/getPeople';
import { removePerson } from '../../../api/actions/removePerson';
import { IPeopleListerProps, IPeopleListerState } from './types';
import { IPerson } from '../../../api/reducers/types';

class index extends Component<IPeopleListerProps> {
  componentDidMount() {
    const { get } = this.props;

    // if we can get a list of people, do it
    if (typeof get === 'function') get();
  }

  render() {
    const { people } = this.props;
    return (
      <div>
        <p>Name</p>
        {people &&
          people.length > 0 &&
          people.map(({ name }, idx) => (
            <>
              <p key={idx}>{name}</p>
              <a>Löschen</a>
            </>
          ))}
      </div>
    );
  }
}
const mapStateToProps = ({ people }: { people: IPerson[] }) => ({
  people
});

const mapDispatchToProps = () => ({
  get: () => getPeople(),
  remove: (id: number) => removePerson(id)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
