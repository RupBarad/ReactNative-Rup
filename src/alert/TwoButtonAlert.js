import React from 'react';
import {Alert} from 'react-native';

const TwoButtonAlert = () => {
  Alert.alert(
    'Alert!',
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    [
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
    ],
  );
};
export default TwoButtonAlert;
