import React, {Component} from 'react';
import {View, Text, TextInput, ScrollView, Image} from 'react-native';
import {styles} from './InputTextScreen.styles';

export default class InputTextScreen extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Text>Without any property</Text>
              <TextInput style={styles.input1}></TextInput>
            </View>
            <View style={styles.input_container}>
              <Text>Having border</Text>
              <TextInput style={styles.input2}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput
                style={styles.input3}
                placeholder="Enter name"></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput
                style={styles.input3}
                placeholder="Enter multiline notes"
                multiline={true}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput
                style={styles.input3}
                placeholder="Max 4 character"
                maxLength={4}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput
                style={styles.input3}
                placeholder="This can not be editable"
                editable={false}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput
                style={styles.input3}
                placeholder="Mobile"
                maxLength={10}
                keyboardType="phone-pad"></TextInput>
            </View>

            <View style={styles.input_container}>
              <TextInput
                style={styles.input3}
                placeholder="Password"
                secureTextEntry={true}></TextInput>
            </View>

            <View style={styles.input_container}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://i.picsum.photos/id/445/200/300.jpg?hmac=7dfJBQTfK8boCS5_EXpFW8SC_8VKMgDw5yFInpEee4s',
                }}></Image>
            </View>

            <View style={styles.input_container}>
              <Image
                style={styles.image2}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}></Image>
            </View>
            <View></View>
            <View></View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
