import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Divider } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../ReduxActions/authActions'; // Import your logout action creator


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  userPhoto: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 36,
    borderRadius: 50,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tabsContainer: {
    marginTop: 32,
    width: '100%',
  },
  tab: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#E6E5DB',
  },
  tabText: {
    fontSize: 16,
    color: 'black',
    flex: 1, // This makes the text take up all available space
  },
  icon: {
    marginRight: 16,
    color: 'black',
  },
});

function ProfileScreen({ navigation }) {
    const dispatch = useDispatch();

    // Use useSelector to access the Redux store state and retrieve the user information
    const user = useSelector((state) => state.auth.user);

    const handleLogout = () => {
      // Dispatch the logout action
      dispatch(logout());
    };


  return (
    <View style={styles.container}>
      <Image
        source={require('./images/doge.png')}
        style={styles.userPhoto}
      />
      <Text style={styles.userName}>{user?.username}</Text>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate('ChangePassword')}
        >
        <Ionicons name="key-outline" size={24} style={styles.icon} />
          <Text style={styles.tabText}>Change Password</Text>
          <Ionicons name="chevron-forward" size={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate('Notifications')}
        >
        <Ionicons name="notifications-outline" size={24} style={styles.icon} />
          <Text style={styles.tabText}>Notifications</Text>
          <Ionicons name="chevron-forward" size={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate('ChangeSettings')}
        >
        <Ionicons name="settings-outline" size={24} style={styles.icon} />
          <Text style={styles.tabText}>Change Settings</Text>
          <Ionicons name="chevron-forward" size={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={handleLogout}        
          >
        <Ionicons name="log-out-outline" size={24} style={styles.icon} />

          <Text style={styles.tabText}>Logout</Text>
          <Ionicons name="chevron-forward" size={24} style={styles.icon} />
        </TouchableOpacity>

      </View>
    </View>
  );
}

export default ProfileScreen;
