import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Picture, Stack } from './uiKit';

class Banner extends Component {
  render() {
    const {
      item: { banners }
    } = this.props;

    return (
      <Stack hPaddingMedium style={styles.container}>
        <Stack radius={10} clip>
          <Picture
            fill
            aspectRatio={2.22}
            resizeMode="stretch"
            source={{ uri: banners[0].image }}
          />
        </Stack>
      </Stack>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, height: 175 }
});

export default Banner;
