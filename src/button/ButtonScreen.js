import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from './ButtonScreen.styles';

export default class ButtonScreen extends Component {
  onPressBasicButton = () => {
    // Alert.alert('Basic button clicked..');
  };
  onPressTouchableHighlight = () => {};
  onPressTouchableNativeFeedBack = () => {
    //  Alert.alert('touchable native feedback button clicked..');
  };
  onPressWithoutFeedBack() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Button
            style={styles.button}
            onPress={this.onPressBasicButton}
            title="Default button"
            accessibilityLabel="hdasjk asdhask sakdh skdaas sadj"
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={this.onPressDisableButton}
            title="Disable button"
            disabled={true}
          />
        </View>
        <View style={styles.touchable_button}>
          <TouchableOpacity>
            <Text style={styles.touchable_button_text}>
              TouchableOpacity button
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableHighlight onPress={this.onPressTouchableHighlight}>
          <View style={styles.button_touchable_heightlight}>
            <Text style={styles.touchable_button_text}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <View>
          <View style={styles.button}>
            <TouchableNativeFeedback
              onPress={this.onPressTouchableNativeFeedBack}>
              <View style={styles.button_touchable_heightlight}>
                <Text style={styles.touchable_button_text}>
                  TouchableNativeFeedback
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableWithoutFeedback onPress={this.onPressWithoutFeedBack}>
            <View style={styles.button_touchable_heightlight}>
              <Text style={styles.touchable_button_text}>
                TouchableWithoutFeedback
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.button}></View>

        <View></View>
      </View>
    );
  }
}
