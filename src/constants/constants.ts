import {Dimensions, Platform, StatusBar} from 'react-native';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

export const STATUS_BAR_HEIGHT =
  Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const WIDTH = Dimensions.get('window').width;
export const HIGHT = Dimensions.get('window').height;

export const TAX = 10;
export const SHIPPING = 15;
