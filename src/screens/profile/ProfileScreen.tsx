import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileSectionButton from '../../components/buttons/ProfileSectionButton';
import AppButton from '../../components/buttons/AppButton';
import AppText from '../../components/texts/AppText';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 20}}>
      <AppText>Hello Name</AppText>
      <View>
        <ProfileSectionButton
          title="MyOrders"
          onPress={() => navigation.navigate('MyOrdersScreen')}
        />
        <ProfileSectionButton title="Language" onPress={() => {}} />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 20}}>
        <AppButton title="Logout" onPress={() => {}} />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
