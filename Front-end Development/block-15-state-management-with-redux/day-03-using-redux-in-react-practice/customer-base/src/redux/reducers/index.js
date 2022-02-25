import { combineReducers } from 'redux';
import { registerReducer } from './reducer';

const rootReducer = combineReducers({ registerReducer });

export default rootReducer;
