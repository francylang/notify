import React from "react";
import Classroom from './Classroom';
import { shallow } from "enzyme";

describe('CLASSROOM', () => {

  it('should exist', () => {
    let wrapper = shallow(<Classroom />);

    expect(wrapper).toBeDefined();
  });

  it('should match the Classroom snapshot', () => {
    let wrapper = shallow(<Classroom />);

    expect(wrapper).toMatchSnapshot();
  });
});
