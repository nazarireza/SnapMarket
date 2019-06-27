import React, { Component } from 'react';
import { View } from 'react-native';

import BannerFeature from './BannerFeature';
import BannerListFeature from './BannerListFeature';
import CategoryListFeature from './CategoryListFeature';
import ProductListFeature from './ProductListFeature';
import ProductListWithTimerFeature from './ProductListWithTimerFeature';

export default ({ item }) => {
  switch (item.type) {
    case 'CAMPAIGN_BANNER':
      switch (item.size) {
        case 'MEDIUM':
          return item.banners.length > 1 ? (
            <BannerListFeature {...{ item }} />
          ) : (
            <BannerFeature {...{ item }} medium />
          );
        case 'SMALL':
          return <BannerFeature {...{ item }} small />;
        default:
          return <View />;
      }
    case 'CATEGORY_LIST_VERTICAL':
      return <CategoryListFeature {...{ item }} />;
    case 'ORDERED_LIST':
      return <ProductListFeature {...{ item }} />;
      case 'TIMER_HORIZONTAL':
      return <ProductListWithTimerFeature {...{ item }} />;
    default:
      return <View />;
  }
};
