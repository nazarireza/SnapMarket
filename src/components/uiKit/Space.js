import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Space extends Component {
  render() {
    const { fill, small, large, xxSmall } = this.props;

    return (
      <View
        style={[
          styles.default,
          fill && styles.fill,
          small && styles.small,
          xxSmall && styles.xxSmall,
          large && styles.large
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  default: {
    width: 30,
    height: 30
  },
  small: {
    width: 10,
    height: 10
  },
  xxSmall: {
    width: 2,
    height: 2
  },
  large: {
    width: 50,
    height: 50
  },
  fill: {
    flex: 1
  }
});

export default Space;
