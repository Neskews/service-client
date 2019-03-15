import React, { Component } from 'react';
import { IPeopleListProps } from './types';
import AbstractBox from '../Abstract/AbstractBox';
import PersonAdder from '../People/Adder';

class PeopleList extends Component<IPeopleListProps> {
  componentDidMount() {
    const { getPeople } = this.props;
    if (typeof getPeople === 'function') getPeople();
  }

  render() {
    return <PersonAdder />;
  }
}

export default PeopleList;
