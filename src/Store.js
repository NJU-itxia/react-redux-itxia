import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { routerReducer } from "react-router-redux";

import resetEnhancer from './enhancer/reset';


const originalReducers = {
  routing: routerReducer
};

const reducer = combineReducers(originalReducers);

const win = window;

const middleware = [];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(require('redux-immutable-state-invariant').default());
};

const storeEnhancers = compose(
  resetEnhancer,
  applyMiddleware(...middleware),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
)

const initialState = {};

const store = createStore(reducer, initialState, storeEnhancers);
store._reducers = originalReducers;
export default store;