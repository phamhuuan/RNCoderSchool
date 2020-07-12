import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {
	View,
	Image,
	Text,
	TouchableOpacity,
	StyleSheet,
	Alert,
	FlatList,
} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
const pic1 = require('./assets/pic1.png');
const pic2 = require('./assets/pic2.jpg');
const pic3 = require('./assets/pic3.jpg');
const pic4 = require('./assets/pic4.jpg');
const pic5 = require('./assets/pic5.jpg');
const imgData = [
	{id: 1, imgSource: pic1},
	{id: 2, imgSource: pic2},
	{id: 3, imgSource: pic3},
	{id: 4, imgSource: pic4},
	{id: 5, imgSource: pic5},
];

function Item({source}) {
	const [ratio, setRatio] = useState(1);
	useEffect(() => {
		const image = Image.resolveAssetSource(source);
		setRatio(image.height / image.width);
	}, [source]);
	return (
		<Image
			source={source}
			style={[styles.feedImage, {height: 150 * ratio}]}
			resizeMode={'contain'}
		/>
	);
}
export default function App() {
	return (
		<View style={styles.container}>
			{/*StatusBar*/}
			<View style={styles.statusBarView}>
				<Ionicons name={'arrow-back-outline'} style={styles.statusBarIcon} />
				<Foundation name={'indent-more'} style={styles.statusBarIcon} />
			</View>

			{/*AVT*/}
			<View style={styles.infoView}>
				<Image source={pic1} style={styles.avatar} />
				<View>
					<Text style={styles.userName}>Huu An</Text>
					<Text style={styles.speciality}>Developer</Text>
					<View style={styles.numberView}>
						<TouchableOpacity
							style={styles.followTextView}
							onPress={() => {
								Alert.alert('follow');
							}}>
							<Text style={styles.followText}>Follow</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.sendTextView}
							onPress={() => {
								Alert.alert('send');
							}}>
							<Ionicons name={'send-sharp'} style={styles.sendText} />
						</TouchableOpacity>
					</View>
				</View>
			</View>

			{/*CountFollow*/}
			<View style={styles.listCountsView}>
				<View style={styles.countView}>
					<Text style={styles.numberCount}>210</Text>
					<Text style={styles.textCount}>Photos</Text>
				</View>
				<View style={styles.countView}>
					<Text style={styles.numberCount}>15K</Text>
					<Text style={styles.textCount}>Followers</Text>
				</View>
				<View style={styles.countView}>
					<Text style={styles.numberCount}>605</Text>
					<Text style={styles.textCount}>Following</Text>
				</View>
			</View>
			{/*Picture*/}
			<FlatList
				style={styles.listImagesView}
				data={imgData}
				renderItem={({item}) => <Item source={item.imgSource} />}
				numColumns={2}
				keyExtractor={item => item.id}
			/>
			<View style={styles.bottomControlBar}>
				<View style={styles.listBottomBarIconView}>
					<Entypo name={'sound-mix'} style={styles.bottomBarIcon} />
					<Ionicons name={'add-circle-outline'} style={styles.bottomBarIcon} />
					<Feather name={'user'} style={styles.bottomBarIcon} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {flex: 1},
	infoView: {
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 30,
	},
	avatar: {width: 100, height: 100, borderRadius: 50},
	feedImage: {width: 150},
	statusBarView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 30,
		marginTop: 10,
	},
	statusBarIcon: {fontSize: 30, color: 'gray'},
	userName: {fontSize: 30, fontWeight: 'bold'},
	speciality: {color: 'gray'},
	numberView: {
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	followTextView: {
		backgroundColor: 'rgb(71,113,246)',
		width: 90,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
	},
	followText: {fontSize: 15, color: '#FFF'},
	sendTextView: {
		backgroundColor: 'rgb(120,213,250)',
		width: 45,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
	},
	listCountsView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 30,
		marginTop: 20,
	},
	sendText: {color: '#FFF', fontSize: 15},
	countView: {alignItems: 'center'},
	numberCount: {fontSize: 20, fontWeight: 'bold'},
	textCount: {color: 'gray'},
	listImagesView: {marginHorizontal: 30, marginTop: 20},
	bottomControlBar: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
	},
	listBottomBarIconView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: 200,
	},
	bottomBarIcon: {fontSize: 25, color: 'gray'},
});
