import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Component, useState} from 'react/cjs/react.production.min';
import {styles} from './FlatListScreen.styles';
const data = [
  {id: '2', title: '2 -Login demo'},
  {id: '3', title: '3 -Flexbox'},
  {id: '4', title: '4 -Component and Pure Component'},
  {id: '5', title: '5 -All type of button'},
  {id: '6', title: '6 -Textfield'},
  {id: '7', title: '7 -Scrollview'},
  {id: '8', title: '8 -Image'},
  {id: '9', title: '9 -Alert'},
  {id: '10', title: '10 -Api call'},
];

export default class FlatListScreen extends Component {
  
  divider = () => {
    return (
      <View style={styles.divider}></View>
    );
  };
  itemClick = id => {
    console.log(id);

    switch (id) {
      case '2':
        this.props.navigation.navigate('Login');
        break;
      case '3':
        this.props.navigation.navigate('FlexBox');
        break;
      case '4':
        this.props.navigation.navigate('ReactComponent');
        break;
      case '5':
        this.props.navigation.navigate('HomeScreen');
        break;
      case '6':
        this.props.navigation.navigate('InputTextScreen');
        break;
      case '7':
        this.props.navigation.navigate('InputTextScreen');
        break;
      case '8':
        this.props.navigation.navigate('InputTextScreen');
        break;
      case '9':
        this.props.navigation.navigate('AlertScreen');
        break;
      case '10':
        this.props.navigation.navigate('ApiHome');
        break;
      default:
        break;
    }
  };
  //  Item = ({item}) => (
  //   <TouchableOpacity style={styles.item} >
  //     <View>
  //       <Text style={styles.item_text}>{item.title}</Text>
  //     </View>
  //   </TouchableOpacity>
  // );
  render() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.itemClick(item.id)}>
          <View>
            <Text style={styles.item_text}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            //  extraData={selectedId}
            ItemSeparatorComponent={this.divider}
          />
          {/* <FlatList
            data={data}
            renderItem={({item}) => <Text>{item.title}</Text>}
          /> */}
        </View>
      </View>
    );
  }
}
