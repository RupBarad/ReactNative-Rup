import React, {Component} from 'react';
import { View, Text} from 'react-native';
import styles from './SeparateStyle'


export default class CustomText extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.buttonText}> Press Me! </Text>
      </View>
    );
  }
}
