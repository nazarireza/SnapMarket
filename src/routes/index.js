import React, { Component } from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import { colors, gstyles } from '../assets/styles';

import { TabBarIcon } from '../components/uiKit';

import Home from '../pages/HomePage';

const dashboardNavigator = createBottomTabNavigator(
  {
    Basket: {
      screen: Home,
      navigationOptions: {
        title: 'سبد خرید',
        tabBarIcon: ({ tintColor: color }) => (
          <TabBarIcon basket {...{ color }} />
        )
      }
    },
    Categories: {
      screen: Home,
      navigationOptions: {
        title: 'دسته بندی',
        tabBarIcon: ({ tintColor: color }) => (
          <TabBarIcon categories {...{ color }} />
        )
      }
    },
    Search: {
      screen: Home,
      navigationOptions: {
        title: 'جستجو',
        tabBarIcon: ({ tintColor: color }) => (
          <TabBarIcon search {...{ color }} />
        )
      }
    },
    ShoppingList: {
      screen: Home,
      navigationOptions: {
        title: 'لیست خرید',
        tabBarIcon: ({ tintColor: color }) => (
          <TabBarIcon shoppingList {...{ color }} />
        )
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'ویترین',
        tabBarIcon: ({ tintColor: color }) => <TabBarIcon home {...{ color }} />
      }
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      tabBarOptions: {
        labelStyle: {
          ...gstyles.text
        }
      }
    }
  }
);

export default createAppContainer(dashboardNavigator);
