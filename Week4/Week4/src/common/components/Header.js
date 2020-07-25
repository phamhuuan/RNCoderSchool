import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Header({
	leftIcon,
	onPressLeftIcon,
	title,
	rightIcon,
	onPressRightIcon,
}) {
	return (
		<View style={styles.header}>
			<TouchableOpacity
				disabled={!leftIcon}
				style={styles.iconContainer}
				onPress={onPressLeftIcon}>
				{!!leftIcon && <Image source={leftIcon} style={styles.icon} />}
			</TouchableOpacity>
			<Text style={styles.headerTitle}>{title}</Text>
			<TouchableOpacity
				disabled={!rightIcon}
				style={styles.iconContainer}
				onPress={onPressRightIcon}>
				{!!rightIcon && <Image source={rightIcon} style={styles.icon} />}
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {flex: 1},
	header: {
		height: 60,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	icon: {height: 24, width: 24},
	iconContainer: {
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerTitle: {fontSize: 20},
});
