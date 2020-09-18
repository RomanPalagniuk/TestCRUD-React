import {createStore, applyMiddleware, compose} from 'redux';
import allRedusers from './redusers';
import thunk from 'redux-thunk';
import { getHotDogs } from './actions/index.js';

const initialState = {};


const store = createStore(allRedusers, initialState, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) );
store.dispatch(getHotDogs());
export default store;