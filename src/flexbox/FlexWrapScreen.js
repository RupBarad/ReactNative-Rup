import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import {styles} from './FlexWrapScreen.styles';

export default class FlexWrapScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.square}>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </Text>
        </View>
        <View style={styles.square}>
          <Text>About </Text>
        </View>
        <View style={styles.square}>
          <Text>Lorem </Text>
        </View>
        <View style={styles.square}>
          <Text>Lorem Ipsum </Text>
        </View>
        <View style={styles.square}>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centur
          </Text>
        </View>
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
      </View>
    );
  }
}
