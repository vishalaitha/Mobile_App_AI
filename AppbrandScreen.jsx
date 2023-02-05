import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from 'react-native';

function AppbrandScreen({navigation, route}) {
  return (
    <>
      <View style={style.main}>
        <Image style={style.applogo} source={require('./Applogo.png')} />
        <Text style={style.appname}>NewsBrief</Text>
      </View>
      <TouchableNativeFeedback onPress={() => navigation.navigate('login')}>
        <View style={style.footer}>
          <Text style={style.footertext}>Get started</Text>
        </View>
      </TouchableNativeFeedback>
    </>
  );
}
const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applogo: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  appname: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  footertext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffff',
  },
});
export default AppbrandScreen;
