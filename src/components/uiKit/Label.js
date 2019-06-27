import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { gstyles, colors } from '../../assets/styles';

class Label extends Component {
  render() {
    const {
      bold,
      xSmall,
      small,
      large,
      xLarge,
      children,
      style,
      colorPrimary,
      colorDark,
      colorNormal,
      colorLight,
      white,
      decoration,
      line
    } = this.props;

    return (
      <Text
        numberOfLines={line}
        style={[
          styles.default,
          bold && styles.bold,
          xSmall && styles.xSmall,
          small && styles.small,
          large && styles.large,
          xLarge && styles.xLarge,
          colorPrimary && styles.colorPrimary,
          colorDark && styles.colorDark,
          colorNormal && styles.colorNormal,
          colorLight && styles.colorLight,
          white && styles.white,
          decoration && styles.decoration,
          style && style
        ]}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    ...gstyles.text
  },
  bold: {
    fontWeight: 'bold'
  },
  xSmall: {
    fontSize: 10
  },
  small: {
    fontSize: 12
  },
  large: {
    fontSize: 24
  },
  xLarge: {
    fontSize: 48
  },
  colorPrimary: {
    color: colors.primary
  },
  colorDark: {
    color: '#3D3D3D'
  },
  colorNormal: {
    color: '#979797'
  },
  colorLight: {
    color: '#D2D2D2'
  },
  white: {
    color: 'white'
  },
  decoration: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through'
  }
});

export default Label;
