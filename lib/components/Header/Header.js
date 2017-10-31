import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NewStudent from '../NewStudent/NewStudent.js';
import NewCoreValue from '../NewCoreValue/NewCoreValue.js';
import '../../index.css';

const Header = props => {
  let teacherBox;

  const classroomContents = (
    <div className='header-home'>
      {/* <p className='teachers'>Welcome, {teacher.name}!</p> */}
      <div className='character-class-link'>
        <Link className='character-link' to='/'>Students</Link>
        <Link className='new-student-link' to='/newstudent'>Add New Student</Link>
        <Link className='new-value-link' to='/NewCoreValue'>Add New Core Value</Link>
      </div>
    </div>
  );

  const coreValueContents = (
    <div className='header-home header-coreValue'>
      {/* <p className='teachers'>Welcome, {teacher.name}!</p> */}
      <div className='character-class-link'>
        <Link className='character-link' to='/character'>Character Traits</Link>
      </div>
    </div>
  );

  //if we are currently home, render classroomContents
  //if we are /character, render characterContents

  //  <Link to='/'></Link> ? teacherBox = classroomContents : teacherBox = characterContents;


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
