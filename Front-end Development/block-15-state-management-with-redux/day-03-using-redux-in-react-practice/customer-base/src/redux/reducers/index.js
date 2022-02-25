import { combineReducers } from 'redux';
import { registerReducer, loginReducer } from './reducer';

const rootReducer = combineReducers({ registerReducer, loginReducer });

export default rootReducer;
