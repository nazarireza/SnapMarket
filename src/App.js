/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import RootNavigator from './routes';
import store from './redux';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <Provider {...{ store }}>
        <RootNavigator />
      </Provider>
    );
  }
}
