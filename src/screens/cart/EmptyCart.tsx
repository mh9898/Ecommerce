import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../components/texts/AppText';
import {WIDTH} from '../../constants/constants';
import {IMAGES} from '../../constants/images-paths';
import {s} from 'react-native-size-matters';
import {AppColors} from '../../styles/colors';
import AppButton from '../../components/buttons/AppButton';
import {useNavigation} from '@react-navigation/native';

const EmptyCart = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 60,
      }}>
      <Image
        style={{width: WIDTH / 2, height: 150 / 2, margin: 20}}
        source={IMAGES.appLogo}
      />
      <AppText variant="bold">Your Cart is Empty</AppText>
      <AppText
        numberOfLines={2}
        style={{color: AppColors.medGray, margin: 8, textAlign: 'center'}}>
        Browse Products to find something you like
      </AppText>
      <AppButton
        style={{width: '80%'}}
        title={'Start Shopping'}
        onPress={() => navigation.navigate('HomeScreen')}></AppButton>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({});
