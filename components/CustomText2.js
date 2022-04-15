import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default class CustomText2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View>
          <Text style={{color: 'red', fontWeight: 'bold'}}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

CustomText2.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
