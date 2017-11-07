import { mapStateToProps } from '../HeaderContainer';


describe('HeaderContainer', () => {

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
  });
});
