import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppButton from './AppButton';
import {AppColors} from '../../styles/colors';

interface ProfileSectionButtonProps {
  title: string;
  onPress: () => void;
}

const ProfileSectionButton = ({title, onPress}: ProfileSectionButtonProps) => {
  return (
    <AppButton
      style={{borderColor: AppColors.white, alignItems: 'flex-start'}}
      styleTitle={{color: AppColors.black}}
      title={title}
      onPress={onPress}
    />
  );
};

export default ProfileSectionButton;

const styles = StyleSheet.create({});
