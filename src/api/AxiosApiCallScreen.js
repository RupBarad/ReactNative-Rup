import axios from 'axios';
import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {styles} from './AxiosApiCallScreen.styles';

const baseUrl = 'https://reqres.in';

export default class AxiosApiCallScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: '',
      isLoading: true,
    };
  }
  getData = () => {
    axios({
      method: 'get',
      url: `${baseUrl}/api/users/1`,
    }).then(response => {
      this.setState({res: response, isLoading: false});
      console.log(response.data);
    });
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <ActivityIndicator size={'large'} animating={this.state.isLoading} />
        </View>
        <View>
          <Text>{JSON.stringify(this.state.res)}</Text>
        </View>
      </View>
    );
  }
}
