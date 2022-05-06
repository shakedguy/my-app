import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const App = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		const foo = async () => {
			const response = await axios.get('http://localhost:3000/user');
			setData(response.data);
		};
		foo();
	}, []);
	console.log(data);
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style='auto' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;
