import React, { Component } from 'react';
import { Grommet } from 'grommet';
import {
  AbstractBox,
  Flex,
  Item,
  PersonAdder,
  OfferAdder,
  Headline
} from './components';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px'
    }
  }
};

class App extends Component {
  render() {
    return (
      <div>
        <Grommet theme={theme}>
          <AbstractBox>
            <Headline label="Problemlos Service online buchen" />
          </AbstractBox>
          <Flex>
            <AbstractBox
              background={'light-4'}
              style={{ width: '20%', height: window.innerHeight - 30 + 'px' }}
            >
              <ul>
                <Item label={'Person hinzufügen'} />
                <Item label={'Auftrag hinzufügen'} />
              </ul>
            </AbstractBox>

            <AbstractBox
              background={'light-1'}
              style={{ width: '80%', height: window.innerHeight - 30 + 'px' }}
            >
              <PersonAdder />
              <OfferAdder />
            </AbstractBox>
          </Flex>
        </Grommet>
      </div>
    );
  }
}

export default App;
