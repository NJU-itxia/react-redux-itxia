import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { syncHistoryWithStore } from "react-router-redux";

import App from './pages/App'
import UserApp from "./pages/UserApp";
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

const getNowPage = (nextState, callback) => {
	require.ensure([], function(require) {
		callback(null, require('./pages/Now').default);
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
		<Route path="/form" component={UserApp}>
			<Route path="now" getComponent={getNowPage}/>
		</Route>
		<Route path="/" component={App}>
			<IndexRoute getComponent={getHomePage}/>
			<Route path="home" getComponent={getHomePage}/>
		</Route>
		<Route path="/*" getComponent={getNotFoundPage}/>
  </Router>
)

export default Routes;