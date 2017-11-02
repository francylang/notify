import * as actions from './actions.js';


describe('actions', () => {
  it('should create an action to add a student', () => {
    const expectedAction = {
      type: 'CLASSROOM_ADD_STUDENT',
      newStudent: { name: 'Maria' }
    };

    expect(actions.addStudent({ name: 'Maria' })).toEqual(expectedAction);
  });

  it('should create an action to delete a student', () => {
    const expectedAction = {
      type: 'CLASSROOM_DELETE_STUDENT',
      studentId: { name: 'Maria' }
    };

    expect(actions.deleteStudent({ name: 'Maria' })).toEqual(expectedAction);
  });

  it('should create an action to increment core values', () => {
    const expectedAction = {
      type: 'PLUS_ONE_CORE_VALUE',
      coreValue: { integrity: 1 },
    }

    expect(actions.plusOneCoreValue({ integrity: 1 })).toEqual(expectedAction);
  })

  it('should create an action to add a core value', () => {
    const expectedAction = {
      type: 'ADD_CORE_VALUE',
      newValue: { respect: 0 },
    }

    expect(actions.addCoreValue({ respect: 0 })).toEqual(expectedAction);
  })

  it('should create an action to add a new set of core values to a new students', () => {
    const expectedAction = {
      type: 'NEW_SET_OF_CORE_VALUES',
      id: { id: 0 },
      newSet: {
        Integrity: 0,
        Grit: 0,
        Perseverance: 0,
        Responsbility: 0,
        Respect: 0
      }
    }

    expect(actions.newSetofCoreValues(
      {"id": 0},
      {"Grit": 0, "Integrity": 0, "Perseverance": 0, "Respect": 0, "Responsbility": 0},
      "type": "NEW_SET_OF_CORE_VALUES"
    )).toEqual(expectedAction);
  })
})
