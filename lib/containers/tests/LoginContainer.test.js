import { mapStateToProps } from '../LoginContainer';

describe('LoginContainer', () => {

  describe('mapStatetoProps', () => {
    const mockedState = {
      userStatus: false
    };

    const result = mapStateToProps(mockedState);

    it('should start out as false', () => {

      expect(result.userStatus).toEqual(false);
    });
  });
});
