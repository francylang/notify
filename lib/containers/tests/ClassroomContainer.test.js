import { mapStateToProps, mapDispatchToProps } from '../ClassroomContainer';

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

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();

    const result = mapDispatchToProps(mockDispatch);

    it('should delete a student', () => {
      result.deleteStudent();
      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
  });
});
