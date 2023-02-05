import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Footer from './Footer';
import {footerstyle} from './HomeScreen';
export function SchedulerScreenNavbar(props) {
  return (
    <>
      <View style={style.homescreennav}>
        <View style={style.navcontent}>
          <View style={style.branddiv}>
            <Image
              source={require('./Applogo.png')}
              style={{height: 40, width: 40, marginLeft: 5, marginTop: 5}}
            />
            <Text style={style.brandname}>NewsBrief</Text>
          </View>
          <View style={style.extramenu}>
            <Image
              source={require('./bell.png')}
              style={{height: 40, width: 40, marginRight: 7, marginTop: 5}}
            />
            <Image
              source={require('./user.png')}
              style={{height: 35, width: 35, marginRight: 7, marginTop: 5}}
            />
          </View>
        </View>
      </View>
    </>
  );
}
function Feeddiv(props) {
  return (
    <>
      <View style={style.feeddiv}>
        <View style={style.feedivitem}>
          <Image
            style={{height: 120, width: '50%'}}
            source={{
              uri: 'https://www.igeeksblog.com/wp-content/uploads/2022/04/WWDC22-inspired-wallpaper-1160x653.jpg',
            }}
          />
          <Text
            style={{
              color: 'black',
              alignSelf: 'center',
              marginLeft: 5,
              fontSize: 20,
            }}>
            WWDC2022
          </Text>
          <Image
            style={{
              height: 30,
              width: 30,
              marginLeft: 20,
              marginTop: 40,
            }}
            source={require('./next.png')}
          />
        </View>
        <View style={style.feedivitem}>
          <Image
            resizeMode="contain"
            style={{height: 100, width: '50%'}}
            source={require('./event2.png')}
          />
          <Text
            style={{
              color: 'black',
              alignSelf: 'center',
              marginLeft: 5,
              fontSize: 20,
            }}>
            Mcity-Nttm
          </Text>
          <Image
            style={{
              height: 30,
              width: 30,
              marginLeft: 30,
              marginTop: 40,
            }}
            source={require('./next.png')}
          />
        </View>
      </View>
    </>
  );
}
function Secondarynav(props) {
  const [live, setlive] = useState(false);
  const [upcomming, setupcomming] = useState(false);
  const [recent, setrecent] = useState(false);
  const liveselect = () => {
    setlive(!live), setupcomming(false);
    setrecent(false);
  };
  const upcomingselect = () => {
    setlive(false), setupcomming(true);
    setrecent(false);
  };
  const recentselect = () => {
    setlive(false), setupcomming(false);
    setrecent(true);
  };
  return (
    <>
      <View style={style.secondarynav}>
        <View style={style.contentwrapper}>
          <View style={style.contentdivsecondarynav}>
            <Text
              onPress={liveselect}
              style={{
                color: live ? 'white' : 'grey',
              }}>
              Live
            </Text>
          </View>
          <View style={style.contentdivsecondarynav}>
            <Text
              onPress={upcomingselect}
              style={{color: 'white', fontWeight: 'bold'}}>
              Upcoming
            </Text>
          </View>
          <View style={style.contentdivsecondarynav}>
            <Text onPress={recentselect} style={style.textcontent}>
              Recent
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
function SchedulerScreen({navigation}) {
  return (
    <>
      <SchedulerScreenNavbar />
      <Secondarynav />
      <Feeddiv />
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
              source={require('./scheduler.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('announcement')}>
          <View style={footerstyle.icondiv}>
            <Image
              style={footerstyle.icondiv}
              source={require('./speaker.png')}
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
  homescreennav: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  contentwrapper: {
    // borderColor: 'red',
    // borderWidth: 1,
    flexDirection: 'row',
    gap: 50,
    justifyContent: 'space-around',
  },
  branddiv: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandname: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 5,
    color: 'black',
  },
  extramenu: {
    flexDirection: 'row',
  },
  navcontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondarynav: {
    flexDirection: 'row',
    backgroundColor: 'black',
    height: '5%',
    justifyContent: 'center',
  },
  textcontent: {
    color: 'grey',
  },
  contentdivsecondarynav: {
    height: 40,
    padding: 5,
  },
  feeddiv: {
    height: 300,
  },
  feedivitem: {
    marginTop: 5,
    borderWidth: 2,
    flexDirection: 'row',
    borderColor: 'black',
  },
});
export default SchedulerScreen;
