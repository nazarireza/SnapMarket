import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { colors } from '../assets/styles';
import { getDashboardData } from '../redux/actions/dashboardAction';

class Home extends Component {

  componentDidMount(){
    this.props.getDashboardData();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.background}
        />
        <Text>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => ({
  dashboard: state.dashboard
});

export default connect(
  mapStateToProps,
  { getDashboardData }
)(Home);
