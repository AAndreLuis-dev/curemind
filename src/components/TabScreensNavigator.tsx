// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import HomeScreen from '../screens/Home';
// import ContentScreen from '../screens/Contentscreen';
// import AnxietyBatePapo from '../screens/Anxietybatepapo';
// import AdmListScreen from '../screens/Admlistscreen';
// import AboutScreen from '../screens/Aboutscreen';
//
// const Tab = createBottomTabNavigator();
//
// export default function TabScreensNavigator() {
//     return (
//         <Tab.Navigator
//             initialRouteName="Home"
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ color, size }) => {
//                     let iconName;
//                     switch (route.name) {
//                         case 'Home':
//                             iconName = 'home-outline';
//                             break;
//                         case 'Content':
//                             iconName = 'book-outline';
//                             break;
//                         case 'AnxietyChat':
//                             iconName = 'chatbubbles-outline';
//                             break;
//                         case 'AdminList':
//                             iconName = 'list-outline';
//                             break;
//                         case 'About':
//                             iconName = 'people-outline';
//                             break;
//                         default:
//                             iconName = 'help-outline';
//                     }
//                     return <Ionicons name={iconName} size={size} color={color} />;
//                 },
//                 tabBarActiveTintColor: '#0047AB',
//                 tabBarInactiveTintColor: 'gray',
//                 headerShown: false,
//             })}
//         >
//             <Tab.Screen name="Home" component={HomeScreen} />
//             <Tab.Screen name="Content" component={ContentScreen} />
//             <Tab.Screen name="AnxietyChat" component={AnxietyBatePapo} />
//             <Tab.Screen name="AdminList" component={AdmListScreen} />
//             <Tab.Screen name="About" component={AboutScreen} />
//         </Tab.Navigator>
//     );
// }
