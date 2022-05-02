import React, {Component} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {styles} from './AlertScreen.styles';
import OneButtonAlert from './OneButtonAlert';
import ThreeButtonAlert from './ThreeButtonAlert';
import TwoButtonAlert from './TwoButtonAlert';

export default class AlertScreen extends Component {
  oneButton = () => {
    OneButtonAlert('hi', 'hello');
  };
  twoButton = () => {
    const title = 'Alert!';
    const des = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
    TwoButtonAlert(title, des);
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.button}>
            <Button
              title="Basic alert"
              onPress={OneButtonAlert.bind(
                this,
                'Basic alert!',
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
              )}
            />
          </View>
          <View style={styles.button}>
            <Button title="Two button" onPress={this.twoButton} />
          </View>
          <View style={styles.button}>
            <Button title="Three button " onPress={ThreeButtonAlert} />
          </View>
        </View>
      </View>
    );
  }
}
