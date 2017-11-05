import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const Header = () => {

  const classroomContents = (
    <div className='header-home'>
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
              New Student
        </Link>
        <Link
          className='new-value-link'
          to='/NewCoreValue'>
            <img
              src="lib/assets/settings.svg"
              className='img-new-value'
              width='25px'
              height='25px'
              alt='core value icon' />
              New Core Value
        </Link>
        <Link
          className='new-value-link'
          to='/Login'>
            <img
              src="lib/assets/settings.svg"
              className='img-new-value'
              width='25px'
              height='25px'
              alt='core value icon' />
            Login
        </Link>
      </div>
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
};

export default Header;
