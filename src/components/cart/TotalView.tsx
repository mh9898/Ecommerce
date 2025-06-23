import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../texts/AppText';
import {SHIPPING, TAX} from '../../constants/constants';

interface TotalViewProps {
  itemsPrice: number;
  orderTotal: number;
}

const TotalView = ({itemsPrice, orderTotal}: TotalViewProps) => {
  return (
    <View style={{margin: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <AppText>Items Price:</AppText>
        <AppText>$ {itemsPrice}</AppText>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <AppText>Taxes:</AppText>
        <AppText>${TAX}</AppText>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <AppText>Shipping Fee:</AppText>
        <AppText>${SHIPPING}</AppText>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <AppText>Order Total:</AppText>
        <AppText>$ {orderTotal}</AppText>
      </View>
    </View>
  );
};

export default TotalView;

const styles = StyleSheet.create({});
