import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {fonts} from '../assets/fonts';

const books = [
  {
    id: '1',
    title: 'Pengantar Jaringan Komputer',
    sold: 1,
    category: 'Buku',
    image: require('../assets/images/buku.jpeg'),
  },
  {
    id: '2',
    title: 'Pengantar Jaringan Komputer',
    sold: 1,
    category: 'Buku',
    image: require('../assets/images/buku.jpeg'),
  },
];

const MyStore = ({navigation}) => {
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.sold}>{item.sold} Terjual</Text>
        <Text style={styles.category}>Kategori: {item.category}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconHeader}
          onPress={() => navigation.pop()}>
          <Icon name="angle-left" size={25} color="#3E3E40" />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Store</Text>
      </View>

      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconHeader: {
    position: 'absolute',
    left: 1,
  },
  headerText: {
    fontSize: 20,
    fontFamily: fonts.primary.bold,
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.bold,
  },
  sold: {
    fontSize: 14,
    color: '#666',
    fontFamily: fonts.primary.regular,
  },
  category: {
    fontSize: 14,
    color: '#666',
    fontFamily: fonts.primary.regular,
  },
});

export default MyStore;
