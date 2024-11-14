import React, {useState} from 'react';
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
    "_id": "6734dd300bd9e9b2f89185e8",
    "image": "https://picsum.photos/200/300?random=3",
    "title": "UI/UX Design Essentials",
    "description": "Learn the principles of user interface and user experience design. This course covers key concepts such as wireframing, prototyping, user research, usability testing, and design thinking. You will gain hands-on experience with popular design tools and methods used by top industry professionals. Ideal for designers, developers, and business analysts looking to enhance their skills.",
    "price": 120,
    "types": "resume",
    "courseName": "UX/UI Design Fundamentals",
    "stars": 4.2,
    "numberOfReview": 65
  },
  {
      "_id": "6734dd300bd9e9b2f8918ye8",
      "image": "https://picsum.photos/200/300?random=90",
      "title": "UI/UX Design Essentials",
      "description": "Learn the principles of user interface and user experience design. This course covers key concepts such as wireframing, prototyping, user research, usability testing, and design thinking. You will gain hands-on experience with popular design tools and methods used by top industry professionals. Ideal for designers, developers, and business analysts looking to enhance their skills.",
      "price": 120,
      "types": "resume",
      "courseName": "UX/UI Design Fundamentals",
      "stars": 4.2,
      "numberOfReview": 65
    },
    {
        "_id": "6734dd300bd9e9b2f89185g8",
        "image": "https://picsum.photos/200/300?random=8",
        "title": "UI/UX Design Essentials",
        "description": "Learn the principles of user interface and user experience design. This course covers key concepts such as wireframing, prototyping, user research, usability testing, and design thinking. You will gain hands-on experience with popular design tools and methods used by top industry professionals. Ideal for designers, developers, and business analysts looking to enhance their skills.",
        "price": 120,
        "types": "book",
        "courseName": "UX/UI Design Fundamentals",
        "stars": 4.2,
        "numberOfReview": 65
      },
  {
    "_id": "6734dd300bd9e9b2f89185e9",
    "image": "https://picsum.photos/200/300?random=4",
    "title": "Full Stack Web Development",
    "description": "Become a full stack web developer using modern technologies. This course covers frontend development with HTML, CSS, JavaScript, React, and backend with Node.js and Express. You'll also learn database management, APIs, authentication, and deployment techniques. By the end, you'll have the skills to build and manage complex web applications. Perfect for aspiring developers.",
    "price": 300,
    "types": "book",
    "courseName": "Full Stack Masterclass",
    "stars": 5,
    "numberOfReview": 150
  },
  {
    "_id": "6734dd300bd9e9b2f89185ea",
    "image": "https://picsum.photos/200/300?random=5",
    "title": "Python for Data Science",
    "description": "Explore data science concepts using Python programming. You will cover data manipulation, data visualization, machine learning, and deep learning with libraries like pandas, NumPy, Matplotlib, and TensorFlow. Projects include real-world datasets and predictive modeling. Gain essential data analysis skills for data science jobs, improving decision-making processes, and more.",
    "price": 180,
    "types": "book",
    "courseName": "Data Science with Python",
    "stars": 4.7,
    "numberOfReview": 200
  },
  {
    "_id": "6734dd300bd9e9b2f89185eb",
    "image": "https://picsum.photos/200/300?random=6",
    "title": "Networking Basics",
    "description": "Understand computer networking concepts and protocols. This course explains the OSI model, IP addressing, subnetting, routing, switching, and network security principles. Hands-on labs help illustrate how network devices communicate and how data travels across the internet. Essential for IT professionals, beginners in networking, and tech enthusiasts wanting practical knowledge.",
    "price": 100,
    "types": "resume",
    "courseName": "Computer Networks 101",
    "stars": 4.1,
    "numberOfReview": 80
  },
  {
    "_id": "6734dd300bd9e9b2f89185ec",
    "image": "https://picsum.photos/200/300?random=7",
    "title": "Android App Development",
    "description": "Create your own Android applications from scratch. Learn Java and Kotlin programming, Android Studio setup, UI/UX design for mobile, database management with SQLite, and advanced topics like notifications, sensors, and publishing apps to the Google Play Store. The course focuses on practical projects to equip you with skills to build Android apps.",
    "price": 220,
    "types": "resume",
    "courseName": "Android Development",
    "stars": 4.6,
    "numberOfReview": 110
  },
  {
    "_id": "6734dd300bd9e9b2f89185ed",
    "image": "https://picsum.photos/200/300?random=8",
    "title": "Ethical Hacking Fundamentals",
    "description": "Learn how to protect systems by understanding hacking strategies. This course covers reconnaissance, scanning, gaining access, maintaining access, and clearing tracks. You'll explore network security, web security, penetration testing, and cyber laws. Practice using ethical hacking tools to secure systems, making you an asset in cybersecurity and IT security fields.",
    "price": 250,
    "types": "book",
    "courseName": "Cybersecurity Basics",
    "stars": 4.9,
    "numberOfReview": 135
  }
];

const generateRatingStars = (stars) => {
  const fullStars = Math.floor(stars);
  const halfStar = stars % 1 !== 0; // Check if there is a half star
  let starDisplay = '★'.repeat(fullStars);
  if (halfStar) {
    starDisplay += '☆'; // You can change this to a half-star emoji if available or another symbol
  }
  return starDisplay.padEnd(5, '☆'); // Ensures there are always 5 stars (full or empty)
};

const Home = ({navigation}) => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('Resume');

  const renderItem = ({item}) => {

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Detail', {item})}>
        <Image source={{ uri: item.image }} style={ styles.image } />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.courseName}>{item.courseName}</Text>
        <Text style={styles.price}>Rp. {item.price}</Text>
        <Text style={styles.rating}>Rating: {generateRatingStars(item.stars)} ({item.stars})</Text>
        <Text>{item.numberOfReview} reviews</Text>
      </TouchableOpacity>
    );
  };

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
        <TouchableOpacity onPress={() => setActiveTab('Resume')}>
          <Text style={activeTab === 'Resume' ? styles.activeTab : styles.inactiveTab}>
            Resume
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Books')}>
          <Text style={activeTab === 'Books' ? styles.activeTab : styles.inactiveTab}>
            Books
          </Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
        {activeTab === 'Resume' && (
          <FlatList
            data={data.filter(item => item.types === 'resume')} // Corrected to match the 'types' field
            renderItem={renderItem}
            keyExtractor={item => item._id}
            numColumns={2}
            contentContainerStyle={styles.content}
          />
        )}
        {activeTab === 'Books' && (
          <FlatList
            data={data.filter(item => item.types === 'book')} // Corrected to match the 'types' field
            renderItem={renderItem}
            keyExtractor={item => item._id}
            numColumns={2}
            contentContainerStyle={styles.content}
          />
        )}

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
                  <Text style={[styles.footerButtonText]}>Shop</Text>
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
      color: '#000',
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
      width: 150,
      height: 150,
      borderRadius: 8,
      marginBottom: 8,
    },
    title: {
      color: '#000000',
      fontWeight: 'bold',
      textAlign: 'left',
      padding: 8,
      fontSize: 14,
    },
    courseName: {
      fontSize: 12,
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
