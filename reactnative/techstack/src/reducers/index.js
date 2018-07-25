import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// a function from redux that combines all the diff reducers into a single reducer
export default combineReducers({
	libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
