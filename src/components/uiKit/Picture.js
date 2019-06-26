import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Picture extends Component {
  render() {
    const { style } = this.props;

    return (
      <Image
        // resizeMode="contain"
        style={[styles.default, style]}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  default: {
    width: '100%',
    aspectRatio: 2.23
  }
});

export default Picture;
