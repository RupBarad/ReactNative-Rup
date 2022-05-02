import React from 'react';
import {Alert} from 'react-native';

function TwoButtonAlert(title, des) {
  Alert.alert(title, des, [
    {
      text: 'Yes',
      onPress: () => console.log('Yes Pressed'),
      style: 'cancel',
    },
    {
      text: 'Cancel',
      onPress: () => {
        console.log('Cancel clicked!');
      },
    },
  ]);
};
export default TwoButtonAlert;
