/*
This file defines the main Redux Store. It will be required by all 'smart' components in the app.
*/

import {createStore, combineReducers} from 'redux';
import initialState from './initialstate';
import messageReducer from './reducers/message';


let rootReducer = combineReducers({
	message: messageReducer,
});

export default createStore(rootReducer,initialState());
