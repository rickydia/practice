import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends React.Component {
	componentWillMount() {
		this.props.employeesFetch();
	}

	renderRow(employee) {
		return <ListItem employee={employee.item} />;
	}

	render() {
		console.log(this.props);

		return (
			<FlatList
				data={this.props.employees}
				renderItem={this.renderRow}
				keyExtractor={employee => employee.uid}
			/>
		);
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid}; // returns something like { shift: 'Sunday', name: 'Jane', uid: '1a2b3c' }
	});

	return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

