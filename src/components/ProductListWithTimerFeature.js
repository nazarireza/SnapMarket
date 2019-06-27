import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';

import Animated from 'react-native-reanimated';

const {
  Value,
  event,
  createAnimatedComponent,
  interpolate,
  Extrapolate
} = Animated;

const AnimatedFlatList = createAnimatedComponent(FlatList);

import { Picture, Stack, Space, Label, Icon } from './uiKit';
import ProductItem from './ProductItem';
import { colors } from '../assets/styles';

const SPACE_WIDTH = 150;

class ProductListWithTimerFeature extends Component {
  constructor(props) {
    super(props);

    this.x = new Value(0);
  }

  render() {
    const {
      item: { title, products }
    } = this.props;

    let opacity = interpolate(this.x, {
      inputRange: [0, SPACE_WIDTH],
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP
    });

    return (
      <Stack vPaddingLarge color={colors.hot1} centerItems>
        <Stack animated absolute right style={{ opacity }}>
          <Stack flex={1} style={{ width: SPACE_WIDTH }} centerItems>
            <Label white large>
              {title}
            </Label>
          </Stack>
        </Stack>
        <AnimatedFlatList
          data={products}
          contentContainerStyle={styles.containerPadding}
          showsHorizontalScrollIndicator={false}
          onScroll={event([{ nativeEvent: { contentOffset: { x: this.x } } }])}
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
