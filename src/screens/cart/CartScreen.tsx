import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EmptyCart from './EmptyCart';
import {AppColors} from '../../styles/colors';
import CartCard from '../../components/cart/CartCard';
import TotalView from '../../components/cart/TotalView';
import {products} from '../../data/products';
import AppButton from '../../components/buttons/AppButton';
import {SHIPPING, TAX, WIDTH} from '../../constants/constants';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {
  deleteProductFromCart,
  decreaseQuantityItem,
  addItemToCart,
} from '../../store/reducers/cartSlice';

const CartScreen = () => {
  const navigation = useNavigation();
  const {items} = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch();
  const itemsPrice = items.reduce((acc, item) => acc + item.sum, 0);
  const orderTotal = itemsPrice + TAX + SHIPPING;

  return (
    <>
      {items.length > 0 ? (
        <View style={styles.container}>
          {/* <EmptyCart /> */}
          {/* <CartCard /> */}

          <FlatList
            data={items}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <CartCard
                  {...item}
                  price={item.sum}
                  quantity={item.quantity}
                  decreaseQuantityItem={() =>
                    dispatch(decreaseQuantityItem(item))
                  }
                  increaseQuantityItem={() => dispatch(addItemToCart(item))}
                  deleteItem={() => dispatch(deleteProductFromCart(item))}
                />
              );
            }}
            showsVerticalScrollIndicator={false}
          />
          <TotalView itemsPrice={itemsPrice} orderTotal={orderTotal} />
          <AppButton
            style={{width: WIDTH - 40, alignSelf: 'center'}}
            title={'Continue'}
            onPress={() => {
              navigation.navigate('CheckoutScreen');
            }}
          />
        </View>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
});
