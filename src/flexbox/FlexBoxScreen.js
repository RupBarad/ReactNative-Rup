import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './FlexBoxScreen.styles';

export default class FlexBoxScreen extends Component {
  openFlexBoxDemo = () => {
    this.props.navigation.navigate('AlignSelf');
  };
  openFlexWrap = () => {
    this.props.navigation.navigate('FlexWrap');
    // this.props.navigation.navigate('Flex_wrap');
  };
  openFlexAbsolute = () => {
    this.props.navigation.navigate('FlexAbsolute');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>justifyContent:'flex-end' example in column</Text>
        <View style={styles.tab}>
          <View style={styles.tab_menu}>
            <View style={[styles.tab_menu_item, {backgroundColor: 'red'}]}>
              <Image
                style={styles.tab_icon}
                source={require('../icons/ic_compare.png')}
              />
              <Text>Compare</Text>
            </View>
            <View style={styles.tab_menu_item}>
              <Image
                style={styles.tab_icon}
                source={require('../icons/ic_sort.png')}
              />
              <Text>Short</Text>
            </View>
            <View style={styles.tab_menu_item}>
              <Image
                style={styles.tab_icon}
                source={require('../icons/ic_filter.png')}
              />
              <Text>Filter</Text>
            </View>
          </View>
        </View>
        <Text> alignItems:'flex-end' example in row</Text>
        <View style={styles.tab}>
          <View style={styles.tab_menu}>
            <View
              style={[styles.tab_menu_align_item, {backgroundColor: 'red'}]}>
              <Image
                style={styles.tab_icon}
                source={require('../icons/ic_compare.png')}
              />
              <Text>Compare</Text>
            </View>
            <View style={styles.tab_menu_align_item}>
              <Image
                style={styles.tab_icon}
                source={require('../icons/ic_sort.png')}
              />
              <Text>Short</Text>
            </View>
            <View
              style={[
                styles.tab_menu_align_item,
                {backgroundColor: 'lightcyan'},
              ]}>
              <Image
                style={styles.tab_icon}
                source={require('../icons/ic_filter.png')}
              />
              <Text>Filter</Text>
            </View>
          </View>
        </View>

        <Text>justifyContent:'flex-end' example in row</Text>
        <View style={styles.tab}>
          <View style={styles.tab_menu}>
            <View style={[styles.tab_menu_item_test, {backgroundColor: 'red'}]}>
              <Image
                style={styles.tab_icon}
                source={require('../icons/ic_compare.png')}
              />
              <Text>Compare</Text>
            </View>
            <View style={styles.tab_menu_item_test}>
              <Image
                style={styles.tab_icon}
                source={require('../icons/ic_sort.png')}
              />
              <Text>Short</Text>
            </View>
            <View
              style={[
                styles.tab_menu_item_test,
                {backgroundColor: 'lightcyan'},
              ]}>
              <Image
                style={styles.tab_icon}
                source={require('../icons/ic_filter.png')}
              />
              <Text>Filter</Text>
            </View>
          </View>
        </View>
        <Text> alignItems:'flex-end' example in row</Text>
        <View style={styles.tab}>
          <View style={styles.tab_menu}>
            <View
              style={[styles.tab_menu_item_justify, {backgroundColor: 'red'}]}>
              <Image
                style={styles.tab_icon}
                source={require('../icons/ic_compare.png')}
              />
              <Text>Compare</Text>
            </View>
            <View style={styles.tab_menu_item_justify}>
              <Image
                style={styles.tab_icon}
                source={require('../icons/ic_sort.png')}
              />
              <Text>Short</Text>
            </View>
            <View
              style={[
                styles.tab_menu_item_justify,
                {backgroundColor: 'lightcyan'},
              ]}>
              <Image
                style={styles.tab_icon}
                source={require('../icons/ic_filter.png')}
              />
              <Text>Filter</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={this.openFlexBoxDemo} style={styles.button}>
          <Text style={styles.buttonText}>AlignSelf demo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.openFlexWrap} style={styles.button}>
          <Text style={styles.buttonText}>FlexWrap demo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.openFlexAbsolute} style={styles.button}>
          <Text style={styles.buttonText}>Flex absolute demo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
