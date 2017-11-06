import React from "react";
import { CoreValueContainer, mapStateToProps } from '../CoreValueContainer';
import { shallow } from "enzyme";

describe('CoreValue Container', () => {

  describe('mapStateToProps', () => {
    const mockedState = {
      classroom: {
        students: ['Francy', 'Lilly', 'Joe'],
        teacher: 'Ms. Lang'
      }
    };
    const mockedStateValues = {
      valuesArray: {
        coreValues: ['Integrity', 'Perseverance', 'Responsibility']
      }
    };

    const result = mapStateToProps(mockedStateValues);

console.log(mockedState);
    it('should have core values', () => {

    expect(result.coreValues).toEqual(['Integrity', 'Perseverance', 'Responsibility']);
    });
  });
});
