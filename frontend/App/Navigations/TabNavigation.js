import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home.js';
import Appointment from '../Screens/Appointment.js';
import Profile from '../Screens/Profile.js';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import Colors from '../../assets/Shared/Colors.js';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    width: Dimensions.get('screen').width * 1,
                    display: 'flex',
                    justifyContent: 'space-around',
                    height: 60,
                    backgroundColor: Colors.white,
                    elevation: 2
                },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Appointment"
                component={Appointment}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="calendar" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="user" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
