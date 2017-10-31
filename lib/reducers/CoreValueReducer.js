import coreValueData from '../utils/coreValueData.js'

const characterReducer = (state = coreValueData, action) => {
  console.log(action.newValue);
  switch (action.type) {
    case 'ADD_CORE_VALUE':
    const newState = Object.assign({ state }, action.newValue)
      return newState;
    case 'PLUS_ONE_CORE_VALUE':
    state[action.studentId][action.coreValue] ++;
      return state;
  default:
    return state;
  }
};

export default characterReducer;
