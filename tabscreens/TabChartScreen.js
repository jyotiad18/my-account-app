import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React,  { useState } from 'react'
import { CogIcon } from 'react-native-heroicons/outline';
import Currency from 'react-currency-formatter';
import RowView from '../components/RowView';
import Item from '../components/Item';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TestScreen from '../screens/TestScreen';

const Tab = createMaterialTopTabNavigator();

const TabChartScreen = () => {  
  return (
    <ScrollView>      
      <Tab.Navigator
         screenOptions={{            
            tabBarLabelStyle: { fontSize: 12, color: 'white', fontWeight: 'bold'},
            tabBarStyle: { backgroundColor: '#308276'},
            activeTintColor:'white',
            inactiveTintColor:'#D3D3D3',
            indicatorStyle: {
                backgroundColor: 'red',
            },                   
          }}>
          <Tab.Screen
              name='Monthly'
              component={TestScreen}
          />
          <Tab.Screen
              name='Category'
              component={TestScreen}
          />                    
      </Tab.Navigator>
    </ScrollView>    
  )
}

export default TabChartScreen;