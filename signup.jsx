import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function Signup({navigation, route}) {
  return (
    <>
      <View style={style.maindiv}>
        <View style={style.secondmaindiv}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              color: 'black',
              marginBottom: 20,
            }}>
            Sign up
          </Text>
          <View style={style.signdiv}>
            <TextInput
              style={style.signinput}
              placeholder="First name"
              keyboardType="default"
            />
            <TextInput
              style={style.signinput}
              placeholder="Last name"
              keyboardType="default"
            />
            <TextInput
              style={style.signinput}
              placeholder="Phone or email"
              keyboardType="default"
            />
            <TextInput
              style={style.signinput}
              placeholder="Password"
              keyboardType="default"
            />
            <TextInput
              style={style.signinput}
              placeholder="Type the password again"
              keyboardType="default"
            />
            <Button title="Sign up" color="black" />
            <View style={style.ordiv}>
              <Text style={{fontSize: 16, color: 'black', marginTop: 5}}>
                Already have an account?{' '}
                <Text style={{fontSize: 16, color: 'blue', fontWeight: 'bold'}}>
                  {' '}
                  Click here
                </Text>
              </Text>
            </View>

            <View style={style.ordiv}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                Or
              </Text>
            </View>
            <View style={style.difflogin}>
              <TouchableOpacity style={style.loginbutton}>
                <View style={style.btndiv}>
                  <Image
                    style={style.appleloginlogo}
                    source={require('./apple-logo.png')}
                  />
                  <Text style={style.applebtntext}>Continue with Apple</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={style.loginbutton}>
                <View style={style.btndiv}>
                  <Image
                    style={style.googleloginlogo}
                    source={require('./google.png')}
                  />
                  <Text style={style.googlebtntext}>Continue with Google</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={style.loginbutton}>
                <View style={style.btndiv}>
                  <Image
                    style={style.facebookloginlogo}
                    source={require('./facebook.png')}
                  />
                  <Text style={style.facebookbtntext}>
                    Continue with Facebook
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
const style = StyleSheet.create({
  maindiv: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  secondmaindiv: {
    alignItems: 'center',
  },
  signdiv: {
    width: 250,
  },
  signinput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  ordiv: {
    alignItems: 'center',
    width: '100%',
  },
  difflogin: {
    alignItems: 'center',
    width: '100%',
  },
  applebtntext: {
    height: 100,
    fontSize: 12,
    marginTop: 3,
    marginLeft: 12,
    fontWeight: 'bold',
  },
  googlebtntext: {
    height: 100,
    fontSize: 12,
    marginTop: 3,
    marginLeft: 18,
    fontWeight: 'bold',
  },
  facebookbtntext: {
    height: 100,
    fontSize: 12,
    marginTop: 3,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  btndiv: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    height: 30,
    padding: 3,
    borderWidth: 1,
    borderColor: 'black',
  },
  loginbutton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    marginBottom: 25,
    alignItems: 'stretch',
  },
  appleloginlogo: {
    width: 20,
    height: 20,
    marginLeft: -10,
    marginRight: 20,
  },
  googleloginlogo: {
    width: 20,
    height: 20,
    marginLeft: -8,
    marginRight: 12,
  },
  facebookloginlogo: {
    width: 20,
    height: 20,
    marginLeft: -10,
    marginRight: 2,
  },
  logindiv: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default Signup;
