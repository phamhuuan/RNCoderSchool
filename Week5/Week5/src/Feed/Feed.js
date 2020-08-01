import React, {useState, useEffect, useCallback} from 'react';
import {
	View,
	SafeAreaView,
	StyleSheet,
	ActivityIndicator,
	FlatList,
	RefreshControl,
} from 'react-native';
import Axios from 'axios';
import Item from './Item';

const filterForUniqueArticles = (array) => {
	return array.filter(
		(item, index) =>
			array.findIndex(
				(item2) => JSON.stringify(item2) === JSON.stringify(item),
			) === index,
	);
};

export default function Feed() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);

	const getNews = useCallback((currentPage, currentData) => {
		const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=abcaea57d4554c0fbc5f903521646862&page=${currentPage}`;
		Axios.get(url)
			.then((response) => {
				console.log(response);
				if (response.data.status === 'ok') {
					currentData.length === 0
						? setData(response.data.articles)
						: setData([...currentData, ...response.data.articles]);
					setPage(currentPage);
					setTotal(response.data.totalResults);
					setLoading(false);
				}
			})
			.catch((error) => {
				setLoading(false);
			});
	}, []);
	useEffect(() => {
		getNews(1, []);
		return () => {};
	}, [getNews]);

	const loadMore = () => {
		console.warn(total, page);
		if (20 * page < total) {
			getNews(page + 1, data);
		}
	};

	const onRefresh = () => {
		getNews(1);
	};

	return (
		<SafeAreaView style={styles.container}>
			{loading ? (
				<View style={styles.loading}>
					<ActivityIndicator color={'#fa6767'} size={'large'} />
				</View>
			) : (
				<FlatList
					data={filterForUniqueArticles(data)}
					keyExtractor={() => Math.random().toString(36).substr(0, 9)}
					renderItem={({item}) => <Item item={item} />}
					onEndReachedThreshold={0.05}
					removeClippedSubviews={true}
					onEndReached={loadMore}
					refreshControl={<RefreshControl onRefresh={onRefresh} />}
					ListFooterComponent={
						<ActivityIndicator size="large" loading={loading} />
					}
				/>
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {flex: 1},
	loading: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
