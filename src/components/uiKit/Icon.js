import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { colors } from '../../assets/styles';

class MyIcon extends Component {
  render() {
    const { small, medium, large, name, colorPrimary } = this.props;

    return (
      <Icon
        {...{
          name,
          ...(small && { size: 10 }),
          ...(medium && { size: 15 }),
          ...(large && { size: 20 }),
          ...(colorPrimary && { color: colors.primary })
        }}
      />
    );
  }
}

export default MyIcon;
