import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import classRoomReducer from './ClassroomReducer';
import characterReducer from './CharacterReducer';
import plusOneCoreValue from './StudentReducer';

const rootReducer = combineReducers({
  classroom: classRoomReducer,
  character: characterReducer,
  plusOneCoreValue: plusOneCoreValue
});

export default rootReducer;
