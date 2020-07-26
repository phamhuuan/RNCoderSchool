import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ToDoActiveContainer from '../containers/ToDoActiveContainer';
import ToDoDoneContainer from '../containers/ToDoDoneContainer';
import ToDoAllContainer from '../containers/ToDoAllContainer';

const Tab = createBottomTabNavigator();

export default function MainTabNavigation() {
	return (
		<Tab.Navigator
			screenOptions={({route}) => ({
				tabBarIcon: ({color, focused}) => {
					switch (route.name) {
						case 'Complete':
							return (
								<MaterialCommunityIcons
									name="check-all"
									size={24}
									color={color}
								/>
							);
						case 'All':
							return (
								<Ionicons
									name={focused ? 'md-add-circle' : 'md-add-circle-outline'}
									size={24}
									color={color}
								/>
							);
						case 'Active':
							return <FontAwesome name="th-list" size={24} color={color} />;
					}
				},
			})}
			tabBarOptions={{
				activeTintColor: '#ee1b22',
				inactiveTintColor: '#757575',
				labelStyle: {
					fontSize: 12,
				},
			}}
			initialRouteName="All">
			<Tab.Screen name={'Complete'} component={ToDoDoneContainer} />
			<Tab.Screen name={'All'} component={ToDoAllContainer} />
			<Tab.Screen name={'Active'} component={ToDoActiveContainer} />
		</Tab.Navigator>
	);
}
