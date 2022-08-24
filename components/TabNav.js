import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { HomeIcon, PresentationChartBarIcon, TableIcon, ArrowSmDownIcon, ArrowSmUpIcon  } from 'react-native-heroicons/outline';
import TabHomeScreen from '../tabscreens/TabHomeScreen';
import TabChartScreen from '../tabscreens/TabChartScreen';
import TabCategoryScreen from '../tabscreens/TabCategoryScreen';
import TestScreen from '../screens/TestScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
     <Tab.Navigator initialRouteName="Catgory"
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
            component={TabChartScreen}
            options={{headerShown: false, tabBarIcon: () => ( <PresentationChartBarIcon size={30}  color="white"/> ) }} 
        />
        <Tab.Screen name="Credit" 
            component={TestScreen}
            options={{ headerShown: false, tabBarIcon: () => ( <ArrowSmDownIcon size={30} color="white" /> ) }} 
        />
        <Tab.Screen name="Expens" 
            component={TestScreen}
            options={{tabBarIcon: () => ( <ArrowSmUpIcon size={30} color="white" /> ) }} 
        />
        <Tab.Screen name="Catgory" 
            component={TabCategoryScreen}
            options={{ headerShown: false, tabBarIcon: () => ( <TableIcon size={30} color="white" /> ) }} 
        />
     </Tab.Navigator>
  )
}

export default TabNav;