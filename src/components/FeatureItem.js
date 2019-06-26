import React, { Component } from 'react';
import { View } from 'react-native';

import BannerFeature from './BannerFeature';
import BannerListFeature from './BannerListFeature';
import CategoryListFeature from './CategoryListFeature';

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
    default:
      //   throw new Error('Not Supported');
      return <View />;
  }
};
