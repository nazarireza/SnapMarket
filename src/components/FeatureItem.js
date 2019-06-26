import React, { Component } from 'react';
import { View } from 'react-native';

import BannerFeature from './BannerFeature';

export default ({ item }) => {
  switch (item.type) {
    case 'CAMPAIGN_BANNER':
      switch (item.size) {
        case 'MEDIUM':
          return <BannerFeature {...{ item }} />;
        default:
          return <View />;
      }
    default:
      //   throw new Error('Not Supported');
      return <View />;
  }
};
