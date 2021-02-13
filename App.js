import React, { Component } from 'react';
import { Container } from 'native-base';
import MainComponent from './components/MainComponent';

export default class App extends Component {
  render() {
    return (
      <Container>
        
          <MainComponent />
        
      </Container>
    );
  }
}