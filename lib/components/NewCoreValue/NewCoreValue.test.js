import React from 'react';
import NewCoreValue from './NewCoreValue.js';
import { shallow } from 'enzyme';

describe('<NewCoreValue />', () => {

  it('should exist', () => {
    const wrapper = shallow(<NewCoreValue />);

    expect(wrapper).toBeDefined();
  });

  it('should match the NewCoreValue snapshot', () => {
    const wrapper = shallow(<NewCoreValue />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should change state on input', () => {
    const wrapper = shallow(<NewCoreValue />);
    const coreValue = wrapper.find('.new-core-value-input');

    coreValue.simulate('change', { target: { value: 'Fun' } });
    expect(wrapper.state().coreValue).toEqual('Fun');
  });
});
