import React, { Component } from 'react';
import { Text, View } from 'react-native';

// class based components used when you wanna fetch data or when you have large component that requires helper methods
class AlbumList extends Component {
	componentWillMount() {
		console.log('did this work');
	};

	// only requirement of class based components is that you define a render method that returns some type of jsx
	render() {
		return (
			<View>
				<Text>Album List</Text>
			</View>
		);
	}
}

export default AlbumList;
