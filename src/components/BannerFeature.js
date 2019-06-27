import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { Picture, Stack } from './uiKit';

const dimensions = Dimensions.get('window');

const MEDIUM_HEIGHT = 175,
  SMALL_HEIGHT = 100;

const SmallPicture = ({ image }) => (
  <Picture
    fill
    resizeMode="stretch"
    source={{ uri: image }}
  />
);

const MediumPicture = ({ image }) => (
  <Picture
    fill
    resizeMode="stretch"
    source={{ uri: image }}
  />
);

class Banner extends Component {
  render() {
    const {
      item: {
        banners: [banner]
      },
      small,
      medium
    } = this.props;

    return (
      <Stack
        hPaddingMedium
        style={[styles.container]}>
        <Stack
          colorLight
          radius={10}
          clip
          style={[
            small && { height: SMALL_HEIGHT },
            medium && { height: MEDIUM_HEIGHT }
          ]}>
          {small && <SmallPicture image={banner.image} />}
          {medium && <MediumPicture image={banner.image} />}
        </Stack>
      </Stack>
    );
  }
}

const styles = StyleSheet.create({
  container: { width: dimensions.width }
});

export default Banner;
