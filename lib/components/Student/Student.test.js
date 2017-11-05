import React from 'react';
import Student from './Student.js';
import { shallow } from 'enzyme';

describe('<Student />', () => {

  let wrapper;
  let mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Student studentId={5} />);
  });
  it('should exist', () => {

    expect(wrapper).toBeDefined();
  });

  it('should match the Student snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });
});
