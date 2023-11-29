import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';
import { settingsReducer } from './settingsReducer';

export const rootReducer = combineReducers({
	todosState: todosReducer,
	settingsState: settingsReducer,
});
