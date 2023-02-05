import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Welcomescreen(props) {
  return (
    <>
      <View style={style.maindiv}>
        <View style={style.welcomediv}>
          <Text style={style.welcometext}>
            All set, welcome to the NewsBrief family
          </Text>
        </View>
        <View style={style.selectiondiv}>
          <Text style={style.selectiondivtext}>Select language</Text>
          <View style={style.languagediv}>
            <View style={style.langcontentdiv}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>English</Text>
            </View>
            <View style={style.langcontentdiv}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>हिंदी</Text>
            </View>
            <View style={style.langcontentdiv}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>தமிழ்</Text>
            </View>
            <View style={style.langcontentdiv}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>తెలుగు</Text>
            </View>
            <View style={style.langcontentdiv}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>मराठी</Text>
            </View>
            <View style={style.langcontentdiv}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>ಕನ್ನಡ</Text>
            </View>
            <View style={style.langcontentdiv}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>বাংলা</Text>
            </View>
            <View style={style.langcontentdiv}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>ગુજરાતી</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
const style = StyleSheet.create({
  maindiv: {
    height: `100%`,
  },
  welcomediv: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  welcometext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  selectiondiv: {
    alignItems: 'center',
    marginTop: '20%',
  },
  selectiondivtext: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  languagediv: {
    justifyContent: 'center',
    marginHorizontal: 'auto',
    marginTop: 5,
    width: 300,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  langcontentdiv: {
    // flex: 1,
    margin: 10,
    minWidth: 130,
    maxWidth: 130,
    height: 40,
    padding: 2,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Welcomescreen;
