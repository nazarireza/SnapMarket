import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';

import { Picture, Stack, Space, Label, Icon } from './uiKit';
import ProductItem from './ProductItem';

class ProductListFeature extends Component {
  constructor(props) {
    super(props);

    const {
      item: {
        banners: { products }
      }
    } = this.props;

    this.data = products.reverse();
  }

  render() {
    const {
      item: {
        banners: { title }
      }
    } = this.props;

    return (
      <Stack>
        <Stack horizontal vCenterItems hPaddingLarge>
          <Stack vCenterItems horizontal>
            <Icon name="arrow-left" small colorPrimary />
            <Space small />
            <Label colorPrimary>بیشتر</Label>
          </Stack>
          <Stack flex={1}>
            <Label>{title}</Label>
          </Stack>
        </Stack>
        <Space small />
        <FlatList
          data={this.data}
          contentContainerStyle={styles.containerPadding}
          showsHorizontalScrollIndicator={false}
          horizontal
          initialScrollIndex={this.data.length - 1}
          keyExtractor={(item, index) => `${index}`}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          renderItem={({ item }) => <ProductItem {...{ item }} />}
        />
      </Stack>
    );
  }
}

const styles = StyleSheet.create({
  containerPadding: {
    paddingHorizontal: 10
  }
});

export default ProductListFeature;
