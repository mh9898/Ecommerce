import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from './src/components/texts/AppText';
import AppSafeView from './src/components/ views/AppSafeView';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import AppButton from './src/components/buttons/AppButton';
import AppTextInput from './src/components/textInputs/AppTextInput';
import SigninScreen from './src/screens/auth/SigninScreen';
import SignupScreen from './src/screens/auth/SignupScreen';
import {AuthStack} from './src/navigation/AuthNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainAppStack} from './src/navigation/MainAppStack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <FlashMessage position={'top'} />
            {/* <AppSafeView> */}
            <MainAppStack />
            {/* <AuthStack /> */}
            {/* <SignupScreen /> */}
            {/* <AppTextInput
          value={''}
          onChangeText={(text: string) => {
            throw new Error('Function not implemented.');
          }}
          placeholder={'placeholder'}
        />
        <AppText variant="bold">Hello world</AppText>
        <AppText
          onPress={() => {
            showMessage({
              message: 'Hello World',
              // color: 'red',
              type: 'success',
            });
          }}
          variant="medium">
          Hello world
        </AppText>
        <AppButton
          title="Button"
          onPress={() => {
            showMessage({message: 'Button Pressed'});
          }}
        /> */}
            {/* </AppSafeView> */}
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
