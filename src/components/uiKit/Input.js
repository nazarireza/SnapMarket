import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { gstyles, colors } from '../../assets/styles';

class Input extends Component {
  render() {
    const {
      style,
      hPaddingSmall,
      hPaddingMedium,
      hPaddingLarge,
      small,
      large,
      xLarge
    } = this.props;

    return (
      <TextInput
        underlineColorAndroid="transparent"
        placeholderTextColor={colors.gray2}
        style={[
          styles.default,
          hPaddingSmall && styles.hPaddingSmall,
          hPaddingMedium && styles.hPaddingMedium,
          hPaddingLarge && styles.hPaddingLarge,
          small && styles.small,
          large && styles.large,
          xLarge && styles.xLarge,
          style
        ]}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  default: {
    ...gstyles.text,
    paddingVertical: 5
  },
  hPaddingSmall: {
    paddingHorizontal: 5
  },
  hPaddingMedium: {
    paddingHorizontal: 10
  },
  hPaddingLarge: {
    paddingHorizontal: 15
  },
  small: {
    fontSize: 10
  },
  large: {
    fontSize: 24
  },
  xLarge: {
    fontSize: 48
  }
});

export default Input;
