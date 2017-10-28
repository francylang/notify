import coreValueData from '../utils/coreValueData.js';

const plusOneCoreValue = (state = coreValueData, action) => {
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
