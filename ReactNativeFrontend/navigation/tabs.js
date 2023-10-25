// import React from "react";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// // import Ionicons from "react-native-vector-icons/MaterialIcons";
// // import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

// // const myIcon1 = <Icon name="comments" size={30} color="#900" />; // Defaults to regular
// // const myIcon2 = <Icon name="comments" size={30} color="#900" solid />;
// // const myIcon3 = <Icon name="comments" size={30} color="#900" light />; // Only in FA5 Pro


// // Screens
// import HomeScreen from "../screens/HomeScreen.js";
// import DetailsScreen from "../screens/DetailScreen.js";
// import LoginScreen from "../screens/LoginScreen.js";
// import WatchlistScreen from "../screens/WatchlistScreen.js";

// // Screen Names
// const homeName = 'Home';

// const Tab = createBottomTabNavigator();


// function Tabs() {
//     return(
//         <Tab.Navigator
//             initialRouteName='Home'
//             screenOptions={({route}) => ({
//                 tabBarIcon: ({focused, color, size}) => {
//                     let iconName;
//                     let routeName = route.name;

//                     if (routeName == "Home") {
//                         iconName = focused ? 'home' : 'home'
//                     } else if (routeName == "Watchlist") {
//                         iconName = focused ? 'home' : 'home'
//                     } else if (routeName == "Details") {
//                         iconName = focused ? 'home' : 'home'
//                     } else if (routeName == "Login") {
//                         iconName = focused ? 'home' : 'home'
//                     }

//                     return <Ionicons name='home' size={size} color={color} />
//                 },

//                 tabBarActiveTintColor: 'grey', // Active tab text color
//                 tabBarInactiveTintColor: 'grey',  // Inactive tab text color
//                 tabBarLabel: () => null, // Remove tab labels
//                 tabBarStyle: {
//                   position: 'absolute',
//                 //   bottom: 15,
//                 //   left: 20,
//                 //   right: 20,
//                   elevation: 0,
//                   backgroundColor: '#ffffff',
//                 //   borderRadius: 15,
//                   height: 60,
//                 },
//                 labelStyle: {
//                   fontSize: 14,                   // Adjust the font size for tab labels
//                   fontWeight: 'bold',             // Adjust font weight
//                 },
//             })}
            

//         >
//             <Tab.Screen 
//                 name="Home" 
//                 component={HomeScreen} 
//             />
//             <Tab.Screen 
//                 name="Watchlist" 
//                 component={WatchlistScreen} 
//             />
//             <Tab.Screen 
//                 name="Details" 
//                 component={DetailsScreen} 
//             />
//             <Tab.Screen 
//                 name="Login" 
//                 component={LoginScreen} 
//             />
//         </Tab.Navigator>
//     )
// }
// export default Tabs;



import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


// Screens
import HomeScreen from "../screens/HomeScreen.js";
import PortfolioScreen from "../screens/PortfolioScreen.js";
import WatchlistScreen from "../screens/WatchlistScreen.js";
import NewsScreen from "../screens/NewsScreen.js";
import AuthStack from "../screens/AuthStack.js";


const Tab = createBottomTabNavigator();


function Tabs() {
    return(
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let routeName = route.name;

                    if (routeName == "Home") {
                        iconName = focused ? 'trending-up' : 'trending-up-outline'
                    } else if (routeName == "Watchlist") {
                        iconName = focused ? 'list' : 'list-outline'
                    } else if (routeName == "Portfolio") {
                        iconName = focused ? 'bar-chart' : 'bar-chart-outline'
                    } else if (routeName == "News") {
                        iconName = focused ? 'newspaper' : 'newspaper-outline'
                    }else if (routeName == "Profile") {
                        iconName = focused ? 'person' : 'person-outline'
                    }else if (routeName == "Register") {
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                }, 

                tabBarActiveTintColor: '#147EFB', // Active tab text color
                tabBarInactiveTintColor: 'grey',  // Inactive tab text color
                // tabBarLabel: () => null, // Remove tab labels
                tabBarStyle: {
                  position: 'absolute',
                //   bottom: 15,
                //   left: 20,
                //   right: 20,
                  elevation: 0,
                  backgroundColor: '#ffffff',
                //   borderRadius: 15,
                  height: 75,
                },
                labelStyle: {
                  fontSize: 14,                   // Adjust the font size for tab labels
                  fontWeight: 'bold',             // Adjust font weight
                },
            })}
            

        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
            />
            <Tab.Screen 
                name="Watchlist" 
                component={WatchlistScreen} 
            />
            <Tab.Screen 
                name="Portfolio" 
                component={PortfolioScreen} 
            />
            <Tab.Screen 
                name="News" 
                component={NewsScreen} 
            />
            <Tab.Screen 
                name="Profile" 
                component={AuthStack} 
                // to remove the headers
                options={{ headerShown: false }}

            />

        </Tab.Navigator>
    )
}
export default Tabs;