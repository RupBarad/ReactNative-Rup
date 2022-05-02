import React, {useState} from 'react';
import CustomText from './CustomText'
import CustomText2 from './CustomText2'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

const showToast = () => {
  ToastAndroid.show('Login successfully !', ToastAndroid.LONG);
};

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'raju@gmail.com', // to store email
      emailErrorMessage: '', // email error message
      password: '1234566788', // to store password
      passwordErrorMessage: '', // password error message
    };
  }
  formValidation = async () => {
    this.setState({loading: true});

    // input validation
    if (this.state.email.length == 0) {
      this.setState({emailErrorMessage: 'Please enter email.'});
      return false;
    }

    console.log(this.state.email);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(this.state.email) === false) {
      console.log('Email is Not Correct');
      this.setState({emailErrorMessage: 'incorrect email.'});
      return false;
    } else {
      console.log('Email is Correct');
      this.setState({emailErrorMessage: ''});
    }

    if (this.state.password.length == 0) {
      this.setState({passwordErrorMessage: 'Please enter password'});
      return false;
    }
    if (this.state.password.length < 8 || this.state.password.length > 20) {
      this.setState({
        passwordErrorMessage: 'Password should be min 8 char and max 20 char',
      });
      return false;
    } else {
      this.setState({passwordErrorMessage: ''});
    }

    this.props.navigation.navigate('Profile');
    /** Call Your API */
  };
  customTextField() {
    return (
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          onChangeText={email => this.setState({email})}
          placeholderTextColor="#003f5c"
        />
      </View>
    );
  }
  onPress () {
    //some function 
    console.log('Text clicked');
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../icons/atharva.png')} />
        < CustomText2 onPress={this.onPress} title='This text pass from login to custom text' />
        < CustomText />
        {this.customTextField()}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            onChangeText={email => this.setState({email})}
            placeholderTextColor="#003f5c"
          />
        </View>
        {this.state.emailErrorMessage.length > 0 && (
          <Text style={styles.errorMsg}>{this.state.emailErrorMessage}</Text>
        )}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}
            placeholderTextColor="#003f5c"
          />
        </View>
        {this.state.passwordErrorMessage.length > 0 && (
          <Text style={styles.errorMsg}>{this.state.passwordErrorMessage}</Text>
        )}

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.formValidation()}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
        </View> */}

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    borderRadius: 5,
    width: '70%',
    height: 45,
    marginTop: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    width: '100%',
    flex: 1,
    padding: 10,
    borderWidth: 1,
  },

  change_pass_button: {
    height: 30,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 150,
  },

  forgot_button: {
    height: 30,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 400,
  },

  loginBtn: {
    width: '70%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#2986CE',
  },
  errorMsg: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: '#dc3545',
  },
});
