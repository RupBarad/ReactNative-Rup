import React, {Component} from 'react';
import {View, Button, Alert} from 'react-native';
import {styles} from './ApiHomeScreen.styles';

export default class ApiHomeScreen extends Component {
  buttonGetApiCall = () => {
    console.log('Get api call');
    this.props.navigation.navigate('GetApiCall');
  };
  buttonPostApiCall = () => {
    this.props.navigation.navigate('PostApiCall');
  };
  buttonAxiosApiCall = () => {
    this.props.navigation.navigate('AxiosApiCall');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view_margin}>
          <Button title="Get API call" onPress={this.buttonGetApiCall} />
          {/* <Button
         
            onPress={this.onPressBasicButton}
            title="Default button"
            accessibilityLabel="hdasjk asdhask sakdh skdaas sadj"
          /> */}
        </View>
        <View style={styles.view_margin}>
          <Button title="Post api call" onPress={this.buttonPostApiCall} />
        </View>
        <View style={styles.view_margin}>
          <Button title="Axios api call" onPress={this.buttonAxiosApiCall} />
        </View>
      </View>
    );
  }
}
