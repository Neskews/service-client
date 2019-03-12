import React, { Component } from 'react';
import { Box, Grid, Grommet, Text, Heading } from 'grommet';
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

class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>
        <Grid
          fill
          rows={['auto', 'flex']}
          columns={['auto', 'flex']}
          gap="small"
          areas={[
            { name: 'header', start: [0, 0], end: [1, 0] },
            { name: 'sidebar', start: [0, 1], end: [0, 1] },
            { name: 'main', start: [1, 1], end: [1, 1] }
          ]}
        >
          <Box gridArea="header" background="brand">
            <Heading size="small">Maybe I need some content</Heading>
          </Box>
          <Box gridArea="sidebar" background="light-5">
            {['First', 'Second', 'Third'].map(label => (
              <Text>{label}</Text>
            ))}
          </Box>
          <Box
            gridArea="main"
            background="light-2"
            justify="center"
            align="center"
          >
            <PeopleList />
          </Box>
        </Grid>
      </Grommet>
    );
  }
}

export default App;
