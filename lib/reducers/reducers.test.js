import characterReducer from './CoreValueReducer.js';
import coreValueData from '../utils/coreValueData.js';
import initialState from '../utils/studentContactData.js';
import classroomReducer from './ClassroomReducer.js';


describe('corevalue reducer', () => {

  it('should have a default state', () => {

    expect(characterReducer(undefined, {})).toEqual(coreValueData);
  });

  it('should add a core value when given info', () => {
    const action = {
      type: 'ADD_CORE_VALUE',
      coreValue: {
        'fun': 0}
    };

    expect(characterReducer(undefined, action)).toEqual(action.coreValue);
  });


  it.skip('should add a new set of core values', () => {

    const action = { type: 'NEW_SET_OF_CORE_VALUES', coreValue: mock };
    const expected = {coreValueData};

    expect(characterReducer(action)).toEqual(expected);

  });

  it.skip('should increment core values', () => {
    const action = { type: 'PLUS_ONE_CORE_VALUE', 'Integrity': 1 };
    const expected = { };

    expect(characterReducer(undefined, action)).toEqual(expected);
  });
});

describe('classroom reducer', () => {

  it('should have a default state', () => {
    expect(classroomReducer(undefined, {})).toEqual(initialState);
  });

  it('should add a student when given info', () => {
    const action = {
      type: 'CLASSROOM_ADD_STUDENT',
      student: {id: 23, name: 'Francy Lang', parentContact: 'Pam Lang', phone: '502-682-8031'}
    };

    expect(classroomReducer(undefined, action)).toEqual(action.student);
  });

  it('should delete a student', () => {
    const action = { type: 'CLASSROOM_DELETE  '}
  });
});
