import React from 'react';
import Student from './Student.js';
import { shallow } from 'enzyme';

describe('<Student />', () => {

  it('should exist', () => {
    const wrapper = shallow(<Student />);

    expect(wrapper).toBeDefined();
  });

  it('should match the Student snapshot', () => {
    let wrapper = shallow(<Student />);

    expect(wrapper).toMatchSnapshot();
  });
});
