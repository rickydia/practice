import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: ''
};

export default (state=INITIAL_STATE, action) => {
	switch(action.type){
		case EMPLOYEE_UPDATE:
			// action.payload === { prop: 'name', value: 'Jane' }
			// the square brackets make it so that at run time, it'd get replaced by
			// either name or shift or anything it needs to be
			return { ...state, [action.payload.prop]: action.payload.value };

		case EMPLOYEE_CREATE:
			return INITIAL_STATE;
		default:
			return state;
	}
};
