import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './FlexDirectionScreen.styles';

export default class FlexDirectionScreen extends Component {
  openFlexBoxDemo = () => {
    this.props.navigation.navigate('FlexBox');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tab}>
          <View style={styles.tab_menu}>
            <View style={[styles.tab_menu_item]}>
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

        <View style={styles.location}>
          <View style={{flexDirection: 'row', flex: 1, flexWrap: 'wrap'}}>
            <Image
              style={styles.tab_icon}
              source={require('../icons/ic_location_pin.png')}
            />
            <Text>Delever to</Text>
            <Text style={{fontWeight: 'bold', marginStart: 10}}>382481</Text>
          </View>
          <Text style={styles.location_change}>Change</Text>
        </View>
        <View
          style={{
            borderBottomColor: 'darkgray',
            borderBottomWidth: 0.2,
          }}
        />
        <View style={{flexDirection: 'column', marginTop: 10}}>
          <View style={styles.main_post}>
            <Image
              style={styles.post_image}
              source={require('../assets/mobile1.png')}
            />
            <View style={styles.post_data}>
              <Text style={styles.text_big}>POCO C31 (Royal Blue, 64GB)</Text>

              <Text style={styles.text_big_gray}>#JustHere</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.rating}>
                  <Text style={styles.text_white}>4.4 &#9733;</Text>
                </View>
                <Text style={styles.text_big_gray}> (45,291) </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text_big_gray_strike}>11,999</Text>
                <Text style={styles.text_big_bold}>&#8377;9,499</Text>
                <Text style={styles.text_big_bold_green}>20% off</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text_normal}>Free delivery by </Text>
                <Text style={styles.text_normal_bold}>22nd Apr</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text_normal}>
                  Upto <Text style={styles.text_normal_bold}>&#8377;8,650</Text>{' '}
                  0ff 0n Exchange
                </Text>
              </View>
            </View>
            <Image
              style={{marginTop: 5, marginEnd: 13, height: 40, width: 40}}
              source={require('../icons/ic_like.png')}
            />
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: 5}}>
            <View style={styles.post_tag}>
              <Text style={styles.text_normal_gray}>
                4 GB RAM | 64 GB Storage
              </Text>
            </View>
            <View style={styles.post_tag}>
              <Text style={[styles.text_normal_gray, {flex: 1}]}>
                16.59 cm (6.53 inch) HD+ Display
              </Text>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', marginHorizontal: 5, marginTop: 10}}>
            <View style={styles.post_tag}>
              <Text style={styles.text_normal_gray}>5000 mAh</Text>
            </View>
            <View style={styles.post_tag}>
              <Text style={styles.text_normal_gray}>13MP + 2MP + 2MP</Text>
            </View>
            <View style={styles.post_tag}>
              <Text style={styles.text_normal_gray}>5MP Front Camera</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'darkgray',
            borderBottomWidth: 0.5,
            marginTop: 10,
          }}
        />

        <TouchableOpacity onPress={this.openFlexBoxDemo} style={styles.button}>
          <Text style={styles.buttonText}>Flexbox demo</Text>
        </TouchableOpacity>
        <View style={styles.float_button}>
          <View style={{flex: 1}}></View>
        </View>
      </View>
    );
  }
}
