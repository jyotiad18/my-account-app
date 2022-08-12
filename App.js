import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen  from './screens/LoadingScreen';
import HomeScreen  from './screens/HomeScreen';

const Stack = new createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>      
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            {/*<Stack.Screen name="Resturant" component={ResturantScreen}/>
            <Stack.Screen name="Basket" component={BasketScreen} options={{persentation: 'modal', headerShown: false}}/>
            <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} options={{persentation: 'fullScreenModal', headerShown: false}}/>
            <Stack.Screen name="Delivary" component={DeliveryScreen} options={{persentation: 'fullScreenModal', headerShown: false}}/>
           */}
          </Stack.Navigator>
        </TailwindProvider>
    </NavigationContainer>
  );
}