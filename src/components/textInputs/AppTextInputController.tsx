import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import AppTextInput from './AppTextInput';
import {AppColors} from '../../styles/colors';
import AppText from '../texts/AppText';
import {s} from 'react-native-size-matters';

interface AppTextInputControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: object;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address';
}

const AppTextInputController = <T extends FieldValues>({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry,
  keyboardType,
}: AppTextInputControllerProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value}, fieldState: {error}}) => (
        <>
          <AppTextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={error && styles.error}
          />
          {error && <AppText style={styles.errorText}>{error.message}</AppText>}
        </>
      )}
    />
  );
};

export default AppTextInputController;

const styles = StyleSheet.create({
  error: {
    borderColor: AppColors.darkRed,
  },
  errorText: {
    color: AppColors.darkRed,
    fontSize: s(13),
    marginBottom: s(20),
    marginLeft: s(10),
    marginTop: s(-10),
  },
});
