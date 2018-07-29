import React from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate, employeeReset } from '../actions';
import { Button, Card, CardSection } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends React.Component {
	componentWillMount() {
		this.props.employeeReset();
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;

		this.props.employeeCreate({ name, phone, shift: shift || 'Sunday' });
	}

	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	// .employeeForm bc in index.js of /reducers, the EmployeeFormReducer has key of employeeForm
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, {
	employeeUpdate, employeeCreate, employeeReset
})(EmployeeCreate);

