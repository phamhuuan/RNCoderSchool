import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabNavigation from './MainTabNavigation';

const Stack = createStackNavigator();

export default function MainStackNavigation() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={'MainTabNavigation'}
				component={MainTabNavigation}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
}
