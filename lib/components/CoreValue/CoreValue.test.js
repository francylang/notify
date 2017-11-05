import React from 'react';
import CoreValue from './CoreValue.js';
import { shallow } from 'enzyme';

describe('<CoreValue />', () => {

  it('should exist', () => {
    const wrapper = shallow(<CoreValue />);

    expect(wrapper).toBeDefined();
  });

  it('should match the CoreValue snapshot', () => {
    const wrapper = shallow(<CoreValue />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a core value card', () => {
    const wrapper = shallow(<CoreValue />);

    const card = wrapper.find('.card');

    expect(card.length).toEqual(1);
  });

  it('should render a core value counter', () => {
    const wrapper = shallow(<CoreValue />);

    const counter = wrapper.find('.core-value-counter');

    expect(counter.length).toEqual(1);
  });
});
