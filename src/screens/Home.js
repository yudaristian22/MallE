// src/layout/Home.js

import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/Octicons';
import Icons from 'react-native-vector-icons/FontAwesome6';
const data = [
  {
    id: '1',
    title: 'Data Visualization',
    category: 'Sains Data',
    price: 'Rp. 5000',
    rating: '4.5',
    reviews: '46,890',
    image: require('../assets/images/g-01.jpg'),
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
  },
  {
    id: '2',
    title: 'Multi Layer Perception',
    category: 'Deep Learning',
    price: 'Rp. 1000',
    rating: '4.5',
    reviews: '2,56,890',
    image: require('../assets/images/g-01.jpg'),
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
  },
  {
    id: '3',
    title: 'Multi Layer Perception',
    category: 'Deep Learning',
    price: 'Rp. 3000',
    rating: '4.5',
    reviews: '2,56,890',
    image: require('../assets/images/g-01.jpg'),
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
  },
  {
    id: '4',
    title: 'Multi Layer Perception',
    category: 'Deep Learning',
    price: 'Rp. 4000',
    rating: '4.5',
    reviews: '2,56,890',
    image: require('../assets/images/g-01.jpg'),
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
  },
  {
    id: '5',
    title: 'Multi Layer Perception',
    category: 'Deep Learning',
    price: 'Rp. 7000',
    rating: '4.5',
    reviews: '2,56,890',
    image: require('../assets/images/g-01.jpg'),
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
  },
  {
    id: '6',
    title: 'Multi Layer Perception',
    category: 'Deep Learning',
    price: 'Rp. 1000',
    rating: '4.5',
    reviews: '2,56,890',
    image: require('../assets/images/g-01.jpg'),
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
  },
  // Tambahkan lebih banyak item sesuai kebutuhan
];

const Home = ({navigation}) => {
  const renderItem = ({item}) => {
    const imageSource =
      typeof item.image === 'string' && item.image.startsWith('http')
        ? {uri: item.image}
        : item.image;

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Detail', {item})}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.rating}>
          ⭐⭐⭐⭐⭐ {item.rating} ({item.reviews})
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('OrderDetail')}>
          <Icons name="clipboard-list" size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logoImage}
        />
        <TouchableOpacity
          style={styles.profileIconContainer}
          onPress={() => navigation.navigate('ProfileDetailsMystore')}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TouchableOpacity style={{paddingHorizontal: 10}}>
          <Icons name="magnifying-glass" size={20} color="#BBBBBB" />
        </TouchableOpacity>

        <TextInput
          style={styles.searchBar}
          placeholder="Search any Product..."
          placeholderTextColor="#BBBBBB"
        />
        <TouchableOpacity style={{paddingHorizontal: 10}}>
          <Icons name="sliders" size={20} color="#BBBBBB" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={styles.activeTab}>Resume</Text>
        <Text style={styles.inactiveTab}>Books</Text>
      </View>

      {/* Product List */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id} // Menggunakan item.id sebagai key yang unik
        numColumns={2}
        contentContainerStyle={styles.content}
      />

      {/* Footer */}

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="home" size={20} color="#3CC7F5" />
          <Text style={[styles.footerButtonText, styles.active]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('AddCollection')}>
          <Image
            source={require('../assets/images/shop.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('ProfileDetailsMystore')}>
          <Image
            source={require('../assets/images/settings.png')}
            style={styles.icon}
          />
          <Text style={styles.footerButtonText}>Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3cc7f5',
    marginHorizontal: 2,
    padding: 10,
    borderRadius: 20,
  },
  logoImage: {
    width: 100,
    height: 30,
  },
  profileIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#ff8a80',
  },
  profileIcon: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  searchIcon: {
    marginLeft: 10,
    width: 20,
    height: 20,
  },
  searchBar: {
    flex: 1,
    padding: 10,
    paddingLeft: 10,
    height: 40,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  activeTab: {
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  inactiveTab: {
    color: '#888',
    marginHorizontal: 16,
  },
  active: {
    color: '#3CC7F5',
  },
  content: {
    paddingHorizontal: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 8,
    paddingBottom: 8,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: 165,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 8,
    fontSize: 18,
  },
  category: {
    color: '#555',
    paddingLeft: 8,
  },
  price: {
    color: '#000',
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  rating: {
    color: '#555',
    marginTop: 4,
    paddingLeft: 8,
    fontSize: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#000000',
  },
});

export default Home;
