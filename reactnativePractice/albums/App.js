/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Import shit
import React, { Component } from 'react';
import { Text }	from 'react-native';
import Header from './src/components/header';

// Component
const App = () => {
	return(
		<Header headerText='Albums' />
	);
};

// Export it
export default App;

