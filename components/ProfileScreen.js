import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resourcePath: {},
      uri: '',
      firstName: '',
      lastName: '',
      mobileNo: '',
      address: '',
    };
  }
  submit = () => {};
  selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        console.log('data = ', res);
        let source = res;
        this.setState({
          resourcePath: source,
          uri: source.assets[0].uri,
        });
      }
    });
  };
  getSource() {
    if (this.state.uri.trim() == '') {
      return require('../assets/profile.png');
    } else {
      return {uri: this.state.uri};
    }
  }
  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={this.selectFile}
                style={styles.imgContainer}>
                <Image
                  source={this.getSource()}
                  style={{width: 200, height: 200}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="First name"
                onChangeText={firstName => this.setState({firstName})}
                placeholderTextColor="#003f5c"
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Last name"
                onChangeText={lastName => this.setState({lastName})}
                placeholderTextColor="#003f5c"
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Mobile No."
                keyboardType="phone-pad"
                maxLength={10}
                onChangeText={mobileNo => this.setState({mobileNo})}
                placeholderTextColor="#003f5c"
              />
            </View>
            <View style={styles.inputViewAddress}>
              <TextInput
                style={styles.TextInputAddress}
                placeholder="Address"
                multiline={true}
                numberOfLines={4}
                onChangeText={address => this.setState({address})}
                placeholderTextColor="#003f5c"
              />
            </View>
            <TouchableOpacity onPress={this.submit} style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12,
  },
  button: {
    height: 50,
    width: 250,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  inputView: {
    borderRadius: 5,
    width: '90%',
    height: 45,
    marginTop: 10,
    margin: 20,
    alignItems: 'center',
  },
  inputViewAddress: {
    borderRadius: 5,
    width: '90%',
    height: 100,
    marginTop: 20,
    margin: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
  TextInput: {
    height: 50,
    width: '100%',
    padding: 10,
    borderWidth: 1,
  },
  TextInputAddress: {
    height: '100%',
    width: '100%',
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderWidth: 1,
  },
});
