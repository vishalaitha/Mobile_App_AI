import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

function TopicScreen(props) {
  return (
    <>
      <View style={style.topdiv}>
        <View style={style.contenddiv}>
          <Image
            source={require('./previous.png')}
            style={{width: 20, height: 20, marginLeft: 20, marginTop: 20}}
          />
          <Text
            style={{
              marginLeft: '15%',
              marginTop: '4%',
              color: 'black',
              fontSize: 18,
            }}>
            Personalise Home Screen
          </Text>
        </View>
        <View style={style.explaindiv}>
          <Text
            style={{
              fontSize: 21,
              color: 'black',
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            Select your favourite topics to see more stories you like on your
            Home Screen
          </Text>
        </View>
        <View style={style.topicsmaindiv}>
          <View style={style.topicsitemdiv}>
            <Text style={style.topicdivtext}>National</Text>
          </View>
          <View style={style.topicsitemdiv}>
            <Text style={style.topicdivtext}>International</Text>
          </View>
          <View style={style.topicsitemdiv}>
            <Text style={style.topicdivtext}>Sports</Text>
          </View>
          <View style={style.topicsitemdiv}>
            <Text style={style.topicdivtext}>Business</Text>
          </View>
          <View style={style.topicsitemdiv}>
            <Text style={style.topicdivtext}>Entertainment</Text>
          </View>
        </View>
        <View style={style.bottomdiv}>
          <TouchableHighlight style={style.savennext}>
            <Text style={{color: '#ffff', fontSize: 16}}>Save & next</Text>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
}
const style = StyleSheet.create({
  topdiv: {},
  contenddiv: {
    flexDirection: 'row',
  },
  topicsmaindiv: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  topicsitemdiv: {
    backgroundColor: 'pink',
    height: 40,
    margin: 5,
    marginBottom: 10,

    borderRadius: 20,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10,
    // paddingLeft: 10,
    // paddingTop: 2,
    // paddingRight: 10,
  },
  topicdivtext: {
    fontSize: 18,
  },
  explaindiv: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
  },
  bottomdiv: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    top: 550, //Here is the trick
  },
  savennext: {
    backgroundColor: 'black',
    width: '100%',
    maxWidth: 300,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
});
export default TopicScreen;
