import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {fonts} from '../assets/fonts';

const AddCollection = ({navigation}) => {
  const [openCategory, setOpenCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Resume');
  const [judulMateri, setJudulMateri] = useState('');
  const [mataKuliah, setMataKuliah] = useState('');
  const [deskripsiResume, setDeskripsiResume] = useState('');
  const [semester, setSemester] = useState('0');
  const [openSemester, setOpenSemester] = useState(false);
  const [harga, setHarga] = useState('');

  const [judulBuku, setJudulBuku] = useState('');
  const [penulis, setPenulis] = useState('');
  const [deskripsiBuku, setDeskripsiBuku] = useState('');

  const handleUpload = () => {
    alert('Data berhasil di-upload!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconHeader}
          onPress={() => navigation.pop()}>
          <Icon name="angle-left" size={25} color="#3E3E40" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Tambah Koleksi</Text>
      </View>

      {/* Kategori */}
      <View style={styles.dropdownContainer}>
        <Icon name="list" size={20} color="#000" style={styles.icon} />
        <Text style={styles.label}>
          Kategori <Text style={styles.star}>*</Text>
        </Text>
        <DropDownPicker
          open={openCategory}
          value={selectedCategory}
          items={[
            {label: 'Resume', value: 'Resume'},
            {label: 'Buku', value: 'Buku'},
          ]}
          setOpen={setOpenCategory}
          setValue={setSelectedCategory}
          placeholder=""
          style={[styles.dropdown]}
          containerStyle={styles.dropdownWrapper}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          listItemContainerStyle={styles.listItemContainerStyle}
          listItemLabelStyle={styles.listItemLabelStyle}
          selectedItemContainerStyle={styles.selectedItemContainerStyle}
          selectedItemLabelStyle={styles.selectedItemLabelStyle}
          labelStyle={styles.dropdownText}
          arrowIconStyle={styles.arrowIcon}
        />
      </View>

      {/* Foto Preview */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Foto Preview <Text style={styles.star}>*</Text>
        </Text>
        <TouchableOpacity style={styles.photoUpload}>
          <Text style={styles.photoText}>+ Upload Foto</Text>
        </TouchableOpacity>
      </View>

      {selectedCategory === 'Resume' ? (
        // Jika kategori 'Resume' dipilih
        <>
          {/* Judul Materi */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Judul Materi <Text style={styles.star}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Judul Materi"
              value={judulMateri}
              onChangeText={setJudulMateri}
            />
          </View>

          {/* Mata Kuliah */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Mata Kuliah <Text style={styles.star}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Mata Kuliah"
              value={mataKuliah}
              onChangeText={setMataKuliah}
            />
          </View>

          {/* Deskripsi Resume */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Deskripsi Resume <Text style={styles.star}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Deskripsi Resume"
              value={deskripsiResume}
              onChangeText={setDeskripsiResume}
            />
          </View>

          {/* Semester */}
          <View style={styles.dropdownContainer}>
            <Icon
              name="graduation-cap"
              size={20}
              color="#000"
              style={styles.icon}
            />
            <Text style={styles.label}>
              Semester <Text style={styles.star}>*</Text>
            </Text>
            <DropDownPicker
              open={openSemester}
              value={semester}
              items={[
                {label: 'Pilih Semester', value: '0'},
                {label: '1', value: '1'},
                {label: '2', value: '2'},
                {label: '3', value: '3'},
                {label: '4', value: '4'},
                {label: '5', value: '5'},
                {label: '6', value: '6'},
                {label: '7', value: '7'},
                {label: '8', value: '8'},
              ]}
              setOpen={setOpenSemester}
              setValue={setSemester}
              placeholder=""
              style={[styles.dropdown]}
              containerStyle={styles.dropdownWrapper}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              listItemContainerStyle={styles.listItemContainerStyle}
              listItemLabelStyle={styles.listItemLabelStyle}
              selectedItemContainerStyle={styles.selectedItemContainerStyle}
              selectedItemLabelStyle={styles.selectedItemLabelStyle}
              labelStyle={styles.dropdownText}
            />
          </View>
        </>
      ) : (
        // Jika kategori 'Buku' dipilih
        <>
          {/* Judul Buku */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Judul Buku <Text style={styles.star}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Judul Buku"
              value={judulBuku}
              onChangeText={setJudulBuku}
            />
          </View>

          {/* Penulis */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Nama Penulis <Text style={styles.star}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Nama Penulis"
              value={penulis}
              onChangeText={setPenulis}
            />
          </View>

          {/* Deskripsi Buku */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Deskripsi Buku <Text style={styles.star}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Nama Penerbit"
              value={deskripsiBuku}
              onChangeText={setDeskripsiBuku}
            />
          </View>
        </>
      )}

      {/* Harga */}
      <View style={styles.inputContainer}>
        <View style={styles.customRow}>
          <Icon name="tags" size={20} color="#000" style={styles.icon} />
          <Text style={styles.label}>
            Harga <Text style={styles.star}>*</Text>
          </Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Nominal"
          keyboardType="numeric"
          value={harga}
          onChangeText={setHarga}
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
          <Text style={styles.uploadText}>Upload</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  header: {
    paddingVertical: 20,
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
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginTop: 2,
    fontFamily: fonts.primary.semiBold,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    zIndex: 1000,
  },
  dropdownWrapper: {
    flex: 1,
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    flex: 1,
  },
  dropDownContainerStyle: {
    borderColor: '#ddd',
    marginTop: -4,
    zIndex: 1000,
  },
  listItemLabel: {
    fontSize: 14,
    color: '#333',
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'right',
    marginRight: 8,
    marginTop: 2,
    fontFamily: fonts.primary.regular,
  },
  photoUpload: {
    borderWidth: 1,
    borderColor: '#87CEFA',
    borderRadius: 8,
    paddingVertical: 20,
    alignItems: 'center',
    borderStyle: 'dotted',
  },
  photoText: {
    fontSize: 16,
    color: '#87CEFA',
    fontFamily: fonts.primary.regular,
  },
  input: {
    fontSize: 16,
    color: '#333',
    fontFamily: fonts.primary.regular,
  },
  customRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 50,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    marginRight: 8,
    alignItems: 'center',
    elevation: 1,
  },
  uploadButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#00AEEF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00AEEF',
    marginLeft: 8,
    alignItems: 'center',
    elevation: 1,
  },
  icon: {
    marginRight: 8,
  },
  star: {
    color: 'red',
  },
  selectedItemLabelStyle: {
    color: '#333',
    fontFamily: fonts.primary.bold,
  },
  listItemContainerStyle: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  listItemLabelStyle: {
    color: '#333',
    fontSize: 16,
    fontFamily: fonts.primary.regular,
  },
  selectedItemContainerStyle: {
    backgroundColor: '#87CEFA',
  },
  cancelText: {color: '#000', fontSize: 16, fontFamily: fonts.primary.bold},
  uploadText: {color: '#fff', fontSize: 16, fontFamily: fonts.primary.bold},
});

export default AddCollection;
