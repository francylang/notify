import React from 'react';
import Header from './Header.js';
import { shallow } from 'enzyme';

describe('<Header />', () => {
  let wrapper;

  it('should exist', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render a link to create a new student', () => {
    const wrapper = shallow(<Header />);

    const newStudentLink = wrapper.find('.new-student-link');

    expect(newStudentLink.length).toEqual(0);
  });

  it('should not render a link to create a new core value', () => {
    const wrapper = shallow(<Header />);

    const newCoreValueLink = wrapper.find('.new-value-link');

    expect(newCoreValueLink.length).toEqual(0);
  });

  it('should not render a link to login', () => {
    const wrapper = shallow(<Header />);

    const loginLink = wrapper.find('.new-login-link');

    expect(loginLink.length).toEqual(0);
  });
});
