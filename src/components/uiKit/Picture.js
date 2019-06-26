import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Picture extends Component {
  render() {
    const { style, fill, aspectRatio } = this.props;

    return (
      <Image
        style={[
          styles.default,
          style,
          fill && styles.fill,
          aspectRatio && { aspectRatio }
        ]}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  default: {},
  fill: {}
});

export default Picture;
