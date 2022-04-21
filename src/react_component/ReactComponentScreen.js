import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class ReactComponentScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log('constructor called.');
    this.state = {
      counter: 0,
    };
    setInterval(() => {
      this.setState({counter: 0});
    }, 1000);
  }
  componentWillMount() {
    console.log('componentWillMount called.');
  }

  componentDidMount() {
    console.log('componentDidMount called.');
  }

  componentWillReceiveProps(nextProp) {
    console.log('componentWillReceiveProps called.');
  }

  // shouldComponentUpdate(nextProp, nextState) {
  //   console.log('shouldComponentUpdate called.');
  //   return true;
  // }
  render() {
    console.log('render called..');
    return (
      <View>
        <Text>Counter value: {this.state.counter}</Text>
      </View>
    );
  }
}
