// import configureStore from 'redux-mock-store';
// import { mount } from 'enzyme';
// import ClassroomContainer from '../ClassroomContainer';
// import Classroom from '../../components/Classroom/Classroom';
// import intialState from '../../../reducers/ClassroomReducer.js';
// import React from 'react';
// import testSetup from '../../../__mock__/testSetup';
//
//
// describe('classroom of teacher and students', () => {
//   const mockStore = configureStore();
//
//   const mockLoadContacts = jest.fn();
//   const store = mockStore(initialState);
//   const wrapper = mount(<ManageContacts
//     store={store}
//     currentUser={initialState.currentUser}
//     loadedContacts={initialState.loadedContacts}
//     loadContacts={mockLoadContacts} />);
//
//   it('should have a default state', () => {
//     expect(wrapper.instance().props.currentUser).toEqual('');
//     expect(wrapper.instance().props.loadedContacts).toEqual([]);
//   });
//
//   it('should fire actions', () => {
//     const actionWrapper = mount(<ManageContacts
//       store={store}
//       currentUser={initialState.currentUser}
//       loadedContacts={initialState.loadedContacts}
//       loadContacts={mockLoadContacts} />);
//
//     const createNewContactBtn = actionWrapper.find('.save-new-contact');
//
//     wrapper.instance().loadContacts = mockLoadContacts;
//     createNewContactBtn.simulate('click');
//     expect(mockLoadContacts).toHaveBeenCalledTimes(1);
//   });
//
// });
