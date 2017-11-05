import React from 'react';
import Header from './Header.js';
import { shallow } from 'enzyme';

describe('<Header />', () => {
  let wrapper;
  // let mockFn = jest.fn();

  it('should exist', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
