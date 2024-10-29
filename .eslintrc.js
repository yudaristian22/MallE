module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    // Tambahkan aturan di sini untuk menonaktifkan peringatan tertentu
    'no-unused-vars': 'off', // Menonaktifkan peringatan untuk variabel yang tidak digunakan
    'react-native/no-inline-styles': 'off', // Menonaktifkan peringatan untuk style inline di komponen React Native
  },
};
