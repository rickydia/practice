/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Import shit
import React, { Component } from 'react';
import { StyleSheet, Text, View }	from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Component
const App = () => {
	return(
		<View style={{ paddingBottom: 64 }}>
			{/* passing in prop 'headerText'*/ }
			<Header headerText={'Albums'} />

			<AlbumList />
		</View>
	);
};

// Export it
export default App;

