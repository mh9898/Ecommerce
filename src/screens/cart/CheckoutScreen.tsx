import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppSafeView from '../../components/ views/AppSafeView';
import AppTextInput from '../../components/textInputs/AppTextInput';
import AppButton from '../../components/buttons/AppButton';
import {s} from 'react-native-size-matters';
import AppTextInputController from '../../components/textInputs/AppTextInputController';
import {useForm} from 'react-hook-form';
import {object, string, number, date} from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

let userSchema = object({
  fullName: string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters'),
  phoneNumber: string()
    .required('Phone Number is required')
    .matches(/^[0-9]+$/, 'Phone Number must contain only numbers')
    .min(10, 'Phone Number must be at least 10 characters'),
  address: string()
    .required('Address is required')
    .min(3, 'Address must be at least 3 characters'),
}).required();

const CheckoutScreen = () => {
  const {control, handleSubmit} = useForm({
    resolver: yupResolver(userSchema),
  });

  const saveOrder = (formData: any) => {
    console.log(formData);
  };

  return (
    <AppSafeView style={{paddingHorizontal: s(20), paddingTop: s(20)}}>
      <View>
        <AppTextInputController
          control={control}
          name={'fullName'}
          rules={{required: 'Full Name is required'}}
          placeholder={'Full Name'}
        />
        <AppTextInputController
          control={control}
          name={'phoneNumber'}
          rules={{required: 'Phone Number is required'}}
          placeholder={'Phone Number'}
          keyboardType={'numeric'}
        />
        <AppTextInputController
          control={control}
          name={'address'}
          rules={{required: 'Address is required'}}
          placeholder={'Address'}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <AppButton title="Confirm" onPress={handleSubmit(saveOrder)} />
      </View>
    </AppSafeView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({});
