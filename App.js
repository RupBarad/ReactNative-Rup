import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlexDirectionScreen from './src/flexbox/FlexDirectionScreen';
import ActionBarImage from './src/flexbox/ActionBarImage';
import ActionBarLeft from './src/flexbox/ActionBarLeft';
import FlexBoxScreen from './src/flexbox/FlexBoxScreen';
import AlignSelfScreen from './src/flexbox/AlignSelfScreen';
import FlexWrapScreen from './src/flexbox/FlexWrapScreen';
import FlexAbsoluteScreen from './src/flexbox/FlexAbsoluteScreen';
import ReactComponentScreen from './src/react_component/ReactComponentScreen';
import ButtonScreen from './src/button/ButtonScreen';
import HomeScreen from './src/button/HomeScreen';
import InputTextScreen from './src/button/InputTextScreen';
import ImageBgScreen from './src/button/ImageBgScreen'
import AlertScreen from './src/alert/AlertScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AlertScreen">
        <Stack.Screen
          name="FlexDirection"
          component={FlexDirectionScreen}
          options={{
            title: 'Home', //Set Header Title
            // headerShown:false,
            headerStyle: {
              backgroundColor: 'dodgerblue', //Set Header color
            },
            headerTintColor: 'black', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              color: 'white',
            },
            headerRight: () => <ActionBarImage />,
            headerLeft: () => <ActionBarLeft />,
          }}
        />

        <Stack.Screen name="FlexBox" component={FlexBoxScreen} />
        <Stack.Screen name="AlignSelf" component={AlignSelfScreen} />
        <Stack.Screen name="FlexWrap" component={FlexWrapScreen} />
        <Stack.Screen name="FlexAbsolute" component={FlexAbsoluteScreen} />
        <Stack.Screen name="ReactComponent" component={ReactComponentScreen} />
        <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="InputTextScreen" component={InputTextScreen} />
        <Stack.Screen name="ImageBg" component={ImageBgScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
