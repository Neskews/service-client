import React, { Component } from 'react';
import { Headline } from '../../../components';
import { TextInput } from 'grommet';

class index extends Component {
  render() {
    return (
      <div>
        <Headline label="Angebot hinzufügen" />
        <TextInput placeholder={'Name'} />
      </div>
    );
  }
}

export default index;
