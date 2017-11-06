import React from "react";
import { ClassroomContainer, mapStateToProps } from '../ClassroomContainer';
import { shallow } from "enzyme";

describe('ClassroomContainer', () => {

  describe('mapStatetoProps', () => {
    const mockedState = {
      classroom: {
        students: ['Francy', 'Lilly', 'Joe'],
        teacher: 'Ms. Lang'
      }
    };

    const result = mapStateToProps(mockedState);

    it('should have the students', () => {

      expect(result.students).toEqual(['Francy', 'Lilly', 'Joe']);
    });

    it('should have the teacher', () => {

      expect(result.teacher).toEqual('Ms. Lang');
    });
  });
});
