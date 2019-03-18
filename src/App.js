import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grommet } from 'grommet';
import {
  AbstractBox,
  Flex,
  Item,
  PersonAdder,
  OfferAdder,
  Headline
} from './components';
import { CHANGE_VIEW } from './api/types';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px'
    }
  }
};

const views = {
  addPerson: 'add-person',
  addOffer: 'add-offer'
};

class App extends Component {
  render() {
    const { changeView, view } = this.props;

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
                <Item
                  onClick={() => changeView(views.addPerson)}
                  label={'Person hinzufügen'}
                />
                <Item
                  onClick={() => changeView(views.addOffer)}
                  label={'Auftrag hinzufügen'}
                />
              </ul>
            </AbstractBox>

            <AbstractBox
              background={'light-1'}
              style={{ width: '80%', height: window.innerHeight - 30 + 'px' }}
            >
              {view === 'add-person' && <PersonAdder />}
              {view === 'add-offer' && <OfferAdder />}
            </AbstractBox>
          </Flex>
        </Grommet>
      </div>
    );
  }
}

const mapStateToProps = ({ view }) => ({
  view
});

const mapDispatchToProps = dispatch => ({
  changeView: view =>
    dispatch({
      type: CHANGE_VIEW,
      payload: view
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
