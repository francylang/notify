import React from 'react';
import NewStudent from './NewStudent.js';
import { shallow } from 'enzyme';

describe('<NewStudent />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NewStudent students={[{ id: 5, name: 'Francy Lang', parentContact: 'Pam Lang', phone: '5029052136'}]}/>);
  });

  it('should exist', () => {

    expect(wrapper).toBeDefined();
  });

  it('should match the NewStudent snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('should change state on input', () => {
    const name = wrapper.find('.add-new-student-form-name');
    const parentContact = wrapper.find('.add-new-student-form-parent-contact');
    const phone = wrapper.find('.add-new-student-phone');

    name.simulate('change', { target: { value: 'Francy Lang' } });
    parentContact.simulate('change', { target: { value: 'Pam Lang' } });
    phone.simulate('change', { target: { value: '502-905-2136' } });
    expect(wrapper.state().name).toEqual('Francy Lang');
    expect(wrapper.state().parentContact).toEqual('Pam Lang');
    expect(wrapper.state().phone).toEqual('502-905-2136');
  });
});
