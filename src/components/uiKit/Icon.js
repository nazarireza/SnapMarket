import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

class MyIcon extends Component {
  render() {
    const { small, medium, large, name } = this.props;

    let size = small ? 10 : medium ? 15 : 20;

    return <Icon {...{ name, size }} />;
  }
}

export default MyIcon;
