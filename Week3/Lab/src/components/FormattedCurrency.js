import React from 'react';
import {Text, StyleSheet} from 'react-native';

const FormattedCurrency = (props) => {
  const format = props.type === 'usd' ? 'us' : 'vn';
  const currency = props.type === 'usd' ? 'USD' : 'VND';
  const flag = props.type === 'usd' ? '🇺🇸' : '🇻🇳';
  const unit = props.type === 'usd' ? 'USD' : 'VND';

  const formatter = new Intl.NumberFormat(format, {
    currency,
    style: 'currency',
  });

  return (
    <Text style={styles.txtFormat}>
      {formatter.format(props.value)} {flag} {unit}
    </Text>
  );
};

const styles = StyleSheet.create({
  txtFormat: {fontSize: 30, color: 'green', fontWeight: 'bold'},
});

export default FormattedCurrency;
