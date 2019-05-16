import { combineReducers } from 'redux';
import testReducer from './testReducer';
import testReducer2 from './testReducer2';
import messageReducer from './messageReducer';
import chatReducer from './chatReducer';


export default combineReducers({
    testReducer,
    testReducer2,
    messageReducer,
    chatReducer,
});