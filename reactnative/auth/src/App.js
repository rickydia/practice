import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBNaNAHVvT-YcgsLyVRcgxfXxmnL9iCCvM',
			authDomain: 'auth-b12c2.firebaseapp.com',
			databaseURL: 'https://auth-b12c2.firebaseio.com',
			projectId: 'auth-b12c2',
			storageBucket: 'auth-b12c2.appspot.com',
			messagingSenderId: '989685663223'
		});
	}

	render() {
		return (
			<View>
				<Header headerText='Authentication'/>
				<LoginForm />
			</View>
		);
	}
}

export default App;
