import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {
  Scene,
  Router,
} from 'react-native-router-flux';
import {
  StackNavigator,
} from 'react-navigation';
import Home from './home.js';

class IconExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
    };
  }
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent >
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>{this.state.a}</Title>
          </Body>
          <Right />
        </Header>
        <Button onPress={() => {
          console.log("onclick");
          console.log(this.state.a);
          this.setState({a: this.state.a+1});
          navigation.navigate('A');
        }}>
          <Text>
            Button
          </Text>
        </Button>
      </Container>
    );
  }
}

const A = () => (
  <Container>
    <Header>
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body>
        <Title>A</Title>
      </Body>
      <Right />
    </Header>
    <Text>
      Hello,
    </Text>
  </Container>
);

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  IconExample: {
    screen: IconExample,
    headerMode: "none",
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  A: {
    screen: A,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
});
