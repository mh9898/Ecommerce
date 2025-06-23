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

const SigninScreen = ({}) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <AppSafeView>
      <View style={styles.container}>
        <Image style={{width: WIDTH, height: 150}} source={IMAGES.appLogo} />

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
        <AppText>SigninScreen</AppText>
        <AppButton
          title={'Login'}
          onPress={() => navigation.navigate('MainBottomNavigation')}
        />
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
