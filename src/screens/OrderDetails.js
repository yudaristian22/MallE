import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import StarRating from 'react-native-star-rating-widget';
import {fonts} from '../assets/fonts';

const OrderDetail = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Pembelian');
  const [ratings, setRatings] = useState({});

  const [orderData, setOrderData] = useState({
    Pembelian: [
      {
        title: 'Pengantar Jaringan Komputer',
        price: 'Rp. 28.900',
        paymentMethod: 'COD',
        image: require('../assets/images/buku.jpeg'),
      },
    ],
    Penjualan: [
      {
        title: 'Pengantar Jaringan Komputer',
        price: 'Rp. 28.900',
        paymentMethod: 'COD',
        image: require('../assets/images/buku.jpeg'),
      },
    ],
    Selesai: [
      {
        title: 'Pengantar Jaringan Komputer',
        price: 'Rp. 28.900',
        paymentMethod: 'COD',
        image: require('../assets/images/buku.jpeg'),
      },
    ],
  });

  const markAsComplete = index => {
    const updatedPembelian = [...orderData.Pembelian];
    const completedOrder = updatedPembelian.splice(index, 1)[0];

    setOrderData({
      ...orderData,
      Pembelian: updatedPembelian,
      Selesai: [...orderData.Selesai, completedOrder],
    });

    setActiveTab('Selesai');
  };

  const renderOrders = () => {
    const orders = orderData[activeTab];

    if (orders.length === 0) {
      return (
        <View style={styles.emptyStateContainer}>
          <Icon
            name="clipboard-list"
            size={60}
            color="#888"
            style={styles.emptyIcon}
          />
          <Text style={styles.emptyText}>Belum ada transaksi</Text>
        </View>
      );
    }

    return orders.map((order, index) => (
      <View key={index} style={styles.orderItem}>
        <Image source={order.image} style={styles.image} />
        <View style={styles.orderInfo}>
          <Text style={styles.itemTitle}>{order.title}</Text>
          <Text style={styles.price}>{order.price}</Text>
          <Text style={styles.paymentMethod}>
            Pembayaran: {order.paymentMethod}
          </Text>

          {activeTab === 'Pembelian' && (
            <View>
              {/* Rating Widget */}
              <StarRating
                rating={ratings[index] || 0} // default 0 jika belum ada rating
                onChange={rating => {
                  setRatings({...ratings, [index]: rating}); // simpan raing
                }}
                starSize={30}
                style={styles.StarRating}
              />

              <TouchableOpacity
                style={[
                  styles.completeButton,
                  !ratings[index] && {backgroundColor: '#ccc'}, //disable jika rating belum ada
                ]}
                onPress={() => ratings[index] && markAsComplete(index)}
                disabled={!ratings[index]}>
                <Text style={styles.completeButtonText}>Tandai Selesai</Text>
              </TouchableOpacity>
            </View>
          )}

          {activeTab === 'Penjualan' && (
            <View style={styles.textContainer}></View>
          )}

          {activeTab === 'Selesai' && (
            <View style={styles.textContainer}>
              <Text style={styles.completedText}>Order Selesai</Text>
              <Icon
                name="check-circle"
                size={16}
                color="#00AEEF"
                style={styles.completedIcon}
              />
            </View>
          )}
        </View>
      </View>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconHeader}
          onPress={() => navigation.pop()}>
          <Icon name="angle-left" size={25} color="#3E3E40" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Order Detail</Text>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabs}>
        {['Pembelian', 'Penjualan', 'Selesai'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={styles.tab}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.activeDot} />}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.orderList}>{renderOrders()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
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
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    paddingVertical: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#888',
    fontFamily: fonts.primary.bold,
  },
  activeTabText: {
    color: '#000',
    fontFamily: fonts.primary.bold,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#00AEEF',
    marginTop: 5,
  },
  orderList: {
    flex: 1,
  },
  orderItem: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    marginLeft: 8,
    alignItems: 'center',
    elevation: 3,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 15,
  },
  orderInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontFamily: fonts.primary.bold,
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  paymentMethod: {
    fontSize: 12,
    color: '#666',
    marginBottom: 12,
  },
  completeButton: {
    backgroundColor: '#00AEEF',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontFamily: fonts.primary.bold,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  completedText: {
    color: '#00AEEF',
    fontFamily: fonts.primary.bold,
    marginRight: 4,
  },
  completedIcon: {
    marginLeft: 4,
  },
  cancelledText: {
    color: '#FF3B30',
    fontFamily: fonts.primary.bold,
    marginRight: 4,
  },
  cancelledIcon: {
    marginLeft: 4,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  emptyIcon: {
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
  },
  starRating: {marginTop: 10},
});

export default OrderDetail;
