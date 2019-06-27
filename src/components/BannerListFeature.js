import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';

import { Picture, Stack } from './uiKit';
import { colors } from '../assets/styles';
const dimension = Dimensions.get('window');

const PAGE_MARGIN = 40,
  HEIGHT = 150;

class BannerListFeature extends PureComponent {
  render() {
    const {
      item: { banners }
    } = this.props;

    return (
      <FlatList
        data={banners}
        style={styles.container}
        contentContainerStyle={styles.containerPadding}
        showsHorizontalScrollIndicator={false}
        horizontal
        inverted
        keyExtractor={(item, index) => `${index}`}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        renderItem={({ item }) => (
          <Stack radius={10} clip color={colors.gray2}>
            <Picture style={styles.banner} fill source={{ uri: item.image }} />
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
