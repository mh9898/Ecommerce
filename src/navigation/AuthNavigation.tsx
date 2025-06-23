import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SigninScreen from '../screens/auth/SigninScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import {FC} from 'react';

const Stack = createNativeStackNavigator();

interface AuthStackParamsNavigation {
  SigninScreen: undefined;
  SignupScreen: undefined;
}

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SigninScreen" component={SigninScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
};
