import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import classReducer from './ClassroomReducer';
import characterReducer from './CoreValueReducer';

const rootReducer = combineReducers({
  classroom: classReducer,
  coreValue: characterReducer,
  // authentication: AuthenticationReducer,
});

export default rootReducer;
