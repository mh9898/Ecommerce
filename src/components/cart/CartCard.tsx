import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../texts/AppText';
import AppButton from '../buttons/AppButton';
import {AppColors} from '../../styles/colors';

type CartCardProps = {
  id: number;
  price: number;
  title: string;
  imageURL: string;
  quantity: number;
  increaseQuantityItem: () => void;
  decreaseQuantityItem: () => void;
  deleteItem: () => void;
};

const CartCard = ({
  id,
  title,
  price,
  imageURL,
  quantity,
  increaseQuantityItem,
  decreaseQuantityItem,
  deleteItem,
}: CartCardProps) => {
  //   const [quantityItem, setQuantityItem] = useState(1);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingTop: 20,
        }}>
        {/* Image */}
        <Image
          source={{
            uri: imageURL,
          }}
          style={{height: 100, width: 100}}
        />
        {/* Name | Price | Amount */}
        <View style={{flexDirection: 'column'}}>
          <AppText>{title}</AppText>
          <AppText>${price}</AppText>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              borderColor: AppColors.black,
              borderWidth: 1,
              borderRadius: 20,
            }}>
            <AppText onPress={increaseQuantityItem}>+</AppText>

            <AppText>{quantity}</AppText>
            <AppText onPress={decreaseQuantityItem}>-</AppText>
          </View>
        </View>

        {/* Delete button */}
        <AppButton
          style={{width: '20%', borderColor: AppColors.white}}
          styleTitle={{color: AppColors.lightRed}}
          title={'Delete'}
          onPress={deleteItem}
        />
      </View>
    </>
  );
};

export default CartCard;

const styles = StyleSheet.create({});

// MOCK Item
// const tempCartCard = {
//   id: 33,
//   price: 100,
//   title: 'iPhone 15',
//   imageURL:
//     'https://resource.logitech.com/content/dam/logitech/en/products/webcams/c310/gallery/c310-gallery-1.png',
// };
