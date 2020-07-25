import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard/Dashboard';
import Profile from '../screens/Profile/Profile';
import TabBar from '../common/components/TabBar';

const Tab = createBottomTabNavigator();

export default function MainTabNavigation() {
	return (
		<Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
			<Tab.Screen name={'Dashboard'} component={Dashboard} />
			<Tab.Screen name={'Profile'} component={Profile} />
		</Tab.Navigator>
	);
}
