import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function Footer({navigation, router}) {
  return (
    <View style={footerstyle.footerdivmain}>
      <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <View style={footerstyle.icondiv}>
          <Image style={footerstyle.icondiv} source={require('./home.png')} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('announcement')}>
        <View style={footerstyle.icondiv}>
          <Image
            style={footerstyle.icondiv}
            source={require('./schedules.png')}
          />
        </View>
      </TouchableOpacity>
      <View style={footerstyle.icondiv}>
        <Image
          style={footerstyle.icondiv}
          source={require('./announcement.png')}
        />
      </View>
      <View style={footerstyle.icondiv}>
        <Image style={footerstyle.icondiv} source={require('./bookmark.png')} />
      </View>
      <View style={footerstyle.icondiv}>
        <Image style={footerstyle.icondiv} source={require('./setting.png')} />
      </View>
    </View>
  );
}
const footerstyle = StyleSheet.create({
  footerdivmain: {
    justifyContent: 'center',
    position: 'absolute',
    height: '7%',
    bottom: 0,
    width: '100%',
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icondiv: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  icons: {
    height: '100%',
    width: '100%',
  },
});
export default Footer;
