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
      newValue: {'fun': 0}
    };

    expect(characterReducer(undefined, action.type)).toEqual(coreValueData, action.newValue);
  });


  it('should add a new set of core values', () => {

    const action = {
      type: 'NEW_SET_OF_CORE_VALUES',
      newSet: {
        'Integrity': 0,
        'Grit': 0,
        'Perseverance': 0,
        'Respect': 0,
        'Responsibility':0
      }
    };

    expect(characterReducer(undefined, action.type)).toEqual(coreValueData, action.newSet);

  });

  it('should increment core values', () => {
    const action = {
      type: 'PLUS_ONE_CORE_VALUE',
      coreValue: { 21: {
        'Integrity': 0,
        'Grit': 1,
        'Perseverance': 0,
        'Respect': 1,
        'Responsibility':0
      }
     }
    };

    expect(characterReducer(undefined, action.type)).toEqual(coreValueData, action.coreValue);
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

    expect(classroomReducer(undefined, action.type)).toEqual(initialState, action.student);
  });

  it('should delete a student', () => {
    const action = {
      type: 'CLASSROOM_DELETE_STUDENT',
      student: {'id': 0, 'name': 'Nick Teets', 'parentContact': 'Roy Gutierrez', 'phone': '502-905-2136'}
    };

    expect(classroomReducer(undefined, action.type)).toEqual(initialState, action.student);
  });
});
