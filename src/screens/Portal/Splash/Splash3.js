import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {fonts} from '../../../assets/fonts';

const Splash3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.pageNumber}>
          3<Text style={styles.logoHighlight}>/3</Text>
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Image*/}
      <View style={styles.viewImage}>
        <Image
          source={require('../../../assets/images/Programming.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Get Your Order</Text>
        <Text style={styles.description}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>
      </View>

      <View style={styles.viewPagination}>
        <TouchableOpacity
          style={{position: 'absolute', left: 20}}
          onPress={() => navigation.pop()}>
          <Text style={styles.prevText}>Prev</Text>
        </TouchableOpacity>

        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>

        <TouchableOpacity
          style={{position: 'absolute', right: 20}}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageNumber: {
    fontSize: 19,
    fontFamily: fonts.primary.bold,
    color: '#000000',
    elevation: 3,
  },
  logoHighlight: {
    color: '#a0a0a1',
  },
  skipText: {
    fontSize: 19,
    fontFamily: fonts.primary.bold,
    color: '#000000',
    elevation: 3,
  },
  viewImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  title: {
    color: '#000000',
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: fonts.primary.bold,
  },
  description: {
    fontSize: 18,
    color: '#b3b3b4',
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: fonts.primary.regular,
  },
  viewPagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 20,
  },
  prevText: {
    fontSize: 18,
    color: '#c4c4c4',
    fontFamily: fonts.primary.bold,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d1d3d8',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000000',
    width: 40,
    paddingRight: 5,
  },
  nextText: {
    fontSize: 18,
    color: '#3cc7f5',
    fontFamily: fonts.primary.bold,
  },
});
export default Splash3;
