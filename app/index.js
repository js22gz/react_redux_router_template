/*
This is the entry point for the app! From here we merely import our routes definitions,
then use React and React-DOM to render it.
*/

import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import store from './store';
import routes from './routes';
import actions from './actions';

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes}/>
	</Provider>,
	document.getElementById('root')
);
