import { mapStateToProps } from '../NewCoreValueContainer';

describe('NewCoreValueContainer', () => {

  describe('mapStatetoProps', () => {
    const mockedState = {
      classroom: {
        students: ['Francy', 'Lilly', 'Joe']
      }
    };

    const result = mapStateToProps(mockedState);

    it('should have the students', () => {

      expect(result.students).toEqual(['Francy', 'Lilly', 'Joe']);
    });

    it('should have core values', () => {

    });
    expect(result.students).toEqual(['Francy', 'Lilly', 'Joe']);

  });

  describe('mapStateToProps', () => {
    const mockState = {
      classroom: {
        students: ['Integrity', 'Perseverance', 'Responsibility']
      }
    };
    const results = mapStateToProps(mockState);

    it('should have core values', () => {

      expect(results.students).toEqual(['Integrity', 'Perseverance', 'Responsibility']);
    });
  });
});
