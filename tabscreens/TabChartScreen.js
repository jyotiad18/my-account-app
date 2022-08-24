import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React,  { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TestScreen from '../screens/TestScreen';
import MonthlyChart from '../components/MonthlyChart';

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
              component={MonthlyChart}
          />
          <Tab.Screen
              name='Category'
              component={MonthlyChart}
          />                    
      </Tab.Navigator>
    </ScrollView>    
  )
}

export default TabChartScreen;