import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { syncHistoryWithStore } from "react-router-redux";

import App from './pages/App'
import store from "./Store";

const createElement = (Component, props) => {
  return (
    <Provider store={store}>
      <Component {...props}/>
    </Provider>
  )
}

const getHomePage = (nextState, callback) => {
	require.ensure([], function(require) {
		callback(null, require('./pages/Home').default);
	}, 'home');
};

const getNotFoundPage = (nextState, callback) => {
	require.ensure([], function(require) {
		callback(null, require('./pages/NotFound').default);
	}, '404');
};

const history = syncHistoryWithStore(browserHistory, store);

const Routes = () => (
  <Router history={history} createElement={createElement}>
		<Route path="/" component={App}>
			<IndexRoute getComponent={getHomePage}/>
			<Route path="home" getComponent={getHomePage}/>
			<Route path="*" getComponent={getNotFoundPage}/>
		</Route>
  </Router>
)

export default Routes;