import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {fonts} from '../assets/fonts';

const data = [
  {
    id: '1',
    image: require('../assets/images/buku.jpeg'),
    title: 'Data Visualization',
    status: 'Current Order - Arrival est. Apr 14',
  },
  {
    id: '2',
    image: require('../assets/images/buku.jpeg'),
    title: 'Data Visualization',
    status: 'Current Order - Arrival est. Apr 14',
  },
  {
    id: '3',
    image: require('../assets/images/buku.jpeg'),
    title: 'Data Visualization',
    status: 'Current Order - Arrival est. Apr 14',
  },
  {
    id: '4',
    image: require('../assets/images/buku.jpeg'),
    title: 'Data Visualization',
    status: 'Current Order - Arrival est. Apr 14',
  },
  {
    id: '5',
    image: require('../assets/images/buku.jpeg'),
    title: 'Data Visualization',
    status: 'Current Order - Arrival est. Apr 14',
  },
];
const ProfileDetailsMypurchase = ({navigation}) => {
  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />

      {/* Header */}
      <TouchableOpacity style={styles.header} onPress={() => navigation.pop()}>
        <Icon name="angle-left" size={25} color="#3E3E40" />
      </TouchableOpacity>

      {/* Profile Picture */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images/avatar.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Yuda Ristian Asgari</Text>
        <Text style={styles.profileUsername}>@yudaristian</Text>
      </View>

      {/* Action Button */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.button}>
          <Icon name="clipboard-list" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SettingUser')}>
          <Icon name="gear" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.plus}>
          <Icon name="plus" size={30} color="#000000" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={styles.tabsItem}
          onPress={() => navigation.navigate('ProfileDetailsMystore')}>
          <Text style={styles.tabsText}>My Store</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabsItem}>
          <Text style={[styles.tabsText, styles.activeTabs]}>My Purchase</Text>
          <TouchableOpacity style={styles.activeDot} />
        </TouchableOpacity>
      </View>

      {/* Orders Section */}

      <View style={styles.orderContainer}>
        <TouchableOpacity style={styles.orderHeader}>
          <Text style={styles.orderTitle}>See All</Text>
        </TouchableOpacity>
      </View>
      {/* Order Item */}
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <View style={styles.orderItem}>
            <Image source={item.image} style={styles.orderImage} />
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>{item.title}</Text>
              <Text style={styles.orderStatus}>
                <Text style={styles.highlightText}>{item.status}</Text>
              </Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.orderlistContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  header: {
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  profileName: {
    fontFamily: fonts.primary.extrabold,
    fontSize: 30,
    color: '#000000',
  },
  profileUsername: {
    fontFamily: fonts.primary.regular,
    fontSize: 16,
    color: '#6E6E70',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#3cc7f5',
    marginHorizontal: 5,
    padding: 12,
    borderRadius: 12,
  },
  plus: {
    backgroundColor: '#E7E7E8',
    marginHorizontal: 5,
    padding: 12,
    borderRadius: 12,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  tabsItem: {
    alignItems: 'center',
  },
  tabsText: {
    marginHorizontal: 10,
    fontFamily: fonts.primary.bold,
    fontSize: 16,
    color: '#868687',
  },
  activeTabs: {
    fontFamily: fonts.primary.bold,
    fontSize: 16,
    color: '#000000',
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#3CC7F5', // Warna biru untuk dot
    marginTop: 2, // Jarak antara teks dan dot
  },
  orderContainer: {
    marginTop: 10,
    paddingBottom: 20,
  },
  orderlistContainer: {
    paddingBottom: 30,
  },
  orderHeader: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  orderTitle: {
    fontFamily: fonts.primary.regular,
    fontSize: 16,
    color: '#000000',
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  orderImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  orderName: {
    fontFamily: fonts.primary.medium,
    fontSize: 16,
  },
  orderStatus: {
    fontFamily: fonts.primary.regular,
    fontSize: 14,
  },
  highlightText: {
    color: '#614FE0',
    fontFamily: fonts.primary.regular,
  },
  cancel: {
    color: '#DF0707',
  },
});

export default ProfileDetailsMypurchase;
