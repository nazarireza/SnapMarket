import React, { Component } from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import { colors, styles } from '../assets/styles';

import TabBarIcon from '../components/TabBarIcon';

import Home from '../pages/HomePage';

const dashboardNavigator = createBottomTabNavigator(
  {
    Basket: {
      screen: Home,
      navigationOptions: {
        title: 'سبد خرید',
        tabBarIcon: ({ tintColor: color }) => <TabBarIcon basket {...{ color }} />
      }
    },
    Categories: {
      screen: Home,
      navigationOptions: {
        title: 'دسته بندی',
        tabBarIcon: ({ tintColor: color  }) => <TabBarIcon categories {...{ color }} />
      }
    },
    Search: {
      screen: Home,
      navigationOptions: {
        title: 'جستجو',
        tabBarIcon: ({ tintColor: color  }) => <TabBarIcon search {...{ color }} />
      }
    },
    ShoppingList: {
      screen: Home,
      navigationOptions: {
        title: 'لیست خرید',
        tabBarIcon: ({ tintColor: color  }) => <TabBarIcon shoppingList {...{ color }} />
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'ویترین',
        tabBarIcon: ({ tintColor: color  }) => <TabBarIcon home {...{ color }} />
      }
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      tabBarOptions: {
        labelStyle: {
          ...styles.text
        }
      }
    }
  }
);

export default createAppContainer(dashboardNavigator);
