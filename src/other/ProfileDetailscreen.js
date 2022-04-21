import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

export default class ProfileDetailscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //  firstName:    props.route.params.firstName

      uri: this.props.route.params.uri,
      firstName: this.props.route.params.firstName,
      lastName: this.props.route.params.lastName,
      mobileNo: this.props.route.params.mobileNo,
      address: this.props.route.params.address,
    };
  }
  getSource() {
    if (this.state.uri.trim() == '') {
      return require('../assets/profile.png');
    } else {
      return {uri: this.state.uri};
    }
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <Image source={this.getSource()} style={{width: 100, height: 100}} />
        <Text>FirstName: {this.state.firstName}</Text>
        <Text>LastName: {this.state.lastName}</Text>
        <Text>Mobile No: {this.state.mobileNo}</Text>
        <Text>Address: {this.state.address}</Text>
      </View>
    );
  }
}
