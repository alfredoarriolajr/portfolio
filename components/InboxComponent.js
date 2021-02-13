import React, { Component } from 'react';
import { Container, Header, Text, Tab, Tabs } from 'native-base';

export default class InboxComponent extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Tab1">
            <Text>HAHA</Text>
          </Tab>
          <Tab heading="Tab2">
          <Text>HEHE</Text>
          </Tab>
          <Tab heading="Tab3">
          <Text>HIHI</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}