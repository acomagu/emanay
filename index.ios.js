import React, { Component } from 'react';
<<<<<<< HEAD
import { AppRegistry,View } from 'react-native';

import Example from './Example';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Tegaki from './src/Tegaki/Tegaki';

export default class emanay extends Component {
  render() {
    return (
        <Example />
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.ios.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu
      //   </Text>
      // </View>
    );
  }
}

AppRegistry.registerComponent('emanay', () => emanay);
