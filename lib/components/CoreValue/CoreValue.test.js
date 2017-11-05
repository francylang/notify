import React from 'react';
import CoreValue from './CoreValue.js';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<CoreValue />', () => {
  let wrapper;

  beforeEach( () => {
    const wrapper = shallow(<CoreValue />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
