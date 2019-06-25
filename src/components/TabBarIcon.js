import React from 'react';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default ({
  color,
  home,
  shoppingList,
  search,
  categories,
  basket
}) => {
  let name = null;

  home && (name = 'home');
  shoppingList && (name = 'list');
  search && (name = 'magnifier');
  categories && (name = 'grid');
  basket && (name = 'handbag');

  return <Icon {...{ name, color }} size={17} />;
};
