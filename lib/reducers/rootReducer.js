import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import classRoomReducer from './ClassroomReducer';
import characterReducer from './CharacterReducer';
import coreValueCounter from './studentReducer';

const rootReducer = combineReducers({
  classroom: classRoomReducer,
  character: characterReducer,
  coreValueCounter: coreValueCounter
});

export default rootReducer;
