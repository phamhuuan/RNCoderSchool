/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Item from './Item';
const data = require('../../data/data.json');

export default function ListOfAccount() {
	const returnItem = () => {
		let dataView = [];
		for (const key in data.account_information) {
			if (key !== 'total' && data.account_information.hasOwnProperty(key)) {
				dataView.push(
					<Item
						key={data.account_information[key].type}
						type={key}
						backgroundColor={data.account_information[key].color}
						total={data.account_information[key].total}
					/>,
				);
			}
		}
		return dataView.map((x) => x);
	};
	return (
		<View>
			<Text style={styles.title}>List of Account</Text>
			<View style={styles.list}>{returnItem()}</View>
			<View style={styles.total}>
				<Text style={{color: '#ff958f', fontSize: 40}}>
					${data.account_information.total}.00
				</Text>
				<Text style={{color: '#a6b1c0', fontSize: 20}}>Total Balance</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {fontSize: 18, marginLeft: 12, marginTop: 20, marginBottom: 20},
	list: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		height: 65,
		paddingHorizontal: 8,
	},
	total: {
		height: 150,
		marginHorizontal: 12,
		marginTop: 20,
		backgroundColor: '#ffffff',
		borderRadius: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
