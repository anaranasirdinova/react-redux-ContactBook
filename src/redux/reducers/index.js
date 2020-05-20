import { combineReducers } from 'redux';

import AppReducer from './app-reducer';

const rootReducer = combineReducers({ appReducer: AppReducer });

export default rootReducer;