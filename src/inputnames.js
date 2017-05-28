import React, { Component } from 'react';
import { Image, View, StatusBar, StyleSheet, Dimensions, Platform  } from 'react-native';
import { Item, Label, Input, H3, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class InputNames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["", "", ""]
    }
  }
  setNames(i, name) {
    let names = this.state.names;
    names[i] = name;
    console.log(this.props);
    this.props.onChangeNames(names);
  }
  render() {
    const { navigate } = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent >
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>参加者の名前を入力してください</Title>
          </Body>
          <Right />
        </Header>
        <View style={{ marginBottom: 50 }}>
          <Item floatingLabel>
            <Label>1人目の名前</Label>
            <Input onChangeText={(text) => this.setNames(0, text)} />
          </Item>
          <Item floatingLabel>
            <Label>2人目の名前</Label>
            <Input onChangeText={(text) => this.setNames(1, text)} />
          </Item>
          <Item floatingLabel>
            <Label>3人目の名前</Label>
            <Input onChangeText={(text) => this.setNames(2, text)} />
          </Item>
        </View>
        <View style={{ marginBottom: 80 }}>
          <Button
            style={{ backgroundColor: '#6FAF98', alignSelf: 'center' }}
            onPress={() => navigate('Canvas')}
          >
            <Text>次へ</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
  routes: state.drawer.routes,
});
