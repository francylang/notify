import React from 'react';
import StudentLink from './StudentLink.js';
import { shallow } from 'enzyme';

describe('<StudentLink />', () => {

  it('should exist', () => {
    const wrapper = shallow(<StudentLink />);

    expect(wrapper).toBeDefined();
  });

  it('should render a student card', () => {
    const wrapper = shallow(<StudentLink />);

    const studentCard = wrapper.find('.student-card');

    expect(studentCard.length).toEqual(1);
  });

  it('should render an icon', () => {
    const wrapper = shallow(<StudentLink />);

    const studentCard = wrapper.find('.delete-icon');

    expect(studentCard.length).toEqual(1);
  });

  it('should match the StudentLink snapshot', () => {
    let wrapper = shallow(<StudentLink />);

    expect(wrapper).toMatchSnapshot();
  });
});
