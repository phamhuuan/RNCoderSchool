import React, {createContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigation from './src/navigation/MainStackNavigation';
import {TODOS} from './src/data/ToDoList';

export const ToDoListContext = createContext();

export default function App() {
	const [toDoList, setToDoList] = useState(TODOS);
	return (
		<ToDoListContext.Provider value={{toDoList, setToDoList}}>
			<NavigationContainer>
				<MainStackNavigation />
			</NavigationContainer>
		</ToDoListContext.Provider>
	);
}
