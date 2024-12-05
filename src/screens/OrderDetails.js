import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const OrderDetails = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("pembelian");
  const [orders, setOrders] = useState([
    {
      id: "1",
      title: "Pengantar Jaringan Komputer",
      price: 28900,
      status: "pending",
      image: "https://via.placeholder.com/80",
      transactionId: "8279874nry",
      paymentMethod: "COD",
      rating: null,
      canceled: false, // Status Pembatalan
    },
    {
      id: "2",
      title: "Pengantar Jaringan Komputer",
      price: 28900,
      status: "pending",
      image: "https://via.placeholder.com/80",
      transactionId: "8279875abc",
      paymentMethod: "COD",
      rating: null,
      canceled: false, // Status Pembatalan
    },
  ]);

  const handleComplete = (id) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === id) {
        return { ...order, status: "selesai" };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const handleCancel = (id) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === id) {
        return { ...order, status: "dibatalkan", canceled: true };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const handleRatingChange = (id, value) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === id) {
        return { ...order, rating: value };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const renderOrder = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.detail}>ID Transaksi: {item.transactionId}</Text>
        <Text style={styles.price}>Rp. {item.price.toLocaleString()}</Text>
        <Text style={styles.detail}>Metode Pembayaran: {item.paymentMethod}</Text>
        <Text style={styles.status}>Status: {item.status}</Text>
        {item.status === "pending" ? (
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.completeButton}
              onPress={() => handleComplete(item.id)}
            >
              <Text style={styles.buttonText}>Selesai</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => handleCancel(item.id)}
            >
              <Text style={styles.buttonText}>Batalkan</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            {item.status === "dibatalkan" && (
              <Text style={styles.cancelText}>Pesanan dibatalkan</Text>
            )}
            {item.status === "selesai" && (
              <>
                <Text style={styles.successText}>Pesanan selesai!</Text>
                {item.rating === null ? (
                  <View style={styles.ratingContainer}>
                    <View style={styles.stars}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <TouchableOpacity
                          key={star}
                          onPress={() => handleRatingChange(item.id, star)} // Ubah rating pada klik
                        >
                          <Icon
                            name={star <= (item.rating || 0) ? "star" : "star-outline"} // Gunakan logika bintang
                            size={30}
                            color={star <= (item.rating || 0) ? "#FFD700" : "#ccc"} // Tentukan warna
                          />
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                ) : (
                  <View style={styles.ratingContainer}>
                    <View style={styles.stars}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon
                          key={star}
                          name={star <= item.rating ? "star" : "star-outline"} // Tampilan bintang terisi sesuai rating
                          size={30}
                          color={star <= item.rating ? "#FFD700" : "#ccc"}
                        />
                      ))}
                    </View>
                  </View>
                )}
              </>
            )}
          </>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconHeader}
          onPress={() => navigation.pop()}
        >
          <Icon name="arrow-back-ios" size={25} color="#3E3E40" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Order Detail</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {["pembelian", "penjualan"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={styles.tab}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
            {activeTab === tab && <View style={styles.activeDot} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      {activeTab === "pembelian" ? (
        <FlatList
          data={orders}
          renderItem={renderOrder}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>Tidak ada data penjualan</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconHeader: {
    position: "absolute",
    left: 10,
    top: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: '#333',
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
    paddingVertical: 8,
  },
  tab: { flex: 1, alignItems: "center" },
  tabText: { fontSize: 16, color: "#888" },
  activeTabText: { color: "#000", fontWeight: "bold" },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: "#00AEEF",
    marginTop: 5,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: { width: 80, height: 100, borderRadius: 8, marginRight: 16 },
  cardContent: { flex: 1 },
  title: { color: "#333", fontSize: 16, fontWeight: "bold", marginBottom: 4 },
  detail: { fontSize: 14, color: "#666", marginBottom: 2 },
  price: { fontSize: 14, color: "#666", marginBottom: 4 },
  status: { fontSize: 14, color: "#888" },
  actions: { flexDirection: "row", marginTop: 10 },
  completeButton: {
    flex: 1,
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
    marginRight: 5,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#FF3B3B",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  successText: { marginTop: 10, color: "#28a745", fontWeight: "bold" },
  cancelText: { marginTop: 10, color: "#FF3B3B", fontWeight: "bold" }, // Style label pembatalan
  ratingContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingLabel: { fontSize: 14, color: "#333", marginRight: 8 },
  stars: {
    flexDirection: "row",
    marginTop: 5,
  },
  ratingDisplay: {
    marginTop: 10,
    fontSize: 14,
    color: "#FFD700",
  },
  emptyState: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyText: { fontSize: 16, color: "#888" },
});

export default OrderDetails;


//import React, { useState } from 'react';
//import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//import PembelianTab from './PembelianTab';
//import PenjualanTab from './PenjualanTab';
//
//const OrderDetails = ({ navigation }) => {
//    const [activeTab, setActiveTab] = useState('pembelian');
//    const [orders, setOrders] = useState([
//      {
//        id: "1",
//        title: "Pengantar Jaringan Komputer",
//        price: 28900,
//        status: "pending",
//        image: "https://via.placeholder.com/80",
//        transactionId: "8279874nry",
//        paymentMethod: "COD",
//        rating: null,
//        canceled: false, // Status Pembatalan
//      },
//      {
//        id: "2",
//        title: "Pengantar Jaringan Komputer",
//        price: 28900,
//        status: "pending",
//        image: "https://via.placeholder.com/80",
//        transactionId: "8279875abc",
//        paymentMethod: "COD",
//        rating: null,
//        canceled: false, // Status Pembatalan
//      },
//    ]);
//
//    const handleComplete = (id) => {
//      const updatedOrders = orders.map((order) => {
//        if (order.id === id) {
//          return { ...order, status: "selesai" };
//        }
//        return order;
//      });
//      setOrders(updatedOrders);
//    };
//
//    const handleCancel = (id) => {
//      const updatedOrders = orders.map((order) => {
//        if (order.id === id) {
//          return { ...order, status: "dibatalkan", canceled: true };
//        }
//        return order;
//      });
//      setOrders(updatedOrders);
//    };
//
//    const handleRatingChange = (id, value) => {
//      const updatedOrders = orders.map((order) => {
//        if (order.id === id) {
//          return { ...order, rating: value };
//        }
//        return order;
//      });
//      setOrders(updatedOrders);
//    };
//
//  return (
//    <View style={styles.container}>
//      <View style={styles.header}>
//        <TouchableOpacity
//          style={styles.iconHeader}
//          onPress={() => navigation.pop()}
//        >
//          <Icon name="arrow-back-ios" size={25} color="#3E3E40" />
//        </TouchableOpacity>
//        <Text style={styles.headerText}>Order Detail</Text>
//      </View>
//
//      <View style={styles.tabs}>
//        {['pembelian', 'penjualan'].map((tab) => (
//          <TouchableOpacity
//            key={tab}
//            style={styles.tab}
//            onPress={() => setActiveTab(tab)}
//          >
//            <Text
//              style={[
//                styles.tabText,
//                activeTab === tab && styles.activeTabText,
//              ]}
//            >
//              {tab.charAt(0).toUpperCase() + tab.slice(1)}
//            </Text>
//            {activeTab === tab && <View style={styles.activeDot} />}
//          </TouchableOpacity>
//        ))}
//      </View>
//
//      {activeTab === 'pembelian' ? (
//        <PembelianTab
//          orders={orders}
//          handleComplete={handleComplete}
//          handleCancel={handleCancel}
//          handleRatingChange={handleRatingChange}
//        />
//      ) : (
//        <PenjualanTab />
//      )}
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//      container: { flex: 1, padding: 16, backgroundColor: "#fff" },
//      header: {
//        paddingVertical: 10,
//        flexDirection: "row",
//        alignItems: "center",
//        justifyContent: "center",
//      },
//      iconHeader: {
//        position: "absolute",
//        left: 10,
//        top: 15,
//      },
//      headerText: {
//        fontSize: 20,
//        fontWeight: "bold",
//        textAlign: "center",
//        color: '#333',
//      },
//      tabs: {
//        flexDirection: "row",
//        justifyContent: "space-around",
//        marginBottom: 16,
//        paddingVertical: 8,
//      },
//      tab: { flex: 1, alignItems: "center" },
//      tabText: { fontSize: 16, color: "#888" },
//      activeTabText: { color: "#000", fontWeight: "bold" },
//      activeDot: {
//        width: 6,
//        height: 6,
//        borderRadius: 4,
//        backgroundColor: "#00AEEF",
//        marginTop: 5,
//      }
//    });
//
//export default OrderDetails;