import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Picture, Stack } from './uiKit';

const MEDIUM_HEIGHT = 175,
  SMALL_HEIGHT = 120;

const SmallPicture = ({ image }) => (
  <Picture
    fill
    aspectRatio={4.01}
    resizeMode="stretch"
    source={{ uri: image }}
  />
);

const MediumPicture = ({ image }) => (
  <Picture
    fill
    aspectRatio={2.23}
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
        style={[
          styles.container,
          small && { height: SMALL_HEIGHT },
          medium && { height: MEDIUM_HEIGHT }
        ]}>
        <Stack radius={10} clip>
          {small && <SmallPicture image={banner.image} />}
          {medium && <MediumPicture image={banner.image} />}
        </Stack>
      </Stack>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});

export default Banner;
