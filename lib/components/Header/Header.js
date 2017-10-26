import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../index.css';


const Header = () => {

  const classroomContents = (
    <div className='header-home'>
      {/* <p className='teachers'>Welcome, {teacher.name}!</p> */}
      <div className='charcter-class-link'>
        <Link className='character-link' to='/character'>Character Traits</Link>
      </div>
    </div>
  );

  return (
    <div className='header'>
      <Link className='header-link' to='/'>
        <h1 className='header-one'>I need a name</h1>
      </Link>
      {classroomContents}
    </div>
  );
};

Header.propTypes = {

};

export default Header;
