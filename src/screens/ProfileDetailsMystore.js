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
    title: 'Data Visualization',
    category: 'Sains Data',
    price: 'Rp. 5000',
    rating: '4.8',
    image: require('../assets/images/buku.jpeg'),
  },
  {
    id: '2',
    title: 'Multi Layer Preception',
    category: 'Deep Learning',
    price: 'Rp. 39.999',
    rating: '4.6',
    image: require('../assets/images/mlp.png'),
  },
  {
    id: '3',
    title: 'Pengantar Jaringan Komputer',
    category: 'Jaringan',
    price: 'Rp. 39.999',
    rating: '4.6',
    image: require('../assets/images/buku.jpeg'),
  },
  {
    id: '4',
    title: 'Pengantar Jaringan Komputer',
    category: 'Jaringan',
    price: 'Rp. 39.999',
    rating: '4.6',
    image: require('../assets/images/buku.jpeg'),
  },
];
const ProfileDetailsMystore = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
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
        <TouchableOpacity style={styles.tabsItem}>
          <Text style={[styles.tabsText, styles.activeTabs]}>My Store</Text>
          <TouchableOpacity style={styles.activeDot} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabsItem}
          onPress={() => navigation.navigate('ProfileDetailsMypurchase')}>
          <Text style={styles.tabsText}>My Purchase</Text>
        </TouchableOpacity>
      </View>

      {/* Orders Section */}
      <View style={styles.orderContainer}>
        <TouchableOpacity style={styles.orderHeader}>
          <Text style={styles.orderTitle}>See All</Text>
        </TouchableOpacity>

        {/* Order Item */}
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardCategory}>{item.category}</Text>
              <Text style={styles.cardPrice}>{item.price}</Text>
              <View style={styles.star}>
                <Icon name="star" size={12} color="#edb310" solid />
                <Icon name="star" size={12} color="#edb310" solid />
                <Icon name="star" size={12} color="#edb310" solid />
                <Icon name="star" size={12} color="#edb310" solid />
                <Icon name="star-half-stroke" size={12} color="#edb310" solid />
                <Text style={styles.textRating}>{item.rating}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={styles.listContainer}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    backgroundColor: '#3CC7F5',
    marginTop: 2,
  },
  orderContainer: {
    marginTop: 10,
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
  listContainer: {
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 5,
    width: 150,
    marginRight: 15,
    elevation: 3,
    justifyContent: 'space-between',
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 12,
    fontFamily: fonts.primary.bold,
    marginVertical: 10,
  },
  cardCategory: {
    fontSize: 12,
    color: '#8e8e8e',
  },
  cardPrice: {
    fontSize: 14,
    fontFamily: fonts.primary.bold,
    color: '#000000',
    marginTop: 5,
  },
  textRating: {
    fontSize: 12,
    fontFamily: fonts.primary.bold,
    color: '#8e8e8e',
    marginTop: 5,
    marginHorizontal: 5,
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ProfileDetailsMystore;
