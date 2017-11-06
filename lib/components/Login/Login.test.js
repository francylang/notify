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
});
