import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Platform,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { Header } from 'react-navigation';
import Animated from 'react-native-reanimated';

const { Value, min, max, multiply, event, createAnimatedComponent } = Animated;

import { colors } from '../assets/styles';
import { getDashboardData } from '../redux/actions/dashboardAction';
import { Stack, Picture, Icon, Input, Space } from '../components/uiKit';
import FeatureItem from '../components/FeatureItem';

const logoType = require('../assets/images/logo_type.png');
const AnimatedFlatList = createAnimatedComponent(FlatList);

const SEARCH_BAR_HEIGHT = 30;

class Home extends Component {
  constructor(props) {
    super(props);

    this.y = new Value(0);
  }

  componentDidMount() {
    this.props.getDashboardData();
  }

  render() {
    const {
      dashboard: { dashboardData: data, getDashboardWorkerIsBusy: isBusy }
    } = this.props;

    let top = min(0, max(multiply(-1, this.y), -Header.HEIGHT));

    return (
      <Stack flex={1} style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <AnimatedFlatList
          {...{ data }}
          contentContainerStyle={styles.scrollContainer}
          onScroll={event([{ nativeEvent: { contentOffset: { y: this.y } } }])}
          scrollEventThrottle={16}
          keyExtractor={({ type }, index) => `${type}_${index}`}
          ItemSeparatorComponent={() => <Space small />}
          renderItem={({ item }) => <FeatureItem {...{ item }} />}
        />
        <Stack animated absolute left right {...{ top }}>
          <Stack
            style={styles.header}
            white
            paddingLarge
            horizontal
            vCenterItems>
            <Picture source={logoType} style={styles.logo} />
            {/* <Stack highlight style={styles.logo} /> */}
            <Stack flex={1} hEndItems>
              <Icon name="menu" medium />
            </Stack>
          </Stack>
          <Stack white hPaddingMedium paddingSmall borderLight splitterBorder>
            <Stack round style={styles.searchContainer}>
              <Input placeholder="دنبال چی می گردی؟" medium hPaddingLarge />
            </Stack>
          </Stack>
        </Stack>
        {isBusy && (
          <Stack absolute fill centerItems>
            <ActivityIndicator />
          </Stack>
        )}
      </Stack>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background
  },
  header: {
    height: Header.HEIGHT
  },
  logo: {
    width: 129,
    height: 17,
  },
  searchContainer: {
    backgroundColor: colors.gray1,
    height: SEARCH_BAR_HEIGHT
  },
  scrollContainer: {
    //NOTE: Header + Search bar + Content padding
    paddingTop: Header.HEIGHT + SEARCH_BAR_HEIGHT + 20,
    paddingBottom: 30
  }
});

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

export default connect(
  mapStateToProps,
  { getDashboardData }
)(Home);
