import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input, Label  } from 'native-base';
import LoginComponent from './LoginComponent';

export default class MainComponent extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='pulse' />
            </Button>
          </Left>
          <Body>
            <Title>Contact Tracing</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>phone number</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
        <Button full>
            <Text>Check in</Text>
          </Button>
          <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="flask" />
              <Text>Vaccine</Text>
            </Button>
            <Button vertical>
              <Icon name="medkit" />
              <Text>History</Text>
            </Button>
            <Button vertical>
              <Icon name="navigate" />
              <Text>Trace</Text>
            </Button>
            <Button vertical>
              <Icon name="chatbubble" />
              <Text>Inbox</Text>
            </Button>
            <Button vertical onPress={<LoginComponent />}>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}