import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  View,
} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {s} from 'react-native-size-matters';
import {AppColors} from '../../styles/colors';

interface AppTextProps extends TextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  variant?: 'bold' | 'medium';
}

const AppText: FC<AppTextProps> = ({
  children,
  style,
  variant = 'medium',
  ...rest
}) => {
  return (
    <Text {...rest} style={[styles[variant], style]}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  bold: {
    fontSize: s(18),
    color: AppColors.primary,
  },
  medium: {
    fontSize: s(16),
    color: AppColors.primary,
  },
});
