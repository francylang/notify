import characterReducer from './CoreValueReducer.js';
import coreValueData from '../utils/coreValueData.js';
import { classReducer, initialState } from './ClassroomReducer.js';


describe('corevalue reducer', () => {

  it('should have a default state', () => {
    expect(characterReducer(undefined, {})).toEqual(coreValueData)
  })

  it('should add a core value when given info', () => {
    const action = { type: 'ADD_CORE_VALUE', 'fun': 0 } ;
    const expected = {'fun': 0, 'type': 'ADD_CORE_VALUE'}

    expect((undefined, action)).toEqual(expected)
  })

  it('should add a new set of core values', () => {
    const action = { type: 'NEW_SET_OF_CORE_VALUES',
      Integrity: 0,
      Grit: 0,
      Perseverance: 0,
      Responsbility: 0,
      Respect: 0
     } ;
    const expected = {
      Integrity: 0,
      Grit: 0,
      Perseverance: 0,
      Responsbility: 0,
      Respect: 0,
     'type': 'NEW_SET_OF_CORE_VALUES'}
  })

  it('should increment core values', () => {
    const action = { type: 'PLUS_ONE_CORE_VALUE', 'Integrity': 1 }
    const expected = { 'Integrity': 1, 'type': 'PLUS_ONE_CORE_VALUE'}

    expect((undefined, action)).toEqual(expected)

  })
})



describe('classroom reducer', () => {

  it.skip('should have a default state', () => {
    expect(classReducer()).toEqual(initialState)
  })
})
