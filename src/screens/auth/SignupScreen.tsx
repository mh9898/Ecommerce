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

const SignupScreen = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const navigation = useNavigation();
  return (
    <AppSafeView>
      <View style={styles.container}>
        <Image style={{width: WIDTH, height: 150}} source={IMAGES.appLogo} />

        <AppTextInput
          value={email}
          onChangeText={setUserName}
          placeholder={'User name'}
        />

        <AppTextInput
          value={email}
          onChangeText={setEmail}
          placeholder={'Email'}
        />
        <AppTextInput
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder={'Password'}
          // secureTextEntry={true}
        />
        <AppText>SignupScreen</AppText>
        <AppButton
          title={'Create a new account'}
          onPress={() => {
            console.log('pressed on Login');
          }}
        />
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
