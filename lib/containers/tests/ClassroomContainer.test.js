import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import ClassroomContainer from '../ClassroomContainer';
import Classroom from '../../components/Classroom/Classroom';
import initialState from '../../utils/studentContactData.js';
import React from 'react';
// import testSetup from '../../__mock__/testSetup';

//
describe('classroom of teacher and students', () => {
  const mockStore = configureStore();

  let mockFn = jest.fn();


  const mockDeleteStudent = jest.fn();
  const store = mockStore(initialState);


  it('should have a default state', () => {
    const wrapper = mount(<Classroom students={[{ id: 5, name: 'Francy Lang', parentContact: 'Pam Lang', phone: '5029052136'}]}/>);

    expect(wrapper.instance().props.students).toEqual(store);
    expect(wrapper.instance().props.teacher).toEqual(store);
  });

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
