import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {ToDoListContext} from '../../../App';
import ToDoItem from './ToDoItem';

export default function ToDo({status}) {
	const {toDoList, setToDoList} = useContext(ToDoListContext);
	const list = toDoList.filter(
		(item) => status === 'All' || item.status === status,
	);
	const updateList = (id) => {
		const index = toDoList.findIndex((item) => item.id === id);
		if (index > -1) {
			let newList = toDoList;
			let newItem = newList[index];
			newItem.status = newItem.status === 'Done' ? 'Active' : 'Done';
			newList[index] = newItem;
			setToDoList([...newList]);
		}
	};
	const deleteItem = (id) => {
		const index = toDoList.findIndex((item) => item.id === id);
		if (index > -1) {
			const newList = toDoList;
			newList.splice(index, 1);
			setToDoList([...newList]);
		}
	};
	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				{status} Todos ({list.length})
			</Text>
			{list.length > 0 ? (
				<FlatList
					data={list}
					renderItem={({item, index}) => (
						<ToDoItem
							updateList={updateList}
							deleteItem={deleteItem}
							item={item}
							index={index}
						/>
					)}
					keyExtractor={(item) => item.id + 'key'}
				/>
			) : (
				<Text style={styles.prompt} numberOfLines={2}>
					Nothing to do
				</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 20,
		borderRadius: 5,
		paddingTop: 50,
		marginHorizontal: 15,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		paddingVertical: 10,
	},
	prompt: {
		fontSize: 20,
		textAlign: 'center',
	},
});
