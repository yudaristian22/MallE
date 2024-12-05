import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Konfigurasi baseURL dari backend
const apiClient = axios.create({
  baseURL: 'http://192.168.43.251:4000/api', //
});

// Tambahkan interceptor untuk menyisipkan token di header Authorization
apiClient.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.error('Failed to retrieve token:', error);
  }
  return config;
});

export default apiClient;
