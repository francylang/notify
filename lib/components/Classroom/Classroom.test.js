import React from "react";
import Classroom from './Classroom';
import { shallow, mount } from "enzyme";
import { MemoryRouter } from 'react-router-dom';


describe('CLASSROOM', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Classroom students={[{ name: 'Francy Lang', parentContact: 'Pam Lang', phone: '5029052136'}]}/>);
  });

  it('should exist', () => {

    expect(wrapper).toBeDefined();
  });

  it('should match the Classroom snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });
});

describe('classroom of teacher and students', () => {

  it.skip('should receive students and teacher', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Classroom students={[{ name: 'Francy Lang', parentContact: 'Pam Lang', phone: '5029052136'}]}
                   teacher={'Ms. Lang'}
                 />
      </MemoryRouter>
    );

    expect(wrapper.find('.teacher-name').text()).toEqual("Ms. Lang's Classroom");
    expect(wrapper.find('StudentLink').length).toEqual(1);
  });

  it.skip('should delete a student', () => {
    const mockDelete = jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <Classroom students={[{ id: 5, name: 'Francy Lang', parentContact: 'Pam Lang', phone: '5029052136'}]}
                   teacher={'Ms. Lang'}
                   deleteStudent={mockDelete}
                 />
      </MemoryRouter>
    );
    const deleteButton = wrapper.find('.delete-student-btn');
    deleteButton.simulate('click');
    expect(mockDelete.mock.calls.length).toEqual(1);
  });
});
