import React from "react";
import { CoreValueContainer, mapStateToProps } from '../CoreValueContainer';
import { shallow } from "enzyme";

describe('CoreValue Container', () => {

  describe('mapStateToProps', () => {
    const mockedState = {
      classroom: {
        students: ['Integrity', 'Perseverance', 'Responsibility']
      }
    };
    const result = mapStateToProps(mockedState);

    it('should have core values', () => {

      expect(result.students).toEqual(['Integrity', 'Perseverance', 'Responsibility']);
    });
  });
});
