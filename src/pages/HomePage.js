import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Header } from 'react-navigation';
import Animated, { Easing } from 'react-native-reanimated';

const { Value, min, max, multiply, event } = Animated;

import { colors } from '../assets/styles';
import { getDashboardData } from '../redux/actions/dashboardAction';
import { Stack, Picture, Icon, Input, Space } from '../components/uiKit';
import FeatureItem from '../components/FeatureItem';

const logoType = require('../assets/images/logo_type.png');
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

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
      dashboard: { dashboardData: data }
    } = this.props;

    let top = min(0, max(multiply(-1, this.y), -Header.HEIGHT));

    return (
      <Stack style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <AnimatedFlatList
          {...{ data }}
          contentContainerStyle={styles.scrollContainer}
          onScroll={event([{ nativeEvent: { contentOffset: { y: this.y } } }])}
          scrollEventThrottle={16}
          keyExtractor={(item, index) => `${index}`}
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
            <Picture
              source={logoType}
              style={styles.logo}
            />
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
    width: 150,
    height: 30,
    resizeMode: 'contain',
  },
  searchContainer: {
    backgroundColor: colors.gray1
  },
  scrollContainer: {
    //NOTE: Header + Search bar + Content padding
    paddingTop: Header.HEIGHT * 2 + 10
  }
});

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

export default connect(
  mapStateToProps,
  { getDashboardData }
)(Home);
