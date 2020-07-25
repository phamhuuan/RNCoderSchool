import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabNavigation from './MainTabNavigation';
import Detail from '../screens/Detail/Detail';

const Stack = createStackNavigator();

export default function MainStackNavigation() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={'MainTabNavigation'}
				component={MainTabNavigation}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name={'Detail'}
				component={Detail}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
}
