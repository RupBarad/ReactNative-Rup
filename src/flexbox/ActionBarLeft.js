import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

const ActionBarLeft = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image style={styles.image} source={require('../icons/ic_back.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    marginEnd: 10,
    tintColor: 'white',
  },
});

export default ActionBarLeft;
