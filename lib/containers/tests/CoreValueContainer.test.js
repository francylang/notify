import { mapStateToProps, mapDispatchToProps } from '../CoreValueContainer';

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

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();

    const result = mapDispatchToProps(mockDispatch);

    it('should delete a student', () => {
      result.plusOneCoreValue();
      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
  });
});
