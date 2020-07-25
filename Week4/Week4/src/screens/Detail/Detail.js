import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import Header from '../../common/components/Header';
import Item from './Item';
const data = require('../../data/data.json');

export default function Detail() {
	const route = useRoute();
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Header
				leftIcon={require('../../../assets/Icons/back.png')}
				onPressLeftIcon={() => {
					navigation.goBack();
				}}
				title={route.params.title}
			/>
			<FlatList
				data={data.detail.filter((x) => x.category === route.params.category)}
				keyExtractor={(item) => item.id}
				renderItem={({item}) => <Item item={item} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {flex: 1, backgroundColor: '#f2f4f7'},
});
