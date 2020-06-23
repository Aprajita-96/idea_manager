import { combineReducers } from 'redux';
import listReducer from './listIdeaReducer';

export const ideaApp = combineReducers({
	listReducer,
})
