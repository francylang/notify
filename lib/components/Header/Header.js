import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ userStatus }) => {
  const classroomContents = (
      <div className='character-class-link'>
        {
           userStatus ?
          <div>
        <Link
          className='new-student-link'
          to='/newstudent'>
            <img
              src="lib/assets/avatar.svg"
              className='img-new-student'
              width='20px'
              height='20px'
              alt='kid icon' />New Student
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
              alt='core value icon' />New Core Value
        </Link>
      </div> :
          null
        }
        {
          userStatus ?
        <Link
          className='new-login-link'
          to='/Login'>
            <img
              src="lib/assets/logout.svg"
              className='img-new-value'
              width='20px'
              height='20px'
              alt='core value icon' />Logout
        </Link> : null
        // <Link
        //   className='new-login-link'
        //   to='/Login'>
        //     <img
        //       src="lib/assets/login-square-arrow-button-outline.svg"
        //       className='img-new-value'
        //       width='20px'
        //       height='20px'
        //       alt='core value icon' />Login
        // </Link>
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
