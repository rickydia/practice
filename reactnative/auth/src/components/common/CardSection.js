import React from 'react';
import { Text, View } from 'react-native';

const CardSection = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#ffffff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#dddddd',
		position: 'relative'
	}
};

export { CardSection };

