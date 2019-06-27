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
import { colors } from '../assets/styles';

const SPACE_WIDTH = 150;

class ProductListWithTimerFeature extends Component {
  render() {
    const {
      item: { title, products }
    } = this.props;

    return (
      <Stack vPaddingLarge color={colors.hot1} centerItems>
        <Stack absolute right>
          <Stack flex={1} style={{ width: SPACE_WIDTH }} centerItems>
            <Label white large>
              {title}
            </Label>
          </Stack>
        </Stack>
        <FlatList
          data={products}
          contentContainerStyle={styles.containerPadding}
          showsHorizontalScrollIndicator={false}
          horizontal
          inverted
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
    paddingHorizontal: 10,
    paddingStart: SPACE_WIDTH
  }
});

export default ProductListWithTimerFeature;
