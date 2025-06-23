import {
  KeyboardType,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import React from 'react';
import {s, vs} from 'react-native-size-matters';
import {AppColors} from '../../styles/colors';

interface AppTextInputProps {
  value: string | undefined;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardType;
  style?: TextStyle;
}

const AppTextInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  style,
}: AppTextInputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.input, style]}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  input: {
    height: vs(35),
    borderRadius: s(10),
    borderWidth: 1,
    borderColor: AppColors.darkOrange,
    paddingHorizontal: s(15),
    fontSize: s(13),
    backgroundColor: AppColors.white,
    width: '100%',
    marginBottom: vs(10),
  },
});
