import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React,  { useState } from 'react'
import { MenuIcon, CashIcon, DocumentReportIcon, HomeIcon, PresentationChartBarIcon, TableIcon, ArrowSmDownIcon, ArrowSmUpIcon  } from 'react-native-heroicons/outline';
import Currency from 'react-currency-formatter';
import Chart from '../components/Chart';
import TouchableOpacityText from '../components/TouchableOpacityText';
import Item from '../components/Item';
import SideBar from '../components/SideBar';
import Icons from '../components/Icons';
import TabHomeScreen from '../tabscreens/TabHomeScreen';
import TestScreen from './TestScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
     <Tab.Navigator initialRouteName="TabHome"
        screenOptions={{
           tabBarShowLabel: false,
           tabBarStyle: { position: 'absolute', bottom: 10, left: 10, right: 10, borderRadius: 15, height: 70, elevation: 0, 
            backgroundColor: '#308276'},
        }}>
        <Tab.Screen name="TabHome" 
            component={TabHomeScreen}
            options={{ headerShown: false, tabBarIcon: () => ( 
                <HomeIcon size={30} color="white" /> 
              ) }} 
        />
        <Tab.Screen name="Chart" 
            component={TestScreen}
            options={{  tabBarIcon: () => ( <PresentationChartBarIcon size={30}  color="white"/> ) }} 
        />
        <Tab.Screen name="Credit" 
            component={TestScreen}
            options={{  tabBarIcon: () => ( <ArrowSmDownIcon size={30} color="white" /> ) }} 
        />
        <Tab.Screen name="Expens" 
            component={TestScreen}
            options={{tabBarIcon: () => ( <ArrowSmUpIcon size={30} color="white" /> ) }} 
        />
        <Tab.Screen name="Catgory" 
            component={TestScreen}
            options={{ tabBarIcon: () => ( <TableIcon size={30} color="white" /> ) }} 
        />
     </Tab.Navigator>
  )
}

export default HomeScreen;