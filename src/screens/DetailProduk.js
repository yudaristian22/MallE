import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';
import {fonts} from '../assets/fonts';

const DetailProduk = ({route, navigation}) => {
  const {item} = route.params; // Get item from navigation parameters

  const handleBuyNow = () => {
    navigation.navigate('Payment', {item}); // Pass item data to Checkout screen
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconHeader}
          onPress={() => navigation.pop()}>
          <Icon name="angle-left" size={25} color="#3E3E40" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Detail Resume</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.rating}>
          ⭐ {item.rating} ({item.reviews})
        </Text>
        <Text style={styles.tDescription}>Description</Text>
        <Text style={styles.description}>{item.description}</Text>
      </ScrollView>

      {/* Footer with Chat Seller and Buy Now Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText}>Chat Seller</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  scrollContent: {
    padding: 10,
    paddingBottom: 60, // Extra padding to prevent overlap with footer
  },
  header: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconHeader: {
    position: 'absolute',
    left: 1,
  },
  headerText: {
    fontFamily: fonts.primary.bold,
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontFamily: fonts.primary.bold,
    fontSize: 24,
    marginBottom: 8,
    marginTop: 8,
  },
  category: {
    color: '#555',
    marginBottom: 4,
    fontFamily: fonts.primary.regular,
  },
  price: {
    fontFamily: fonts.primary.bold,
    fontSize: 20,
    marginBottom: 4,
  },
  rating: {
    color: '#555',
    fontFamily: fonts.primary.regular,
  },
  tDescription: {
    fontFamily: fonts.primary.bold,
    marginTop: 16,
    fontSize: 16,
  },
  description: {
    marginTop: 8,
    color: '#575758',
    fontSize: 14,
    textAlign: 'left',
    fontFamily: fonts.primary.regular,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: 'transparent',
  },
  chatButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 48,
    width: 160,
  },
  chatButtonText: {
    color: '#000',
    fontFamily: fonts.primary.bold,

    textAlign: 'center',
    fontSize: 16,
  },
  buyButton: {
    backgroundColor: '#3CC7F5',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 48,
    width: 160,
  },
  buyButtonText: {
    color: '#fff',
    fontFamily: fonts.primary.bold,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default DetailProduk;
