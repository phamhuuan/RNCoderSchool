import React, {useState} from 'react';
import {
	View,
	ScrollView,
	Alert,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
} from 'react-native';
import Header from '../../common/components/Header';
import ListOfAccount from './ListOfAccount';
import LastRecordsOverview from './LastRecordsOverview';
import Modal from 'react-native-modalbox';

export default function Dashboard() {
	const [visibleModal, setVisibleModal] = useState(false);
	return (
		<View style={styles.container}>
			<Header
				title={'Dashboard'}
				leftIcon={require('../../../assets/Icons/Group256.png')}
				onPressLeftIcon={() => {
					Alert.alert('', 'You have clicked menu button');
				}}
				rightIcon={require('../../../assets/Icons/Group255.png')}
				onPressRightIcon={() => {
					setVisibleModal(true);
				}}
			/>
			<ScrollView>
				<ListOfAccount />
				<LastRecordsOverview />
			</ScrollView>
			<Modal
				isOpen={visibleModal}
				coverScreen={true}
				backdropPressToClose={false}
				swipeToClose={false}
				position={'bottom'}
				style={styles.modal}>
				<View style={styles.notificationView}>
					<Text>Notifications</Text>
					<TouchableOpacity
						style={styles.closeButton}
						onPress={() => {
							setVisibleModal(false);
						}}>
						<Image
							source={require('../../../assets/Icons/close.png')}
							style={styles.closeIcon}
						/>
					</TouchableOpacity>
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {flex: 1, backgroundColor: '#f2f4f7'},
	modal: {
		margin: 0,
		height: '100%',
		width: '100%',
		backgroundColor: 'transparent',
		justifyContent: 'flex-end',
		alignItems: 'center',
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
	},
	notificationView: {
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},
	closeButton: {
		height: 40,
		width: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	closeIcon: {height: 30, width: 30},
});
