import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {AppColors} from '../../styles/colors';
import {IS_ANDROID} from '../../constants/constants';

interface AppSafeViewProps {
  children: ReactNode;
  style?: ViewStyle;
}

const AppSafeView = ({children, style}: AppSafeViewProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default AppSafeView;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: AppColors.white,
    flex: 1,
    paddingTop: IS_ANDROID ? StatusBar.currentHeight || 0 : 0,
  },
  container: {
    flex: 1,
  },
});
