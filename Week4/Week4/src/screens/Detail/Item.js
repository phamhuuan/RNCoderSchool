import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';

export default function Item({item}) {
	const route = useRoute();
	return (
		<View style={styles.itemView}>
			<View style={[styles.iconView, {backgroundColor: route.params.color}]}>
				<Image source={route.params.image} style={styles.icon} />
			</View>
			<View style={styles.textView}>
				<Text>
					You bought {item.production_name} for ${item.spend_money}
				</Text>
				<Text style={styles.date}>{item.date_time}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	itemView: {
		height: 100,
		marginHorizontal: 18,
		marginTop: 16,
		elevation: 1,
		borderRadius: 16,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},
	icon: {height: 32, width: 32},
	iconView: {
		height: 60,
		width: 60,
		borderRadius: 30,
		marginLeft: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textView: {flex: 1, marginHorizontal: 10},
	date: {color: '#a6b1c0', fontSize: 12, marginTop: 8},
});
