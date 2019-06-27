import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { Picture, Stack } from './uiKit';
import { colors } from '../assets/styles';

const dimensions = Dimensions.get('window');

const MEDIUM_HEIGHT = 175,
  SMALL_HEIGHT = 80;

const SmallPicture = ({ image }) => (
  <Picture style={{ height: SMALL_HEIGHT }} fill source={{ uri: image }} />
);

const MediumPicture = ({ image }) => (
  <Picture style={{ height: MEDIUM_HEIGHT }} fill source={{ uri: image }} />
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
      <Stack hPaddingMedium style={[styles.container]}>
        <Stack color={colors.gray2} radius={10} clip>
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
