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
  constructor(props) {
    super(props);

    const {
      item: { products }
    } = this.props;

    this.data = products.reverse();
  }

  render() {
    const {
      item: { title }
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
    paddingHorizontal: 10,
    paddingEnd: SPACE_WIDTH
  }
});

export default ProductListWithTimerFeature;
