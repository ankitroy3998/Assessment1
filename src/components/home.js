import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: [
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/42/fadddfea-49a0-4432-aed4-cc123c0897c91x.jpg',
        },
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/175/4d375745-2723-4e5c-92de-b8111c5a33071x.jpg',
        },
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/499/3f3cb274-27a5-4dd1-8e20-b3a32bb795ae1x.jpg',
        },
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/175/4d375745-2723-4e5c-92de-b8111c5a33071x.jpg',
        },
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/42/fadddfea-49a0-4432-aed4-cc123c0897c91x.jpg',
        },
      ],
      AppCards: [
        {
          head: 'BASIC',
          clinicName: 'Zoylo Basic Health Checkup',
          tests: '59 tests included',
          prevPrice: '₹ 1750',
          currentPrice: '₹ 699',
          discount: '60% off',
          logo: 'ZOYLO LABS',
        },
        {
          head: 'BASIC',
          clinicName: 'Zoylo Vital Bone Care',
          tests: '2 tests included',
          prevPrice: '₹ 1800',
          currentPrice: '₹ 700',
          discount: '61% off',
          logo: 'ZOYLO LABS',
        },
        {
          head: 'BASIC',
          clinicName: 'Zoylo Neurological Suregons',
          tests: '59 tests included',
          prevPrice: '₹ 2150',
          currentPrice: '₹ 1209',
          discount: '52% off',
          logo: 'ZOYLO LABS',
        },
      ],
    };
  }

  render() {
    const {img, AppCards} = this.state;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#f0f0f5'}}>
        <View>
          <TouchableOpacity>
            <Image source={require('../assets/mobile.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.cartImage}
              source={require('../assets/cart.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <FlatList
            style={{margin: 10}}
            horizontal
            data={img}
            renderItem={({item}) => {
              return (
                <Image source={{uri: item.image}} style={styles.imageStart} />
              );
            }}
          />

          <View style={styles.parentSectionSecond}>
            <View style={styles.sectionSecond}>
              <Image source={require('../assets/pill.png')} />
              <Text style={styles.textSectionSecond}>Medicines</Text>
            </View>
            <View style={styles.sectionSecond}>
              <Image source={require('../assets/microscope.png')} />
              <Text style={styles.textSectionSecond}>Tests and Packages</Text>
            </View>
            <View style={styles.sectionSecond}>
              <Image source={require('../assets/consult.png')} />
              <Text style={styles.textSectionSecond}>Online Consultation</Text>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.sectionThird}>
              <Image
                style={styles.sectionThirdImage}
                source={require('../assets/stethoscope.png')}
              />
              <Text style={styles.textSectionThird}>Doctor Appointment</Text>
            </View>

            <View style={styles.sectionThird}>
              <Image
                style={styles.sectionThirdImage}
                source={require('../assets/wellness.png')}
              />
              <Text style={styles.textSectionThird}>Wellness Packages</Text>
            </View>

            <View style={styles.sectionThird}>
              <Image
                style={styles.sectionThirdImage}
                source={require('../assets/zoy.png')}
              />
              <Text style={styles.textSectionThird}>Ask Joy</Text>
            </View>

            <View style={styles.sectionThird}>
              <Image
                style={styles.sectionThirdImage}
                source={require('../assets/hospital.png')}
              />
              <Text style={styles.textSectionThird}>Home HealthCare</Text>
            </View>

            <View style={styles.sectionThird}>
              <Image
                style={styles.sectionThirdImage}
                source={require('../assets/packages.png')}
              />
              <Text style={styles.textSectionThird}>Hospital Packages</Text>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row', marginTop: 25}}>
            <View style={{flex: 0.8}}>
              <Text style={{fontSize: 15, marginLeft: 7}}>
                Diagnostic Packages by Zoylo Labs
              </Text>
            </View>

            <View style={{flex: 0.2}}>
              <Text style={{color: '#FF8C00'}}>View All</Text>
            </View>
          </View>

          <FlatList
            style={{margin: 10}}
            horizontal
            data={AppCards}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View style={styles.cardStyle}>
                  <View style={{backgroundColor: '#ddd3ee', padding: 7}}>
                    <View style={styles.flatlistView}>
                      <Text style={styles.cardTextHead}>{item.head}</Text>
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text style={{fontWeight: '600'}}>{item.clinicName}</Text>
                    </View>
                    <View style={{marginTop: 16}}>
                      <Text>{item.tests}</Text>
                    </View>
                  </View>

                  <Text style={styles.prevPriceCard}>{item.prevPrice}</Text>

                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, padding: 8}}>
                      <Text style={{color: 'green'}}>{item.currentPrice}</Text>
                    </View>
                    <View style={{padding: 6}}>
                      <Text style={styles.discountCard}>{item.discount}</Text>
                    </View>
                  </View>
                  <Text style={styles.itemLogo}>{item.logo}</Text>
                  <TouchableOpacity>
                    <View
                      style={{height: 20, width: 80, margin: 10, padding: 3}}>
                      <Text style={styles.bookTxt}>Book Now</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />

          <View style={{marginLeft: 10}}>
            <Text>Medicine Categories</Text>
          </View>

          <View style={styles.parentSectionSecond}>
            <View style={styles.sectionSecond}>
              <Image source={require('../assets/healthcare.png')} />
              <Text style={styles.parentSectionTxt}>HealthCare Products</Text>
            </View>
            <View style={styles.sectionSecond}>
              <Image source={require('../assets/ayurveda.png')} />
              <Text style={styles.parentSectionTxt}>Ayurveda</Text>
            </View>
            <View style={styles.sectionSecond}>
              <Image source={require('../assets/pill.png')} />
              <Text style={styles.parentSectionTxt}>Homeopathy</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  imageStart: {
    height: 200,
    width: 250,
    resizeMode: 'center',
    margin: 10,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  parentSectionSecond: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  sectionSecond: {
    flex: 1,
    margin: 5,
    borderRadius: 7,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 7,
  },
  textSectionSecond: {
    textAlign: 'center',
    marginTop: 5,
  },
  sectionThird: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  sectionThirdImage: {
    borderRadius: 20,
    borderColor: 'silver',
    borderWidth: 2,
  },
  textSectionThird: {
    textAlign: 'center',
    marginTop: 8,
    marginLeft: 8,
    fontSize: 12,
  },

  cardStyle: {
    margin: 10,
    backgroundColor: 'white',
    flex: 1,
    width: 200,
    height: 300,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },

  cardTextHead: {
    fontWeight: '600',
    borderRadius: 4,
    borderWidth: 2,
    backgroundColor: 'white',
    padding: 5,
    borderColor: 'white',
  },

  discountCard: {
    color: 'green',
    borderColor: 'green',
    borderStyle: 'dashed',
    borderWidth: 2,
    padding: 3,
  },
  prevPriceCard: {
    padding: 8,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: '#000',
  },
  cartImage: {
    alignSelf: 'flex-end',
    marginVertical: -60,
  },
  parentSectionTxt: {
    margin: 7,
  },
  flatlistView: {
    marginTop: 8,
    height: 40,
    width: 60,
    marginLeft: 8,
    borderRadius: 10,
  },
  itemLogo: {
    color: 'purple',
    opacity: 0.4,
    padding: 6,
    fontSize: 18,
  },
  bookTxt: {
    color: 'orange',
    fontWeight: '600',
    fontSize: 15,
  },
});

export default Home;
