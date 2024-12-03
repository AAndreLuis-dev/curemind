import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import ContentScreen from '../screens/Contentscreen';
import AnxietyBatePapo from '../screens/Anxietybatepapo';
import AdmListScreen from '../screens/Admlistscreen';
import AboutScreen from '../screens/Aboutscreen';
import { View, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') iconName = 'home-outline';
                    else if (route.name === 'ContentScreen') iconName = 'book-outline';
                    else if (route.name === 'Anxietybatepapo') iconName = 'chatbubbles-outline';
                    else if (route.name === 'AdmListScreen') iconName = 'list-outline';
                    else if (route.name === 'AboutScreen') iconName = 'information-circle-outline';
                    return <Ionicons name={iconName!} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#0047AB',
                tabBarInactiveTintColor: '#3A3A3A',
                tabBarStyle: styles.tabBar,
                tabBarLabelStyle: styles.tabLabel,
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ tabBarLabel: 'Início', headerShown: false }}
            />
            <Tab.Screen
                name="ContentScreen"
                component={ContentScreen}
                options={{ tabBarLabel: 'Conteúdo', headerShown: false }}
            />
            <Tab.Screen
                name="Anxietybatepapo"
                component={AnxietyBatePapo}
                options={{ tabBarLabel: 'Bate Papo', headerShown: false }}
            />
            <Tab.Screen
                name="AdmListScreen"
                component={AdmListScreen}
                options={{ tabBarLabel: 'Mensagens', headerShown: false }}
            />
            <Tab.Screen
                name="AboutScreen"
                component={AboutScreen}
                options={{ tabBarLabel: 'Comunidade', headerShown: false }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
        paddingVertical: 10,
        height: 70,
    },
    tabLabel: {
        fontSize: 12,
        marginBottom: 5,
    },
});
