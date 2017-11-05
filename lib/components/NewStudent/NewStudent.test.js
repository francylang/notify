import React from 'react';
import NewStudent from './NewStudent.js';
import { shallow } from 'enzyme';

describe('<NewStudent />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<NewStudent students={[{ id: 5, name: 'Francy Lang', parentContact: 'Pam Lang', phone: '5029052136'}]}/>);
  });

  it('should exist', () => {

    expect(wrapper).toBeDefined();
  });

  it('should match the NewStudent snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });
});
