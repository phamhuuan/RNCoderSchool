/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Item({type, total, backgroundColor}) {
	return (
		<View
			style={{
				marginHorizontal: 4,
				flex: 1,
				backgroundColor,
				borderRadius: 8,
				justifyContent: 'center',
			}}>
			<Text style={styles.type}>{type}</Text>
			<Text style={styles.total}>${total}.00</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	type: {color: '#ffffff', marginLeft: 8, fontSize: 14},
	total: {color: '#ffffff', marginLeft: 8, fontSize: 16},
});
