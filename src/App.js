import React, { Component } from 'react';
import { Box, Grommet, Button } from 'grommet';
import PeopleList from './components/People';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px'
    }
  }
};

const AbstractBox = props => {
  return (
    <Box
      animation={'fadeIn'}
      align={'start'}
      elevation={'medium'}
      pad={'10px'}
      margin={'5px'}
      {...props}
    />
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Grommet theme={theme}>
          <AbstractBox background={'light-4'}>
            <Button label={'Person hinzufügen'} />
            <Button label={'Auftrag hinzufügen'} />
          </AbstractBox>
          <AbstractBox background={'light-1'}>
            <PeopleList />
          </AbstractBox>
        </Grommet>
      </div>
    );
  }
}

export default App;
