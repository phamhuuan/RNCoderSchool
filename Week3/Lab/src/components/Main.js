import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import ConversionTypeButton from './ConversionTypeButton';
import FormattedCurrency from './FormattedCurrency';
import {styleMain} from '../styles/StyleMain';
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function Main() {
  const [currentCurrencyValue, setCurrencyValue] = useState(0);
  const [convertedCurrencyValue, setConvertedCurrencyValue] = useState(0);
  const [toCurrency, setToCurrency] = useState('usd');
  const [fromCurrency, setFromCurrency] = useState('vnd');
  const convertCurrency = () => {
    let value;
    if (fromCurrency === 'vnd') {
      value = currentCurrencyValue / 23000;
    } else {
      value = 23000 * currentCurrencyValue;
    }
    setConvertedCurrencyValue(value);
  };
  const setConversionCurrencies = (from, to) => {
    setToCurrency(to);
    setFromCurrency(from);
  };
  useEffect(convertCurrency);
  return (
    <View style={styleMain.ctn}>
      <View style={styleMain.ctn}>
        <Text style={styleMain.txtHeader}>
          Please enter the value of the currency you want to convert
        </Text>
        <TextInput
          style={styleMain.textInput}
          keyboardType={'number-pad'}
          autoFocus={true}
          textAlign={'center'}
          placeholder={'100,000,000 VND'}
          selectionColor={'red'}
          onChangeText={(valueUser) => setCurrencyValue(valueUser)}
        />
      </View>

      <ConversionTypeButton
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        setConversionCurrencies={setConversionCurrencies}
        from={'vnd'}
        to={'usd'}
      />

      <ConversionTypeButton
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        setConversionCurrencies={setConversionCurrencies}
        from={'usd'}
        to={'vnd'}
      />

      <Text>Current currency:</Text>
      <FormattedCurrency type={fromCurrency} value={currentCurrencyValue} />
      <Text>Conversion currency:</Text>
      <FormattedCurrency type={toCurrency} value={convertedCurrencyValue} />
    </View>
  );
}
