import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const ConversionTypeButton = ({
  to,
  from,
  toCurrency,
  fromCurrency,
  setConversionCurrencies,
}) => {
  const isSelectedConversionType = fromCurrency === from && toCurrency === to;
  const backgroundColor = isSelectedConversionType ? 'lightblue' : null;
  const conditionalButtonStyle = {backgroundColor};

  const fromFlag = from === 'usd' ? '🇺🇸' : '🇻🇳';
  const toFlag = to === 'usd' ? '🇺🇸' : '🇻🇳';
  const unitFrom = from === 'usd' ? 'USD' : 'VND';
  const unitTo = to === 'usd' ? 'USD' : 'VND';
  return (
    <TouchableOpacity
      style={[styles.button, conditionalButtonStyle]}
      onPress={() => setConversionCurrencies(from, to)}>
      <Text>
        {fromFlag} {unitFrom} to {toFlag} {unitTo}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 35,
    width: 200,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'lightblue',
    justifyContent: 'center',
  },
});

export default ConversionTypeButton;
