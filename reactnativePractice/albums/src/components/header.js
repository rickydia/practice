// import libraries
import React from 'react';
import { Text, View } from 'react-native';

// make component and passing in props
const Header = (props) => {
	// same as 'using vector = std::vector'
	const { textStyle , viewStyle } = styles;

	return (
		// set appropriate things their respective style, also using props.headerText
		// as variable passed in by App.js so that the header component is reusable
		<View style = {viewStyle}>
			<Text style={textStyle}> {props.headerText} </Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		// up and down
		justifyContent: 'center',
		// left and right
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

// make component available to other parts of the app
export default Header;

