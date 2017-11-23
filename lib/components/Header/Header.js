import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ userStatus }) => {
  const classroomContents = (
    <div>
      {
         userStatus ?
    <div className='character-class-link'>
      <Link
        className='new-student-link'
        to='/newstudent'>
          <img
            src="lib/assets/avatar.svg"
            className='img-new-student'
            width='20px'
            height='20px'
            alt='kid icon' />
            <span className='underline'>
              New Student</span>
      </Link>
      <Link
        className='new-value-link'
        to='/NewCoreValue'>
        <div className='icon'></div>
          <img
            src="lib/assets/settings.svg"
            className='img-new-value'
            width='20px'
            height='20px'
            alt='core value icon' /><span className='underline'>New Core Value</span>
      </Link>
      <Link
        className='new-login-link'
        to='/Login'>
          <img
            src="lib/assets/logout.svg"
            className='img-new-value'
            width='20px'
            height='20px'
            alt='core value icon' /><span className='underline'>Logout</span>
      </Link>
    </div>

      : null

      }
    </div>
  );

  return (
    <div className='header'>
        <Link className='header-link' to='/'>
          <div className='logo'></div>
        </Link>
        {classroomContents}
    </div>
  );
};

Header.propTypes = {
  userStatus: PropTypes.bool
};

export default Header;
