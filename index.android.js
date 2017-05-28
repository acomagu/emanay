import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import Example from './Example';
import Home from './src/home.js';

export default class emanay extends Component {
  render() {
    return (
      <Home />
    );
  }
}

AppRegistry.registerComponent('emanay', () => emanay);
