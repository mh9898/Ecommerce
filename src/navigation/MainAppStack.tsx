import {createStaticNavigation} from '@react-navigation/native';
import {AuthStack} from './AuthNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainBottomNavigation} from './MainBottomNavigation';
import CheckoutScreen from '../screens/cart/CheckoutScreen';
import MyOrdersScreen from '../screens/profile/MyOrdersScreen';

const Stack = createNativeStackNavigator();

export const MainAppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen
        name="MainBottomNavigation"
        component={MainBottomNavigation}
      />
      <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{headerShown: true, title: 'My Orders'}}
      />
    </Stack.Navigator>
  );
};
