import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../components/texts/AppText';
import {AppColors} from '../../styles/colors';

const MyOrdersScreen = () => {
  const orderData = [
    {
      id: 1,
      date: '2025-01-01',
      totalAmount: 120.5,
      totalPrice: '$150',
    },
    {
      id: 2,
      date: '2025-01-02',
      totalAmount: 75.0,
      totalPrice: '$90',
    },
    {
      id: 3,
      date: '2025-01-03',
      totalAmount: 200.25,
      totalPrice: '$250',
    },
  ];

  return (
    <View>
      <FlatList
        data={orderData}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1,
                marginHorizontal: 12,
                marginVertical: 4,
                padding: 8,
                backgroundColor: AppColors.white,
                borderRadius: 20,

                // iOS shadow
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.1,
                shadowRadius: 4,

                // Android shadow
                elevation: 4,
              }}>
              <AppText variant="bold">ORDER DETAILS:</AppText>
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: AppColors.black,
                  marginBottom: 8,
                }}
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <AppText>Total Price:{item.totalPrice}</AppText>
                <AppText style={{color: AppColors.darkRed}}>
                  ${item.totalAmount}
                </AppText>
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <AppText>{item.date}</AppText>
                <AppText style={{color: AppColors.darkRed}}>
                  {item.date}
                </AppText>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({});
