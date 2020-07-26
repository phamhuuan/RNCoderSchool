/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default function ToDoItem({item, index, updateList, deleteItem}) {
	return (
		<View style={styles.container}>
			<View style={styles.id}>
				<Text style={styles.idText}>{index + 1}</Text>
			</View>
			<TouchableOpacity
				onPress={() => {
					updateList(item.id);
				}}
				onLongPress={() => {
					Alert.alert('Alert', 'Do you want to delete', [
						{text: 'Cancel', onPress: () => {}},
						{
							text: 'Confirm',
							onPress: () => {
								deleteItem(item.id);
							},
						},
					]);
				}}
				style={[
					styles.body,
					{backgroundColor: item.status === 'Done' ? '#218838' : '#ffc107'},
				]}>
				<Text style={styles.bodyText} numberOfLines={2}>
					{item.body}
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%',
		marginBottom: 10,
	},
	id: {
		width: '15%',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 20,
		backgroundColor: '#ee1b22',
	},
	idText: {
		fontSize: 17,
		color: 'white',
	},
	body: {
		width: '85%',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 20,
	},
	bodyText: {
		fontSize: 17,
		textAlign: 'center',
		color: 'white',
	},
});
