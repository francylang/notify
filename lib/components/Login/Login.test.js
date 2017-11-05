import React from 'react';
import Login from './Login.js';
import { shallow } from 'enzyme';

describe('<Login />', () => {

  it('should exist', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper).toBeDefined();
  });

  it('should match the Login snapshot', () => {
    let wrapper = shallow(<Login />);

    expect(wrapper).toMatchSnapshot();
  });
});
