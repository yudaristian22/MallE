import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PembelianTab = ({ orders, handleComplete, handleCancel, handleRatingChange }) => {
  const renderOrder = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.detail}>ID Transaksi: {item.transactionId}</Text>
        <Text style={styles.price}>Rp. {item.price.toLocaleString()}</Text>
        <Text style={styles.detail}>Metode Pembayaran: {item.paymentMethod}</Text>
        <Text style={styles.status}>Status: {item.status}</Text>
        {item.status === 'pending' ? (
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
        ) : item.status === 'selesai' ? (
          <>
            <Text style={styles.successText}>Pesanan selesai!</Text>
            {item.rating === null ? (
              <View style={styles.ratingContainer}>
                <View style={styles.stars}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <TouchableOpacity
                      key={star}
                      onPress={() => handleRatingChange(item.id, star)}
                    >
                      <Icon
                        name={star <= (item.rating || 0) ? 'star' : 'star-outline'}
                        size={30}
                        color={star <= (item.rating || 0) ? '#FFD700' : '#ccc'}
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
                      name={star <= item.rating ? 'star' : 'star-outline'}
                      size={30}
                      color={star <= item.rating ? '#FFD700' : '#ccc'}
                    />
                  ))}
                </View>
              </View>
            )}
          </>
        ) : (
          <Text style={styles.cancelText}>Pesanan dibatalkan</Text>
        )}
      </View>
    </View>
  );

  return (
    <FlatList
      data={orders}
      renderItem={renderOrder}
      keyExtractor={(item) => item.id}
    />
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

export default PembelianTab;
