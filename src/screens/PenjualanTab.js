import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PenjualanTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>Tidak ada data penjualan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 16, color: '#888' },
});

export default PenjualanTab;
