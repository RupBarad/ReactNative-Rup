import React, {Component} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {styles} from './AlertScreen.styles';
import OneButtonAlert from './OneButtonAlert';
import ThreeButtonAlert from './ThreeButtonAlert';
import TwoButtonAlert from './TwoButtonAlert';

export default class AlertScreen extends Component {


  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.button}>
            <Button title="Basic alert" onPress={OneButtonAlert} />
          </View>
          <View style={styles.button}>
            <Button title="Two button" onPress={TwoButtonAlert} />
          </View>
          <View style={styles.button}>
            <Button title="Three button " onPress={ThreeButtonAlert} />
          </View>
        </View>
      </View>
    );
  }
}
