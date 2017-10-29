import * as actions from './actions.js';


describe('actions', () => {
  it('should create an action to add a student', () => {
    const expectedAction = {
      type: 'CLASSROOM_ADD_STUDENT',
      student: { name: 'Maria' }
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
})
