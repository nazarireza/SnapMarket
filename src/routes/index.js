import React, { Component } from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import { colors, gstyles } from '../assets/styles';

import { TabBarIcon } from '../components/uiKit';

import Home from '../pages/HomePage';
import ShoppingList from '../pages/ShoppingListPage';
import Search from '../pages/SearchPage';
import Categories from '../pages/CategoriesPage';
import Basket from '../pages/BasketPage';

const dashboardNavigator = createBottomTabNavigator(
  {
    _Basket: {
      screen: Basket,
      navigationOptions: {
        title: 'سبد خرید',
        tabBarIcon: ({ tintColor: color }) => (
          <TabBarIcon basket {...{ color }} />
        )
      }
    },
    Categories: {
      screen: Categories,
      navigationOptions: {
        title: 'دسته بندی',
        tabBarIcon: ({ tintColor: color }) => (
          <TabBarIcon categories {...{ color }} />
        )
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        title: 'جستجو',
        tabBarIcon: ({ tintColor: color }) => (
          <TabBarIcon search {...{ color }} />
        )
      }
    },
    _ShoppingList: {
      screen: ShoppingList,
      navigationOptions: {
        title: 'لیست خرید',
        tabBarIcon: ({ tintColor: color }) => (
          <TabBarIcon shoppingList {...{ color }} />
        )
      }
    },
    Home: {
      screen: Home,
      navigationOptions: navigation => ({
        title: 'ویترین',
        tabBarIcon: ({ tintColor: color }) => <TabBarIcon home {...{ color }} />
      })
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      tabBarOptions: {
        labelStyle: {
          ...gstyles.text,
          textAlign: 'center'
        }
      },
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        const {
          isFocused,
          state: { routeName },
          goBack,
          navigate
        } = navigation;
        if (routeName.startsWith('_')) {
          navigate(routeName.slice(1));
        } else {
          defaultHandler();
        }
      }
    }
  }
);

const rootNavigator = createStackNavigator(
  {
    Basket: {
      screen: Basket
    },
    ShoppingList: {
      screen: ShoppingList
    },
    Dashboard: {
      screen: dashboardNavigator,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Dashboard'
  }
);

export default createAppContainer(rootNavigator);
