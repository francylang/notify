import React from "react";
import Classroom from './Classroom';
import { shallow } from "enzyme";
// import testSetup from '../../../__mock__/testSetup';


describe('CLASSROOM', () => {
  let wrapper = shallow(<Classroom />);

  it('should match the Classroom snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


  // describe('<Classroom />', () => {
  //   let wrapper;
  //   let mockFn = jest.fn();
  //
  //   beforeEach( () => {
  //     const wrapper = shallow(<Classroom />);
  //   });
  //
  //   it('should exist', () => {
  //     expect(wrapper).toBeDefined();
  //   });
  // });
