import React, { Component } from 'react';
import { Container, Header, Text, Tab, Tabs } from 'native-base';

export default class LoginComponent extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Tab1">
            <Text>Welcome</Text>
          </Tab>
          <Tab heading="Tab2">
          <Text>Logout</Text>
          </Tab>
          <Tab heading="Tab3">
          <Text>Profile</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}