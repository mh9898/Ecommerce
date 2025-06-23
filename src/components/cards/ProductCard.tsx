import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import AppText from '../texts/AppText';
import AppButton from '../buttons/AppButton';
import {AppColors} from '../../styles/colors';
import {s, vs} from 'react-native-size-matters';
import {WIDTH} from '../../constants/constants';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  onBuyProductPress: () => void;
}

const ProductCard = ({
  title,
  price,
  image,
  onBuyProductPress,
}: ProductCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: image}} style={styles.image} resizeMode="contain" />
      <AppText style={styles.title}>{title}</AppText>
      <AppText variant="bold">{price} $</AppText>
      <AppButton
        // style={{borderColor: AppColors.darkPurple}}
        // styleTitle={{color: AppColors.white}}
        title={'Buy'}
        onPress={onBuyProductPress}
      />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: AppColors.white,
    borderRadius: s(12),
    padding: s(16),
    width: WIDTH / 2 - s(20),
    shadowColor: AppColors.black,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    margin: s(10),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cartIcon: {
    backgroundColor: AppColors.black,
    borderRadius: 999,
    padding: s(6),
    position: 'absolute',
    top: s(10),
    left: s(10),
    zIndex: 10,
  },
  image: {
    width: s(100),
    height: s(100),
    marginVertical: vs(10),
  },
  title: {
    textAlign: 'center',
    marginVertical: 4,
  },
});
