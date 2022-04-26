import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from './GetApiCallScreen.styles';

export default class GetApiCallScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: '',
      isLoading: false,
    };
  }
  async callGetApi() {
    try {
      const response = await fetch('https://api.publicapis.org/entries');
      const rowRes = await response.json();
      console.log(rowRes);
      // this.setState({res: rowRes});
      this.setState({res: rowRes, isLoading: false});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false});
      console.log('Finally call');
    }
  }
  componentDidMount() {
    this.callGetApi();
    this.setState({isLoading: true});
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.activity_indicator}>
            <ActivityIndicator
              size={'large'}
              animating={this.state.isLoading}
            />
          </View>
          <Text>{JSON.stringify(this.state.res)}</Text>
        </View>
      </View>
    );
  }
}

//GetApiCallScreen
