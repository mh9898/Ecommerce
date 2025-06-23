import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppSafeView from '../../components/ views/AppSafeView';
import AppTextInput from '../../components/textInputs/AppTextInput';
import AppButton from '../../components/buttons/AppButton';
import {s} from 'react-native-size-matters';

const CheckoutScreen = () => {
  return (
    <AppSafeView style={{paddingHorizontal: s(20), paddingTop: s(20)}}>
      <View>
        <AppTextInput
          value={undefined}
          onChangeText={() => {}}
          placeholder={'Full Name'}
        />
        <AppTextInput
          value={undefined}
          onChangeText={() => {}}
          placeholder={'Phone Number'}
        />
        <AppTextInput
          value={undefined}
          onChangeText={() => {}}
          placeholder={'Details Address'}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <AppButton title="Confirm" onPress={() => {}} />
      </View>
    </AppSafeView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({});
