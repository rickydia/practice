import React from 'react';
import { Modal, Text, View } from 'react-native';
import { Button } from './Button';
import { CardSection } from './CardSection';

const Confirm = (props) => {
	const { containerStyle, textStyle, cardSectionStyle } = styles;

	return (
		<Modal
			transparent
			visible={props.visible}
			animationType='slide'
			onRequestClose={() => {}}
		>
			<View style={containerStyle}>
				<CardSection style={cardSectionStyle}>
					<Text style={textStyle}>
						{props.children}
					</Text>
				</CardSection>
				<CardSection>
					<Button onPress={props.onAccept}>
						Yes
					</Button>
					<Button onPress={props.onDecline}>
						No
					</Button>
				</CardSection>
			</View>
		</Modal>
	);
};

const styles = {
	cardSectionStyle: {
		justifyContent: 'center'
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	}
};

export { Confirm };

