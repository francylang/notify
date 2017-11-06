import React from 'react';
import Login from './Login.js';
import { shallow } from 'enzyme';

describe('<Login />', () => {

  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Login />);
  });

  it('should exist', () => {

    expect(wrapper).toBeDefined();
  });

  it('should match the Login snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('should change state on input', () => {
    const email = wrapper.find('.login-form-email');
    const password = wrapper.find('.login-form-password');

    email.simulate('change', { target: { value: 'Francy.Lang@gmail.com' } });
    password.simulate('change', { target: { value: 'password' } });
    expect(wrapper.state().email).toEqual('Francy.Lang@gmail.com');
    expect(wrapper.state().password).toEqual('password');
  });
});
