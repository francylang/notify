// import configureStore from 'redux-mock-store';
// import { mount } from 'enzyme';
// import ClassroomContainer from '../ClassroomContainer';
// import Classroom from '../../components/Classroom/Classroom';
// import intialState from '../../reducers/ClassroomReducer.js';
// import React from 'react';
// import testSetup from '../../__mock__/testSetup';
//
//
// describe('classroom of teacher and students', () => {
//   const mockStore = configureStore();
//
//   const mockDeleteStudent = jest.fn();
//   const store = mockStore(initialState);
//   const wrapper = mount(<Classroom
//     store={store}
//     currentUser={initialState.currentUser}
//     loadedContacts={initialState.loadedContacts}
//     loadContacts={mockDeleteStudent} />);
//
//   it('should have a default state', () => {
//     expect(wrapper.instance().props.students).toEqual(store);
//     expect(wrapper.instance().props.teacher).toEqual(store);
//   });

  // it('should fire actions', () => {
  //   const actionWrapper = mount(<Classroom
  //     store={store}
  //     currentUser={initialState.currentUser}
  //     loadedContacts={initialState.loadedContacts}
  //     loadContacts={mockDeleteStudent} />);
  //
  //   const createNewContactBtn = actionWrapper.find('.save-new-contact');
  //
  //   wrapper.instance().loadContacts = mockDeleteStudent;
  //   createNewContactBtn.simulate('click');
  //   expect(mockDeleteStudent).toHaveBeenCalledTimes(1);
  // });

});
