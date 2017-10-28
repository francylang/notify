import dummyCharater from '../utils/dummyCharacter.js';

const plusOneCoreValue = (state = 0, action) => {
  switch (action.type) {
  case 'PLUS_ONE_CORE_VALUE':
    const addOne = action.coreValue
    const coreValues = Object.values(state)
    return state + 1
  default:
    return state;
  }
};

export default plusOneCoreValue;
