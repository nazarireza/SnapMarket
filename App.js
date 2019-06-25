/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

import { colors } from './src/assets/styles';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.background}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  }
});
