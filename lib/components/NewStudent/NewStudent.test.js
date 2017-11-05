import React from 'react';
import NewStudent from './NewStudent.js';
import { shallow } from 'enzyme';

describe('<NewStudent />', () => {

  it('should exist', () => {
    const wrapper = shallow(<NewStudent />);

    expect(wrapper).toBeDefined();
  });

  it('should match the NewStudent snapshot', () => {
    let wrapper = shallow(<NewStudent />);

    expect(wrapper).toMatchSnapshot();
  });
});
