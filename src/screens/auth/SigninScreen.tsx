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
import {object, string} from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

interface SigninForm {
  email: string;
  password: string;
}

let userSchema = object({
  email: string().required('Email is required').email('Email is not valid'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
}).required();

const SigninScreen = ({}) => {
  const {control, handleSubmit} = useForm<SigninForm>({
    resolver: yupResolver(userSchema),
  });
  const navigation = useNavigation();

  const signinForm = (formData: SigninForm) => {
    console.log(formData);
    navigation.navigate('MainBottomNavigation');
  };

  return (
    <AppSafeView>
      <View style={styles.container}>
        <Image style={{width: WIDTH, height: 150}} source={IMAGES.appLogo} />

        <AppTextInputController
          control={control}
          name={'email'}
          placeholder={'Email'}
          rules={{required: 'Email is required'}}
          keyboardType={'email-address'}
        />
        <AppTextInputController
          control={control}
          name={'password'}
          placeholder={'Password'}
          rules={{required: 'Password is required'}}
          secureTextEntry={true}
        />
        <AppText>SigninScreen</AppText>
        <AppButton title={'Login'} onPress={handleSubmit(signinForm)} />
        <AppButton
          backgroundColor={AppColors.white}
          title={'Signup'}
          onPress={() => navigation.navigate('SignupScreen')}
        />
      </View>
    </AppSafeView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', paddingHorizontal: s(12)},
});
