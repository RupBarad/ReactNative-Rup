import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {styles} from './RefExampleScreen.styles';
export default class RefExampleScreen extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInputEmail = React.createRef();
    this.textInputOther = React.createRef();
    this.focusTextInputEmail = this.focusTextInputEmail.bind(this);
    this.focusTextInputPassword = this.focusTextInputPassword.bind(this);
  }

  focusTextInputEmail() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInputEmail.current.focus();
  }

  focusTextInputPassword() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInputOther.current.focus();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input2}
            ref={this.textInputEmail}
            placeholder="Email"
            onSubmitEditing={() => {
              this.textInputOther.current.focus();
            }}></TextInput>
        </View>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input2}
            placeholder="Password"
            ref={this.textInputOther}></TextInput>
        </View>
        <View style={styles.input_container}>
          <Button onPress={this.focusTextInputEmail} title="Focus on email" />
        </View>
        <View style={styles.input_container}>
          <Button
            onPress={this.focusTextInputPassword}
            title="Focus on password"
          />
        </View>
      </View>
    );
  }
}
