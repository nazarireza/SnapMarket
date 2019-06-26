import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Animated from 'react-native-reanimated';

class Stack extends Component {
  render() {
    const {
      horizontal,
      absolute,
      left,
      right,
      top,
      bottom,
      centerItems,
      hCenterItems,
      vCenterItems,
      hEndItems,
      vEndItems,
      fill,
      children,
      flex,
      style,
      highlight,
      white,
      clip,
      radius,
      round,
      circle,
      paddingSmall,
      paddingMedium,
      paddingLarge,
      hPaddingSmall,
      hPaddingMedium,
      hPaddingLarge,
      borderLight,
      borderNormal,
      borderDark,
      border,
      splitterBorder,
      animated
    } = this.props;

    const Container = props =>
      !animated ? <View {...props} /> : <Animated.View {...props} />;

    return (
      <Container
        style={[
          styles.default,
          !absolute && flex && { flex },
          horizontal && styles.horizontal,
          absolute && styles.absolute,
          centerItems && styles.centerItems,
          hCenterItems &&
            (horizontal ? styles.vCenterItems : styles.hCenterItems),
          vCenterItems &&
            (horizontal ? styles.hCenterItems : styles.vCenterItems),
          vEndItems && (horizontal ? styles.hEndItems : styles.vEndItems),
          hEndItems && (horizontal ? styles.vEndItems : styles.hEndItems),
          absolute && fill && styles.fill,
          absolute && left && styles.left,
          absolute && right && styles.right,
          absolute && top && styles.top,
          absolute && top !== true && { top },
          absolute && bottom && styles.bottom,
          white && styles.white,
          highlight && styles.highlight,
          clip && styles.clip,
          radius && styles.radius,
          radius && radius !== true && { borderRadius: radius },
          round && styles.round,
          circle && styles.circle,
          circle && { width: circle, height: circle },
          !circle && paddingSmall && styles.paddingSmall,
          !circle && paddingMedium && styles.paddingMedium,
          !circle && paddingLarge && styles.paddingLarge,
          !circle && hPaddingSmall && styles.hPaddingSmall,
          !circle && hPaddingMedium && styles.hPaddingMedium,
          !circle && hPaddingLarge && styles.hPaddingLarge,
          borderLight && styles.borderLight,
          borderNormal && styles.borderNormal,
          borderDark && styles.borderDark,
          (borderLight || borderNormal || borderDark) &&
            (splitterBorder ? { borderBottomWidth: 1 } : { borderWidth: 1 }),
          border && { borderWidth: border },
          style && style
        ]}>
        {children}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  default: {},
  horizontal: {
    flexDirection: 'row'
  },
  absolute: {
    position: 'absolute'
  },
  centerItems: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  hCenterItems: {
    alignItems: 'center'
  },
  vCenterItems: {
    justifyContent: 'center'
  },
  hEndItems: {
    alignItems: 'flex-end'
  },
  vEndItems: {
    justifyContent: 'flex-end'
  },
  fill: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  left: {
    left: 0
  },
  right: {
    right: 0
  },
  top: {
    top: 0
  },
  bottom: {
    bottom: 0
  },
  highlight: {
    backgroundColor: 'yellow'
  },
  white: {
    backgroundColor: 'white'
  },
  clip: {
    overflow: 'hidden'
  },
  radius: {
    borderRadius: 5
  },
  round: {
    borderRadius: 200
  },
  circle: {
    borderRadius: 200
  },
  paddingSmall: {
    padding: 5
  },
  paddingMedium: {
    padding: 10
  },
  paddingLarge: {
    padding: 15
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
  borderLight: {
    borderColor: '#D2D2D2'
  },
  borderNormal: {
    borderColor: '#979797'
  },
  borderDark: {
    borderColor: '#3D3D3D'
  }
});

export default Stack;