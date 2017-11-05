import React from 'react';
import NewCoreValue from './NewCoreValue.js';
import { shallow } from 'enzyme';

describe('<NewCoreValue />', () => {

  it('should exist', () => {
    const wrapper = shallow(<NewCoreValue />);

    expect(wrapper).toBeDefined();
  });

  it('should match the NewCoreValue snapshot', () => {
    let wrapper = shallow(<NewCoreValue />);

    expect(wrapper).toMatchSnapshot();
  });
});
