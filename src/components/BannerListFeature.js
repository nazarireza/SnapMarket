import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';

import { Picture, Stack } from './uiKit';
const dimension = Dimensions.get('window');

const PAGE_MARGIN = 40,
  HEIGHT = 140;

class BannerListFeature extends Component {
  render() {
    const {
      item: { banners }
    } = this.props;

    return (
      <FlatList
        data={banners.reverse()}
        style={styles.container}
        contentContainerStyle={styles.containerPadding}
        showsHorizontalScrollIndicator={false}
        horizontal
        initialScrollIndex={banners.length - 1}
        keyExtractor={(item, index) => `${index}`}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        renderItem={({ item }) => (
          <Stack radius={10} clip style={styles.banner}>
            <Picture
              fill
              aspectRatio={2.22}
              resizeMode="stretch"
              source={{ uri: item.image }}
            />
          </Stack>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: HEIGHT
  },
  containerPadding: {
    paddingHorizontal: 10
  },
  banner: {
    width: dimension.width - PAGE_MARGIN * 2,
    height: HEIGHT
  }
});

export default BannerListFeature;
