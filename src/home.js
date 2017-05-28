import React, { Component } from 'react';
import { Image, View, StatusBar, StyleSheet, Dimensions, Platform  } from 'react-native';
import { Container, Button, H3, Text } from 'native-base';

import Emanay from './app.js';

const launchscreenBg = require('../img/launchscreen-bg.png');

export default class Home extends Component { // eslint-disable-line
  render() {
    const { navigation } = this.props;
    console.log(navigation);
    return (
      <Container>
        <StatusBar barStyle='light-content'/>
        <Image source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>Emanay</Text>
          </View>
          <View style={{ alignItems: 'center', marginBottom: 50, backgroundColor: 'transparent' }}>
            <H3 style={styles.text}>Emanay</H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}>Emanay</H3>
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button
              style={{ backgroundColor: '#6FAF98', alignSelf: 'center' }}
              onPress={() => navigation.navigate('IconExample')}
            >
              <Text>スタート</Text>
            </Button>
          </View>
        </Image>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
  routes: state.drawer.routes,
});

const deviceHeight = Dimensions.get('window').height;

const styles = {
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30,
  },
  logo: {
    position: 'absolute',
    left: (Platform.OS === 'android') ? 40 : 50,
    top: (Platform.OS === 'android') ? 35 : 60,
    width: 280,
    height: 100,
  },
  text: {
    color: '#D8D8D8',
    bottom: 6,
  },
};
