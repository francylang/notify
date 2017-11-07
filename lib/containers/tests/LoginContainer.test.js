import { mapStateToProps, mapDispatchToProps } from '../LoginContainer';

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

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();

    const result = mapDispatchToProps(mockDispatch);

    it('should authenticate a user', () => {
      result.isAuthenticated();
      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
  });
});
