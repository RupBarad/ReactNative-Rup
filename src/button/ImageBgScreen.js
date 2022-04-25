import React, {Component} from 'react';
import {ImageBackground, View, Text} from 'react-native';
import {styles} from './ImageBgScreen.styles';
const image = {uri: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg'};
export default class ImageBgScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image_bg}>
          <Text style={styles.text}>With ImageBackground </Text>
        </ImageBackground>
        <View style={styles.without_image_bg}>
          <Text>Without background image</Text>
        </View>
      </View>
    );
  }
}
