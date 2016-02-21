/*
This is the "sitemap" of our app!
*/

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {Wrapper} from './pages/wrapper';
import Home from './pages/home';

export default (
	<Route path="/" component={Wrapper} >
     	<IndexRoute component={Home}/>
    </Route>
);
/**
    	<Route path='/timer' component={Timer}/>
**/
