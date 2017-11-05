import React from 'react';
import Header from './Header.js';
import { shallow } from 'enzyme';

describe('<Header />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach( () => {
    const wrapper = shallow(<Header />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a "Login" button', () => {
    const loginBtn = wrapper.find('.login');

    expect(loginBtn.length).toEqual(1);
  });

  it.skip('should render a four drop down option links', () => {
    const option = wrapper.find('.drop-down-option');

    expect(option.length).toEqual(4);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
