import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductCard from '../../components/cards/ProductCard';
import {Product, products} from '../../data/products';
import AppText from '../../components/texts/AppText';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addItemToCart} from '../../store/reducers/cartSlice';

const HomeScreen = () => {
  const data: Product[] = products; // check empty list[]
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        contentContainerStyle={{}}
        numColumns={2}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ProductCard
            title={item.title}
            price={item.price}
            image={item.imageURL}
            onBuyProductPress={
              // () => navigation.navigate('CartScreen', item)
              () => dispatch(addItemToCart(item))
            }
          />
        )}
        ListEmptyComponent={<AppText>No products available</AppText>}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

{
  /* Mock Card */
}
{
  /* <ProductCard
        title={'iPhone 15'}
        price={4000}
        image={
          'https://www.istudiobyspvi.com/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__GBEN_e9c47876-bbad-489a-9260-e6c9864ed940.jpg?v=1718115290'
        }
        onPress={() => console.log('Product Card pressed')}
      /> */
}
