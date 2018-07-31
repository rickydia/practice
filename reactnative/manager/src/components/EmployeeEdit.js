import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Button, Card, CardSection, Confirm } from './common';

class EmployeeEdit extends React.Component {
	state = { showModal: false };

	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;

		// employee.uid comes from ListItem.js which passes in the employee
		// it gets to ListItem from EmployeeList's mapStateToProps
		//	gets state.employees from reducers/index.js which has key of 'employees' and value 'EmployeeReducer'
		//	the EmployeeReducer returns the action.payload it receives
		//	it receives the payload from the employeesFetch action from EmployeeActions.js
		//	this action gets all the user's employees from firebase
		//	this action gets called in the componentWillMount method within EmployeeList
		this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
	}

	onTextPress() {
		const { phone, shift } = this.props;

		Communications.text(phone, `Your upcoming shift is on ${shift}`);
	}

	onAccept() {
		const { uid } = this.props.employee;

		this.props.employeeDelete({ uid });
	}

	onDecline() {
		this.setState({ showModal: false });
	}

	render() {
		return (
			<Card>
				<EmployeeForm />

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Save Changes
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={this.onTextPress.bind(this)}>
						Text Schedule
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
						Fire Employee
					</Button>
				</CardSection>

				<Confirm
					visible={this.state.showModal}
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
				>
					Are you sure you want to fire {this.props.name}?
				</Confirm>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	// state.employeeForm bc reducers/index.js has key of employeeForm and value of
	// EmployeeFormReducer, which has the state of name, phone, and shift
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, {
	employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);

