import coreValueData from '../utils/coreValueData.js';

const characterReducer = (state = coreValueData, action) => {
  switch (action.type) {
  case 'ADD_CORE_VALUE':
    const studentKeys = Object.keys(state);
    let newState = {};
    studentKeys.forEach((key) => {
      newState[key] = Object.assign({}, state[key], {[action.newValue]: 0});
    });
    return newState;
  case 'NEW_SET_OF_CORE_VALUES':
    return Object.assign({}, state, {[action.id]: action.newSet});
  case 'PLUS_ONE_CORE_VALUE':
    const currentValues = state[action.studentId];
    const coreValueToUpdate = action.coreValue;
    const currentValue = currentValues[action.coreValue];
    const updatedStudent = Object.assign({}, currentValues, {[coreValueToUpdate]: currentValue + 1});
    return Object.assign({}, state, {[action.studentId]: updatedStudent} );
  // case 'SEND_SUMMARIES':
  //
  //   const reduced = action.student.reduce((acc, points) => {
  //     points + acc;
  //     return acc;
  //   }, 0);
  //
  //   return reduced;
  default:
    return state;
  }
};

export default characterReducer;
