import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, CardSection, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBNaNAHVvT-YcgsLyVRcgxfXxmnL9iCCvM',
			authDomain: 'auth-b12c2.firebaseapp.com',
			databaseURL: 'https://auth-b12c2.firebaseio.com',
			projectId: 'auth-b12c2',
			storageBucket: 'auth-b12c2.appspot.com',
			messagingSenderId: '989685663223'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if(user){
				this.setState({ loggedIn: true });
			}
			else{
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch(this.state.loggedIn){
			case true:
				return (
					<CardSection>
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
					</CardSection>
				);
			case false:
				return <LoginForm />;
			default:
				return (
					<CardSection>
						<Spinner size='large' />
					</CardSection>
				);
		}
	}

	render() {
		return (
			<View>
				<Header headerText='Authentication'/>
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
