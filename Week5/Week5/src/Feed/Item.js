import React from 'react';
import {Card, Button, Icon} from 'react-native-elements';
import {Text, View, StyleSheet, Linking} from 'react-native';
import moment from 'moment';

export default function Item({item}) {
	const onPress = (url) => {
		Linking.canOpenURL(url).then((supported) => {
			if (supported) {
				Linking.openURL(url);
			} else {
				console.log(`Don't know how to open URL: ${url}`);
			}
		});
	};

	return (
		<Card title={item.title} image={{uri: item.urlToImage}}>
			<View style={styles.row}>
				<Text style={styles.label}>Source</Text>
				<Text style={styles.info}>{item.source.name}</Text>
			</View>
			<Text style={{marginBottom: 10}}>{item.content}</Text>
			<View style={styles.row}>
				<Text style={styles.label}>Published</Text>
				<Text style={styles.info}>
					{moment(item.publishedAt).format('LLL')}
				</Text>
			</View>
			<Button
				onPress={() => onPress(item.url)}
				icon={<Icon />}
				title="Read more"
				backgroundColor="#03A9F4"
			/>
		</Card>
	);
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
	},
	label: {
		fontSize: 16,
		color: 'black',
		marginRight: 10,
		fontWeight: 'bold',
	},
	info: {
		fontSize: 16,
		color: 'grey',
	},
});
