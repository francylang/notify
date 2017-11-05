import React from "react";
import Classroom from './Classroom';
import { shallow } from "enzyme";

describe('CLASSROOM', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Classroom students={[{ id: 5, name: 'Francy Lang', parentContact: 'Pam Lang', phone: '5029052136'}]}/>);
  });

  it('should exist', () => {

    expect(wrapper).toBeDefined();
  });

  it('should match the Classroom snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });
});
