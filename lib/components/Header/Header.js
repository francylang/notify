import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = () => {
  let teacherBox

  const classroomContents = (
    <div className='header-home'>
      {/* <p className='teachers'>Welcome, {teacher.name}!</p> */}
      <div className='charcter-class-link'>
        <Link className='character-link' to='/'>Character Traits</Link>
      </div>
    </div>
  );

  return (
    <div className='header'>
      <Link to='/'>
        <h1>
          <span className='header-one'>Classroom</span>
          <span className='header-two'>Teacher</span>
        </h1>
      </Link>
      {teacherBox}
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  handleSignOut: PropTypes.func,
};

export default Header;
