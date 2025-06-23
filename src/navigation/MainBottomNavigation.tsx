import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import CartScreen from '../screens/cart/CartScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tap = createBottomTabNavigator();

export const MainBottomNavigation = () => {
  return (
    <Tap.Navigator>
      <Tap.Screen name="HomeScreen" component={HomeScreen} />
      <Tap.Screen name="CartScreen" component={CartScreen} />
      <Tap.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tap.Navigator>
  );
};
