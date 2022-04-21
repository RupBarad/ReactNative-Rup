import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {styles} from './AlignSelfScreen.styles';

export default function AlignSelfScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.square}>
          <Text>Center</Text>
        </View>
        <View style={[styles.square, {alignSelf: 'flex-end'}]}>
          <Text>End</Text>
        </View>
        <View style={[styles.square, {alignSelf: 'flex-start'}]}>
          <Text>Start</Text>
        </View>
      </View>
    </>
  );
}
