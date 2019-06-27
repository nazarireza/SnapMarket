import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Picture, Stack, Space, Label, Icon } from './uiKit';

const HEIGHT = 185,
  CARD_WIDTH = 120;

class ProductItem extends PureComponent {
  render() {
    const {
      item: {
        images: [{ imageThumbnailSrc: image } = {}] = [],
        title,
        price,
        discount
      }
    } = this.props;

    return (
      <Stack radius={10} clip style={styles.card} white paddingMedium hEndItems>
        <Stack centerItems>
          <Stack square={80} clip>
            <Picture fill source={{ uri: image }} />
          </Stack>
        </Stack>
        <Space small />
        <Stack horizontal vCenterItems>
          <Label xSmall colorLight decoration>
            {price}
          </Label>
          <Space small />
          <Label small>تومان</Label>
          <Space xxSmall />
          <Label small colorDark>
            {Math.floor(price - discount)}
          </Label>
        </Stack>
        <Label small line={3}>
          {title}
        </Label>
      </Stack>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: HEIGHT
  }
});

export default ProductItem;
