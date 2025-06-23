import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import AppText from '../texts/AppText';
import {AppColors} from '../../styles/colors';
import {s} from 'react-native-size-matters';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  backgroundColor?: string;
  styleTitle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

const AppButton = ({
  title,
  onPress,
  style,
  backgroundColor = AppColors.white,
  styleTitle,
  disabled = false,
}: AppButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      //   activeOpacity={1}
      style={[
        styles.container,
        {backgroundColor: disabled ? AppColors.lightGray : backgroundColor},
        style,
      ]}>
      <AppText style={[styles.buttonText, styleTitle]} variant="medium">
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    marginTop: s(10),
    padding: s(10),
    borderRadius: s(10),
    borderWidth: 1,
    borderColor: AppColors.lightBlue,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: AppColors.lightBlue,
  },
});
