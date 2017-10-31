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
        <Link className='character-link' to='/'><img src="lib/assets/multiple-users-silhouette.svg" className='img-students' width='20px' height='20px' alt="students-icon" />Students</Link>
        <Link className='new-student-link' to='/newstudent'>
        <img src="lib/assets/avatar.svg" className='img-new-student' width='20px' height='20px' alt="kid icon" />New Student</Link>
        <Link className='new-value-link' to='/NewCoreValue'><img src="lib/assets/settings.svg" className='img-new-value' width='25px' height='25px' alt="core value icon" />New Core Value</Link>
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

   <Link to='/'></Link> ? teacherBox = classroomContents : teacherBox = coreValueContents;


  return (
    <div className='header'>
      <Link className='header-link' to='/'>
        <h1 className='header-one'><img src="lib/assets/creativity.svg" className='main-icon' width='80px' height='80px' alt="core value icon" />Character Check</h1>
      </Link>
      {teacherBox}
    </div>
  );
};

Header.propTypes = {

};

export default Header;
