import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

const ActionBarImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image style={styles.image} source={require('../icons/ic_search.png')} />
      <Image
        style={styles.image}
        source={require('../icons/ic_microphone.png')}
      />
      <Image style={styles.image} source={require('../icons/ic_heart.png')} />
      <Image style={styles.image} source={require('../icons/ic_cart.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    marginLeft: 15,
    tintColor: 'white',
  },
});

export default ActionBarImage;
