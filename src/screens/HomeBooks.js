// src/layout/Home.js

import React, {useState, useEffect} from 'react';
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
import {fonts} from '../assets/fonts';
import {Modal, Button} from 'react-native';
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

const HomeBooks = ({navigation}) => {
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
  const [modalVisible, setModalVisible] = React.useState(false);
  const [sortOption, setSortOption] = useState('Recently Added');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/images/list.png')}
          style={styles.timeIcon}
        />
        <Image
          source={require('../assets/images/Malle.png')}
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
        <TouchableOpacity
          style={{paddingHorizontal: 10}}
          onPress={() => setModalVisible(true)}>
          <Icons name="sliders" size={20} color="#BBBBBB" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adjust</Text>
            <Text style={styles.modalSubtitle}>Sort by</Text>
            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                setSortOption('Recently Added');
                setModalVisible(false);
              }}>
              <Text style={styles.optionText}>Recently Added</Text>
              {sortOption === 'Recently Added' && (
                <View style={styles.radioSelected} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                setSortOption('Alphabetically (A-Z)');
                setModalVisible(false);
              }}>
              <Text style={styles.optionText}>Alphabetically (A-Z)</Text>
              {sortOption === 'Alphabetically (A-Z)' && (
                <View style={styles.radioSelected} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeResume')}>
          <Text style={styles.inactiveTab}>Resume</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeBooks')}>
          <Text style={styles.activeTab}>Books</Text>
        </TouchableOpacity>
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

        <TouchableOpacity style={styles.footerButton}>
          <Image
            source={require('../assets/images/shop.png')}
            style={styles.icon}
          />
          <Text style={styles.footerButtonText}>Shop</Text>
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
  timeIcon: {
    width: 30,
    height: 30,
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
    fontFamily: fonts.primary.regular,
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
    marginHorizontal: 16,
    fontFamily: fonts.primary.bold,
  },
  inactiveTab: {
    color: '#888',
    marginHorizontal: 16,
    fontFamily: fonts.primary.regular,
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
    fontFamily: fonts.primary.bold,
    paddingLeft: 8,
    fontSize: 18,
  },
  category: {
    color: '#555',
    paddingLeft: 8,
    fontFamily: fonts.primary.regular,
  },
  price: {
    color: '#000',
    fontFamily: fonts.primary.bold,
    paddingLeft: 8,
  },
  rating: {
    color: '#555',
    marginTop: 4,
    paddingLeft: 8,
    fontSize: 10,
    fontFamily: fonts.primary.regular,
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
    fontFamily: fonts.primary.regular,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalSubtitle: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 16,
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeBooks;
