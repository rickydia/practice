import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// class based components used when you wanna fetch data or when you have large component that requires helper methods
class AlbumList extends Component {
	state = { albums: [] };

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data }));
	};

	renderAlbums() {
		return this.state.albums.map(album =>
			<AlbumDetail key={album.title} album={album}/>
		);
	};

	// only requirement of class based components is that you define a render method that returns some type of jsx
	render() {
		console.log(this.state);

		return (
			<View>
				{this.renderAlbums()}
			</View>
		);
	}
}

export default AlbumList;
