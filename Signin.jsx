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

function Signin({navigation}) {
  return (
    <>
      <View style={style.maindiv}>
        <View style={style.secondmaindiv}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 'bold',
              color: 'black',
              marginBottom: '20%',
            }}>
            Sign in
          </Text>
          <View style={style.signdiv}>
            <TextInput
              style={style.signinput}
              placeholder="   Phone or email"
              keyboardType="default"
            />
            <TextInput
              style={style.signinput}
              placeholder="   Password"
              keyboardType="default"
            />
            <View style={{width: 300, alignSelf: 'center'}}>
              <Button
                onPress={() => navigation.navigate('home')}
                title="Sign in"
                color="black"
              />
            </View>
            <View style={style.ordiv}>
              <Text style={{fontSize: 16, color: 'black', marginTop: 5}}>
                Don't have an account?{' '}
                <Text
                  onPress={() => navigation.navigate('signup')}
                  style={{fontSize: 16, color: 'blue', fontWeight: 'bold'}}>
                  {' '}
                  Click here
                </Text>
              </Text>
            </View>

            <View style={style.ordiv}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
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
        {/* <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <View style={style.skipdiv}>
            <View style={style.skipdivcontent}>
              <Text style={style.skipdivtxt}>
                Skip{' '}
                <Image
                  source={require('./skip.png')}
                  style={{height: 10, width: 10}}
                />{' '}
              </Text>
            </View>
          </View>
        </TouchableOpacity> */}
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
    marginTop: 0,
  },
  signdiv: {
    width: 250,
  },
  signinput: {
    height: 40,
    width: 300,
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 10,
  },
  ordiv: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
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
    width: 300,
    justifyContent: 'center',
    alignSelf: 'center',
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

export default Signin;
