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
import Camera from './camera.js';
import Canvas from './canvas.js';
import InputNames from './inputnames.js';
import ShowImages from './showimage.js';

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

export default class Emanay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["", "", ""],
      screenName: 'Home',
      imageElms: [],
    };
    this.screens = {
      'Home': <Home navigate={(screenName) => this.setState({screenName})} />,
      'Camera': <Camera navigate={(screenName) => this.setState({screenName})} onInputImages={() => this.setState({screenName: "ShowImages"})} />,
      'Canvas': <Canvas navigate={(screenName) => this.setState({screenName})} onInputImages={(imageElms) => this.handleImages(imageElms)} />,
      'InputNames': <InputNames onChangeNames={(names) => this.setState({names})} navigate={(screenName) => this.setState({screenName})} />,
      'ShowImages': <ShowImages />
    };
  }
  handleImages(imageElms) {
    this.setState({imageElms, screenName: "Camera"});
  }
  render() {
    console.log(this.screens[this.state.screenName]);
    return this.screens[this.state.screenName];
  }
}

StackNavigator({
  Main: {
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
  Camera: {
    screen: Camera,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  Canvas: {
    screen: Canvas,
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
  InputNames: {
    screen: InputNames,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
});
