import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';

import { Picture, Stack, Label, Icon, Space } from './uiKit';
const dimension = Dimensions.get('window');

const PAGE_MARGIN = 80,
  HEIGHT = 150;

const CategoryItem = ({ image, title }) => (
  <Stack horizontal radius={14} vCenterItems white borderLight paddingMedium>
    <Stack flex={1}>
      <Label medium>{title}</Label>
    </Stack>
    <Space small />
    <Stack square={45} clip>
      <Picture fill source={{ uri: image }} />
    </Stack>
  </Stack>
);

class CategoryListFeature extends Component {
  constructor(props) {
    super(props);

    const {
      item: { banners }
    } = this.props;

    this.data = banners
      .filter(p => p.image) // NOTE: Why first child image is null?
      .reduce((result, current, index, array) => {
        return index % 2 === 0
          ? [...result, [current, array[index + 1]]]
          : result;
      }, [])
      .reverse();
  }

  render() {
    const {
      item: { title }
    } = this.props;

    return (
      <Stack>
        <Stack horizontal vCenterItems hPaddingLarge>
          <Stack flex={1}>
            <Label>{title}</Label>
          </Stack>
          <Space small />
          <Icon name="grid" medium />
        </Stack>
        <Space small />
        <FlatList
          data={this.data}
          style={styles.container}
          contentContainerStyle={styles.containerPadding}
          showsHorizontalScrollIndicator={false}
          horizontal
          initialScrollIndex={this.data.length - 1}
          keyExtractor={(item, index) => `${index}`}
          ItemSeparatorComponent={() => <Space small />}
          renderItem={({
            item: [
              { image: image1, title: title1 } = {},
              { image: image2, title: title2 } = {}
            ] = []
          }) => (
            <Stack style={styles.banner}>
              <CategoryItem image={image1} title={title1} />
              <Space small />
              {title2 && <CategoryItem image={image2} title={title2} />}
            </Stack>
          )}
        />
      </Stack>
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
    width: dimension.width - PAGE_MARGIN * 2
  }
});

export default CategoryListFeature;
