import React from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends React.Component {
	state = { email: '', password: '' };

	onButtonPress() {
		const { email, password } = this.state;
		firebase.auth().signInWithEmailAndPassword(email, password);
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						placeholder='example@gmail.com'
						label='Email'
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						placeholder='Password123!'
						label='password'
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Log in
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
