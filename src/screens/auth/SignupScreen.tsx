import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '../../constants/images-paths';
import AppTextInput from '../../components/textInputs/AppTextInput';
import AppText from '../../components/texts/AppText';
import AppButton from '../../components/buttons/AppButton';
import {s} from 'react-native-size-matters';
import {AppColors} from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import AppSafeView from '../../components/ views/AppSafeView';
import {WIDTH} from '../../constants/constants';
import AppTextInputController from '../../components/textInputs/AppTextInputController';
import {useForm} from 'react-hook-form';
import {object, string} from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

interface SignupForm {
  userName: string;
  email: string;
  password: string;
}

let userSchema = object({
  userName: string().required('User name is required'),
  email: string().required('Email is required').email('Email is not valid'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
}).required();

const SignupScreen = () => {
  const {control, handleSubmit} = useForm<SignupForm>({
    resolver: yupResolver(userSchema),
  });

  const navigation = useNavigation<any>();

  const signupForm = (formData: SignupForm) => {
    console.log(formData);
    navigation.navigate('MainBottomNavigation');
  };

  return (
    <AppSafeView>
      <View style={styles.container}>
        <Image style={{width: WIDTH, height: 150}} source={IMAGES.appLogo} />

        <AppTextInputController
          control={control}
          name={'userName'}
          placeholder={'User name'}
          rules={{required: 'User name is required'}}
        />
        <AppTextInputController
          control={control}
          name={'email'}
          placeholder={'Email'}
          rules={{required: 'Email is required'}}
        />
        <AppTextInputController
          control={control}
          name={'password'}
          placeholder={'Password'}
          rules={{required: 'Password is required'}}
          secureTextEntry={true}
        />
        <AppText>SignupScreen</AppText>
        <AppButton title={'Sign Up'} onPress={handleSubmit(signupForm)} />
        <AppButton
          backgroundColor={AppColors.white}
          title={'Go To to Sign In'}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </AppSafeView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', paddingHorizontal: s(12)},
});
