import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class FlexAbsoluteScreen extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start', 'flex-end', 'center', 'stretch'
      <View style={styles.container}>
        <View style={styles.float_button}></View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },

  float_button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
};
