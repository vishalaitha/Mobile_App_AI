import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './Footer';
const wstyle = StyleSheet.create({
  scrolldiv: {
    flexDirection: 'row',
    padding: 10,
  },
  lineargradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    width: 300,
    height: 150,
    marginRight: 10,
  },
  degree: {
    height: 50,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    position: 'relative',
    top: 60,
  },
  cloudimage1: {
    height: 40,
    width: 40,
    marginTop: 5,
  },
  locdiv: {
    alignSelf: 'flex-end',
    position: 'relative',
    bottom: 90,
    fontWeight: 'bold',
  },
  loctext: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffff',
    marginLeft: 20,
  },
  locstatustext: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 10,
  },
});
function Weatherdiv(props) {
  return (
    <>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={wstyle.scrolldiv}>
          <LinearGradient
            start={{x: 0, y: -1}}
            end={{x: 2, y: 0}}
            style={wstyle.lineargradient}
            colors={['#43cea2', '#185a9d']}>
            <View>
              <Image
                style={wstyle.cloudimage1}
                source={require('./cloudy.png')}
              />
              <Text style={wstyle.degree}>30°</Text>
            </View>
            <View style={wstyle.locdiv}>
              <Text style={wstyle.loctext}>Chennai</Text>
              <Text style={wstyle.locstatustext}>Partly sunny</Text>
            </View>
            <View></View>
          </LinearGradient>

          <View
            style={{
              width: 300,
              height: 150,
              backgroundColor: 'gold',
              borderRadius: 5,
              marginRight: 10,
            }}></View>
          <View
            style={{
              width: 300,
              height: 100,
              marginRight: 10,
              borderRadius: 5,
              backgroundColor: 'pink',
            }}></View>
        </ScrollView>
      </View>
    </>
  );
}
function Trendingdiv(props) {
  const data = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80',
      text: 'cricket',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1524613032530-449a5d94c285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVwdWJsaWMlMjBpbmRpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      text: 'india2023',
    },
    {
      id: 3,
      image:
        'https://static.toiimg.com/thumb/msid-97552660,imgsize-32824,width-400,resizemode-4/97552660.jpg',
      text: 'Kholi',
    },
    {
      id: 4,
      image:
        'https://tamil.samayam.com/thumb/msid-97547439,imgsize-1829602,width-700,height-525,resizemode-75/97547439.jpg',
      text: 'IITM',
    },
    {
      id: 5,
      image:
        'https://th-i.thgim.com/public/incoming/nlykwa/article66460386.ece/alternates/LANDSCAPE_1200/IMG_IMG_4871_7_8_2022_14_2_1_7HACIN6G.jpg',
      text: 'ISRO',
    },
    {
      id: 6,
      image: 'https://images.indianexpress.com/2023/02/RBI-Main.jpg',
      text: 'RBI',
    },
    {
      id: 7,
      image: 'https://picsum.photos/100',
      text: 'GOA',
    },
  ];
  return (
    <>
      <View
        style={{
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
          marginTop: '15%',
          marginBottom: 0,
          marginLeft: 3,
        }}>
        <Text
          style={{
            color: 'black',
            marginLeft: 5,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Trending
        </Text>
      </View>
      <View style={style.trending_div_main}>
        <ScrollView
          style={style.trending_scroll}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          {data.map(item => (
            <View style={style.trendingcontent_div} key={item.id}>
              <View style={style.imagecontainer}>
                <Image
                  style={style.trending_imageelements}
                  source={{uri: item.image}}
                />
              </View>
              <Text style={style.trending_text}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

function TopicsDiv(props) {
  const [isl, setisl] = useState(false);
  const [stocks, setstocks] = useState(false);
  const [query, setquery] = useState('');
  const [national, setnational] = useState(false);
  const [international, setinternational] = useState(false);
  const handleisl = () => {
    setisl(true);
    setstocks(false);
    setnational(false);
    setinternational(false);
  };
  const handlestocks = () => {
    setisl(false);
    setstocks(true);
    setnational(false);
    setinternational(false);
  };
  const handlenational = () => {
    setisl(false);
    setstocks(false);
    setnational(true);
    setinternational(false);
  };
  const handleinter = () => {
    setisl(false);
    setstocks(false);
    setnational(false);
    setinternational(true);
  };
  return (
    <>
      <View
        style={{
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
          marginBottom: 0,
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            marginLeft: 5,
            fontSize: 16,
          }}>
          Topics
        </Text>
      </View>
      <View>
        <ScrollView
          style={style.topicdiv}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          <View
            style={{
              height: 120,
              width: 120,
              marginRight: 10,
              alignItems: 'center',
              // borderWidth: 1,
              // borderColor: 'red',
            }}>
            <View style={{width: 100, height: 100, overflow: 'hidden'}}>
              <TouchableOpacity onPress={handleisl}>
                <Image
                  style={{height: '100%', width: '100%'}}
                  resizeMode="contain"
                  source={{
                    uri: 'https://cdn.freelogovectors.net/wp-content/uploads/2021/03/indian-super-league-logo-freelogovectors.net_-312x400.png',
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text
              onPress={handleisl}
              style={{
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                fontSize: 12,
                color: isl ? 'dodgerblue' : 'grey',
                fontWeight: 'bold',
              }}>
              Indian Super League
            </Text>
            {isl && (
              <View
                style={{
                  alignSelf: 'center',
                  marginTop: 2,
                  width: 10,
                  height: 4,
                  backgroundColor: 'dodgerblue',
                }}></View>
            )}
          </View>
          <View
            style={{
              height: 120,
              width: 120,
              marginRight: 10,
              alignItems: 'center',
              // borderWidth: 1,
              // borderColor: 'red',
            }}>
            <View style={{width: 100, height: 100, overflow: 'hidden'}}>
              <TouchableOpacity onPress={handlestocks}>
                <Image
                  style={{height: '100%', width: '100%'}}
                  resizeMode="contain"
                  source={{
                    uri: 'https://gumlet.assettype.com/swarajya%2F2021-10%2F80236a83-c2a4-4e16-9d59-b2426af380ad%2FBSE_Image.png?q=75&auto=format%2Ccompress&format=webp&w=610&dpr=1.3',
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text
              onPress={handlestocks}
              style={{
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                fontSize: 12,
                color: stocks ? 'dodgerblue' : 'grey',
                fontWeight: 'bold',
              }}>
              Stocks
            </Text>
            {stocks && (
              <View
                style={{
                  alignSelf: 'center',
                  marginTop: 2,
                  width: 10,
                  height: 4,
                  backgroundColor: 'dodgerblue',
                }}></View>
            )}
          </View>
          <View
            style={{
              height: 120,
              width: 120,
              marginRight: 10,
              alignItems: 'center',
              // borderWidth: 1,
              // borderColor: 'red',
            }}>
            <View style={{width: 100, height: 100, overflow: 'hidden'}}>
              <TouchableOpacity onPress={handlenational}>
                <Image
                  style={{height: '100%', width: '100%'}}
                  resizeMode="contain"
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwfJ9269WDsT-N99_57GZ33jaJw0AkBE6K3Q&usqp=CAU',
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text
              onPress={handlenational}
              style={{
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                fontSize: 12,
                color: national ? 'dodgerblue' : 'grey',
                fontWeight: 'bold',
              }}>
              National
            </Text>
            {national && (
              <View
                style={{
                  alignSelf: 'center',
                  marginTop: 2,
                  width: 10,
                  height: 4,
                  backgroundColor: 'dodgerblue',
                }}></View>
            )}
          </View>
          <View
            style={{
              height: 120,
              width: 120,
              marginRight: 10,
              alignItems: 'center',
              // borderWidth: 1,
              // borderColor: 'red',
            }}>
            <View style={{width: 100, height: 100, overflow: 'hidden'}}>
              <TouchableOpacity onPress={handleinter}>
                <Image
                  style={{height: '100%', width: '100%'}}
                  resizeMode="contain"
                  source={{
                    uri: 'https://previews.123rf.com/images/maxkabakov/maxkabakov1701/maxkabakov170101457/69303404-news-concept-newspaper-headline-international-news-on-white-background-3d-rendering.jpg',
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text
              onPress={handleinter}
              style={{
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                fontSize: 12,
                color: international ? 'dodgerblue' : 'grey',
                fontWeight: 'bold',
              }}>
              International
            </Text>
            {international && (
              <View
                style={{
                  alignSelf: 'center',
                  marginTop: 2,
                  width: 10,
                  height: 4,
                  backgroundColor: 'dodgerblue',
                }}></View>
            )}
          </View>
        </ScrollView>
      </View>
      <View>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 16,
            marginLeft: 5,
          }}>
          Article
        </Text>
        {isl ? (
          <>
            <View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  style={{height: 90, width: 150, marginLeft: 7}}
                  source={{
                    uri: 'https://www.indiansuperleague.com/static-resources/waf-images/content//ab/d8/30/16-9/zozSfbUjKv.JPG',
                  }}
                />
                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'black',
                    width: '55%',
                    fontWeight: '500',
                    marginLeft: 5,
                  }}>
                  Need to be united and ready more than ever before: Kerala
                  Blasters FC's Vukomanovic
                </Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  style={{height: 90, width: 150, marginLeft: 7}}
                  source={{
                    uri: 'https://www.indiansuperleague.com/static-resources/waf-images/content//c3/5c/7d/16-9/oEvBUvO7ji.JPG',
                  }}
                />
                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'black',
                    width: '55%',
                    fontWeight: '500',
                    marginLeft: 5,
                  }}>
                  Kerala Blasters FC could match a special record against East
                  Bengal FC
                </Text>
              </View>
            </View>
          </>
        ) : national ? (
          <>
            <View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  style={{height: 90, width: 150, marginLeft: 7}}
                  source={{
                    uri: 'https://newsonair.gov.in/writereaddata/News_Pictures/NAT/2023/Jan/NPIC-202312514421.jpg',
                  }}
                />
                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'black',
                    width: '55%',
                    fontWeight: '500',
                    marginLeft: 5,
                  }}>
                  13th National Voters’ Day is celebrated today; News Services
                  Division of All India Radio gets National Award for
                  contributions towards voters’ awareness
                </Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  style={{height: 90, width: 150, marginLeft: 7}}
                  source={{
                    uri: 'https://th-i.thgim.com/public/incoming/ssyecm/article66462396.ece/alternates/LANDSCAPE_1200/IMG_06JULYTH--Temple_3_1_8F8O6MPV.jpg',
                  }}
                />
                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'black',
                    width: '55%',
                    fontWeight: '500',
                    marginLeft: 5,
                  }}>
                  Palani’s Sri Dhandayuthapani Swamy temple is a “natural
                  wonder” of the world: Madras High Court
                </Text>
              </View>
            </View>
          </>
        ) : stocks ? (
          <>
            <View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  style={{height: 90, width: 150, marginLeft: 7}}
                  source={{
                    uri: 'https://img.etimg.com/thumb/msid-97542658,width-300,height-225,imgsize-61024,,resizemode-75/behind-the-scenes-how-gautam-adani-lost-75-bn-in-market-value-but-pulled-off-2-4-bn-share-sale-despite-short-attack.jpg',
                  }}
                />
                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'black',
                    width: '55%',
                    fontWeight: '500',
                    marginLeft: 5,
                  }}>
                  Gautam Adani: The Indian tycoon weathering stock market panic
                </Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  style={{height: 90, width: 150, marginLeft: 7}}
                  source={{
                    uri: 'https://images.moneycontrol.com/static-mcnews/2023/02/bse_nse_stockmarket_nifty_sensex5-770x433.jpg?impolicy=website&width=770&height=431',
                  }}
                />
                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'black',
                    width: '55%',
                    fontWeight: '500',
                    marginLeft: 5,
                  }}>
                  Closing Bell: Nifty ends flat, Sensex rises 224 pts; FMCG
                  gains, power stocks drag
                </Text>
              </View>
            </View>
          </>
        ) : international ? (
          <>
            <View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  style={{height: 90, width: 150, marginLeft: 7}}
                  source={{
                    uri: 'https://static.toiimg.com/thumb/msid-97534987,imgsize-20914,width-400,resizemode-4/97534987.jpg',
                  }}
                />
                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'black',
                    width: '55%',
                    fontWeight: '500',
                    marginLeft: 5,
                  }}>
                  US may let GE make jet engines in India
                </Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image
                  style={{height: 90, width: 150, marginLeft: 7}}
                  source={{
                    uri: 'https://www.usnews.com/object/image/00000186-08a9-db65-afde-29fbfc4d0000/HD2659334270image.jpg?update-time=1675179000000&size=responsiveFlow300',
                  }}
                />
                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'black',
                    width: '55%',
                    fontWeight: '500',
                    marginLeft: 5,
                  }}>
                  AHA News: Student-Athlete's Parents Grateful for National
                  Spotlight on Cardiac Arrest
                </Text>
              </View>
            </View>
          </>
        ) : null}
      </View>
    </>
  );
}
function HomeScreen({navigation, route}) {
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
        <View>
          <TextInput
            style={style.search}
            caretHidden={true}
            placeholder=" 🔎 Search for news"></TextInput>
        </View>
      </View>
      <Trendingdiv />
      <Weatherdiv />
      <TopicsDiv />
      <View style={footerstyle.footerdivmain}>
        <TouchableOpacity>
          <View style={footerstyle.icondiv}>
            <Image style={footerstyle.icons} source={require('./home.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('schedules')}>
          <View style={footerstyle.icondiv}>
            <Image
              style={{height: 45, width: 45, marginTop: -5}}
              source={require('./scheduler.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('announcement')}>
          <View style={footerstyle.icondiv}>
            <Image
              style={{height: 35, width: 35, marginTop: -3}}
              source={require('./speaker.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('bookmarks')}>
          <View style={footerstyle.icondiv}>
            <Image
              style={footerstyle.icons}
              source={require('./bookmark.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('settings')}>
          <View style={footerstyle.icondiv}>
            <Image
              style={footerstyle.icons}
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
  search: {
    marginTop: 12,
    margin: 5,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  trending_div_main: {},
  trending_scroll: {
    flexDirection: 'row',
    padding: 10,
  },
  trendingcontent_div: {
    alignItems: 'center',

    marginRight: 10,
  },
  trending_imageelements: {
    width: '100%',
    height: '100%',
  },
  imagecontainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  trending_text: {
    fontSize: 16,
  },
  topicdiv: {
    flexDirection: 'row',
    padding: 10,
  },
});
export const footerstyle = StyleSheet.create({
  footerdivmain: {
    justifyContent: 'center',
    position: 'absolute',
    height: '5%',
    bottom: 0,
    width: '100%',
    marginLeft: 5,
    marginTop: 20,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
export default HomeScreen;
