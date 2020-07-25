/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function LastRecordsOverview() {
	const navigation = useNavigation();
	const returnItem = (title, subtitle, color1, color2, money, date, image) => {
		return (
			<View style={styles.itemContainer}>
				<View style={styles.itemSubcontainer}>
					<View style={styles.itemTitleView}>
						<Text style={styles.itemTitle}>{title}</Text>
						<Text style={styles.itemSubtitle}>{subtitle}</Text>
					</View>
					<View style={{flex: 1}} />
					<View style={styles.itemDateView}>
						<Text style={styles.itemDate}>{date}</Text>
						<Text style={[styles.itemMoney, {color: color2}]}>{money}</Text>
					</View>
				</View>
				<View style={[styles.iconView, {backgroundColor: color1}]}>
					<Image source={image} style={styles.icon} />
				</View>
			</View>
		);
	};
	return (
		<View>
			<Text style={styles.title}>Last Records Overview</Text>
			<View style={styles.list}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Detail', {
							category: 1,
							title: 'Groceries',
							color: '#fec180',
							image: require('../../../assets/Icons/Group253.png'),
						});
					}}>
					{returnItem(
						'Groceries',
						'Credit card',
						'#fec180',
						'#ff958f',
						'$250.00',
						'Today',
						require('../../../assets/Icons/Group253.png'),
					)}
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Detail', {
							category: 2,
							title: 'Clothes',
							color: '#efbad3',
							image: require('../../../assets/Icons/Path987.png'),
						});
					}}>
					{returnItem(
						'Clothes',
						'Credit card',
						'#efbad3',
						'#a254f1',
						'$100.00',
						'03/04/2018',
						require('../../../assets/Icons/Path987.png'),
					)}
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Detail', {
							category: 3,
							title: 'Rental',
							color: '#54bae6',
							image: require('../../../assets/Icons/Path986.png'),
						});
					}}>
					{returnItem(
						'Rental',
						'Cash',
						'#54bae6',
						'#51efde',
						'$500.00',
						'01/03/2018',
						require('../../../assets/Icons/Path986.png'),
					)}
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {fontSize: 18, marginLeft: 12, marginTop: 20, marginBottom: 20},
	itemTitleView: {marginLeft: 80, paddingTop: 15},
	itemTitle: {fontSize: 18, color: '#3a4759'},
	itemSubtitle: {fontSize: 14, color: '#a6b1c0'},
	itemDateView: {marginRight: 16, alignItems: 'flex-end', paddingTop: 15},
	itemDate: {fontSize: 12, color: '#a6b1c0'},
	itemMoney: {fontSize: 12},
	list: {
		paddingHorizontal: 12,
	},
	itemContainer: {
		height: 80,
		marginBottom: 16,
	},
	itemSubcontainer: {
		flexDirection: 'row',
		marginLeft: 16,
		borderRadius: 8,
		backgroundColor: '#ffffff',
		height: 80,
	},
	iconView: {
		width: 80,
		height: 66,
		backgroundColor: 'red',
		position: 'absolute',
		top: 7,
		elevation: 2,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
	icon: {
		width: 50,
		height: 50,
	},
});
