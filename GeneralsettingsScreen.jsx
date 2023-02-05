import React, {useState} from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {footerstyle} from './HomeScreen';
import {SchedulerScreenNavbar} from './SchedulerScreen';
function GeneralsettingsScreen({navigation}) {
  const [notification, setnotification] = useState(false);
  return (
    <>
      <View style={style.maindiv}>
        <SchedulerScreenNavbar />
        <Text style={style.text}>General Settings</Text>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                style={style.image}
                source={require('./notification.png')}
              />
            </View>
            <View
              style={{
                marginLeft: 10,
                marginTop: 15,
                alignItems: 'flex-start',
              }}>
              {notification ? (
                <Text style={style.settingstext}>Disable Notification</Text>
              ) : (
                <Text style={style.settingstext}>Allow Notification</Text>
              )}
            </View>
            <View style={{marginTop: 15}}>
              <Switch
                value={notification}
                onValueChange={() => setnotification(!notification)}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image style={style.image} source={require('./language.png')} />
            </View>
            <View
              style={{
                marginLeft: 10,
                marginTop: 15,
                alignItems: 'flex-start',
              }}>
              <Text style={style.settingstext}>Language</Text>
            </View>
            <View style={{marginTop: 15}}>
              <Image
                style={{width: 30, height: 30, marginLeft: 60}}
                source={require('./next.png')}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                style={style.image}
                source={require('./font-adjustment.png')}
              />
            </View>
            <View
              style={{
                marginLeft: 10,
                marginTop: 15,
                alignItems: 'flex-start',
              }}>
              <Text style={style.settingstext}>Font size</Text>
            </View>
            <View style={{marginTop: 15}}>
              <Image
                style={{width: 30, height: 30, marginLeft: 60}}
                source={require('./next.png')}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                style={style.image}
                source={require('./announcement.png')}
              />
            </View>
            <View
              style={{
                marginLeft: 10,
                marginTop: 15,
                alignItems: 'flex-start',
              }}>
              <Text style={style.settingstext}>Voice speed</Text>
            </View>
            <View style={{marginTop: 15}}>
              <View style={style.slider}>
                <Slider
                // value={this.state.value}
                // onValueChange={value => this.setState({value})}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* footer section */}
      <View style={footerstyle.footerdivmain}>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <View style={footerstyle.icondiv}>
            <Image style={footerstyle.icondiv} source={require('./home.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('schedules')}>
          <View style={footerstyle.icondiv}>
            <Image
              style={footerstyle.icondiv}
              source={require('./schedules.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('announcement')}>
          <View style={footerstyle.icondiv}>
            <Image
              style={footerstyle.icondiv}
              source={require('./announcement.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('bookmarks')}>
          <View style={footerstyle.icondiv}>
            <Image
              style={footerstyle.icondiv}
              source={require('./bookmark.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('settings')}>
          <View style={footerstyle.icondiv}>
            <Image
              style={footerstyle.icondiv}
              source={require('./setting.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  maindiv: {
    flex: 1,
  },
  image: {
    width: 40,
    height: 40,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  slider: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
    color: 'grey',
    backgroundColor: 'grey',
  },
  text: {
    marginTop: 5,
    paddingBottom: 5,
    color: 'black',

    fontSize: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  settingstext: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 100,
  },
});
export default GeneralsettingsScreen;
