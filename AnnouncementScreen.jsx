import React, {useState} from 'react';
import Footer from './Footer';
import {SchedulerScreenNavbar} from './SchedulerScreen';
import {footerstyle} from './HomeScreen';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
const bstyle = StyleSheet.create({
  imageview: {
    height: '30%',
  },
  breiftext: {
    fontSize: 14,
    width: '50%',
    marginTop: 5,
    marginLeft: 5,
    paddingLeft: 100,
  },
  textcontainer: {
    margin: 5,
    padding: 10,
    backgroundColor: 'pink',
    height: '15%',
  },
  userdiv: {
    height: 50,
    marginTop: 10,
    flexDirection: 'row',
    gap: 5,
    paddingLeft: 5,
  },
  image: {
    width: 30,
    height: 30,
  },
});
function Briefs(props) {
  const [liked, setlike] = useState(false);
  const [bookmarked, setbookmark] = useState(false);
  const handlelike = () => {
    setlike(!liked);
  };
  const handlebookmark = () => {
    setbookmark(!bookmarked);
  };
  return (
    <>
      <View style={{flex: 1}}>
        <View style={bstyle.imageview}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={{
              uri: 'https://e0.365dm.com/23/02/1600x900/skysports-joao-cancelo-bayern-munich_6043790.jpg?20230201233225',
            }}
          />
        </View>
        <Text style={style.breiftext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <View style={bstyle.userdiv}>
          {liked ? (
            <TouchableNativeFeedback onPress={handlelike}>
              <Image style={bstyle.image} source={require('./liked.png')} />
            </TouchableNativeFeedback>
          ) : (
            <TouchableNativeFeedback onPress={handlelike}>
              <Image style={bstyle.image} source={require('./like.png')} />
            </TouchableNativeFeedback>
          )}
          {bookmarked ? (
            <TouchableNativeFeedback onPress={handlebookmark}>
              <Image
                style={bstyle.image}
                source={require('./bookmarkmarked.png')}
              />
            </TouchableNativeFeedback>
          ) : (
            <TouchableNativeFeedback onPress={handlebookmark}>
              <Image
                style={bstyle.image}
                source={require('./bookmarkunmark.png')}
              />
            </TouchableNativeFeedback>
          )}
          <Image style={bstyle.image} source={require('./more.png')} />
        </View>
      </View>
    </>
  );
}
function Headlines(props) {
  return (
    <>
      <View style={{height: '72.6%', width: '100%'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginHorizontal: 20, height: 100}}>
          <View style={style.scrollfeeditem}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={style.scrollfeeditemheading}>Circket:</Text>
              <Image
                style={style.feedgotoimage}
                source={require('./next.png')}
              />
            </View>
            <Text style={style.feeditemcontent}>
              Surakumar Yadav,Bowlers Guide India to 65-Run win the second t20
            </Text>
          </View>
          <View style={style.scrollfeeditem}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={style.scrollfeeditemheading}>Technology:</Text>
              <Image
                style={style.feedgotoimage}
                source={require('./next.png')}
              />
            </View>
            <Text style={style.feeditemcontent}>Ipad pro launched Today</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
function AnnouncementScreen({navigation, route}) {
  const [headlines, setheadlines] = useState(true);
  const [briefs, setbriefs] = useState(false);
  const headlineclick = () => {
    setheadlines(true);
    setbriefs(false);
  };
  const briefclick = () => {
    setbriefs(true);
    setheadlines(false);
  };
  return (
    <>
      <SchedulerScreenNavbar />
      <View style={style.secondaryfooter}>
        <Text
          onPress={headlineclick}
          style={{
            height: 50,
            color: '#ffff',
            fontWeight: headlines ? 'bold' : null,
          }}>
          Headlines
        </Text>
        <Text onPress={briefclick} style={style.footertext}>
          Briefs
        </Text>
        <Text style={style.footertext}>Article</Text>
      </View>
      <View>
        <View style={style.headlinediv}>
          <Text style={style.headlinetext}>
            {headlines ? 'Headlines' : 'Briefs'}
          </Text>
          <Image
            style={style.headlineimage}
            source={require('./speaker.png')}></Image>
        </View>
      </View>
      {headlines ? <Headlines /> : briefs ? <Briefs /> : null}
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
  secondaryfooter: {
    position: 'absolute',
    bottom: '10%',
    height: 40,
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  footertext: {
    height: 50,

    color: '#fff',
  },
  feedgotoimage: {
    height: 20,
    width: 20,
    marginRight: 20,
  },
  headlinediv: {
    backgroundColor: 'black',
    // height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    padding: 5,
  },
  headlineimage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 5,
  },
  headlinetext: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  scrollfeeditem: {
    width: '100%',
    marginTop: 5,
    marginBottom: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  scrollfeeditemheading: {
    fontSize: 19,
    color: 'black',
  },
  feeditemcontent: {
    fontSize: 15,
  },
});
export default AnnouncementScreen;
