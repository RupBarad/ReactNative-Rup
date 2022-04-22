import React, {Component} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {styles} from './HomeScreen.styles';

export default class HomeScreen extends Component {
  buttonDemo = () => {
    // Alert.alert('button demo clicked');
    //  this.props.navigation.navigate('ButtonScreen');
    this.props.navigation.navigate('ButtonScreen');
  };
  buttonInput = () => {
    this.props.navigation.navigate('InputTextScreen');
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.button}>
            <Button title="Button demo" onPress={this.buttonDemo} />
          </View>
          <View style={styles.button}>
            <Button title="Input text demo" onPress={this.buttonInput} />
          </View>
        </View>
      </View>
    );
  }
}
