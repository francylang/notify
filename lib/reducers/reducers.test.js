import characterReducer from './CoreValueReducer.js';
import coreValueData from '../utils/coreValueData.js'

describe('Reducers', () => {

  it.skip('characterReducer: ADD_CORE_VALUE', () => {
    const expectedReducer = {coreValueData}

    expect(characterReducer(coreValueData, {})).toEqual(expectedReducer)

    // expect(characterReducer(4, { type: 'ADD_CORE_VALUE' })).toEqual(4)

    // expect(characterReducer(1, { type: 'ADD_CORE_VALUE' })).toEqual(0)

  })
})
