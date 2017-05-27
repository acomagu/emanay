import React, { Component } from 'react';
import { AppRegistry,View } from 'react-native';

import Example from './Example';

export default class emanay extends Component {
  render() {
    return (
        <Example />
    );
  }
}

AppRegistry.registerComponent('emanay', () => emanay);
