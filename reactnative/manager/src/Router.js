import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key='root' hideNavBar>
				<Scene key='auth'>
					<Scene key='login' component={LoginForm} title='Please Log In' initial />
				</Scene>
				<Scene key='main' >
					<Scene
						initial
						key='employeeList'
						component={EmployeeList}
						title='Employees'
						rightTitle='Add'
						onRight={() => Actions.employeeCreate()}
					/>
					<Scene key='employeeCreate' component={EmployeeCreate} title='Create Employee' />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;

