import React, {Component} from 'react';
import {View, Button, Text, ActivityIndicator} from 'react-native';
import {styles} from './PostApiCallScreen.styles';

export default class PostApiCallScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: '',
      isLoading: false,
    };
  }

  buttonClick = () => {
    console.log('On press called');
    this.postData();
  };
  async postData() {
    this.setState({isLoading: true});
    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'Post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Raju vaghela',
          job: 'developer',
        }),
      });
      const data = await response.json();
      this.setState({res: data});
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false});
    }
  }

  componentDidMount() {
    console.log('Component did mount');
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Button title="Post call" onPress={this.buttonClick} />
        </View>
        <Text>{JSON.stringify(this.state.res)}</Text>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size={'large'} animating={this.state.isLoading} />
        </View>
      </View>
    );
  }
}
