import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const classroomContents = (
      <div className='character-class-link'>
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
        <Link
          className='new-login-link'
          to='/Login'>
            <img
              src="lib/assets/login-square-arrow-button-outline.svg"
              className='img-new-value'
              width='20px'
              height='20px'
              alt='core value icon' />Login
        </Link>
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

export default Header;
