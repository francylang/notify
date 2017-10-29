import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NewStudent from '../NewStudent/NewStudent.js'
import '../../index.css';

const Header = (props) => {
  let teacherBox;

  // let studentNameInput;
  //
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   props.addStudent(studentNameInput.value)
  // }

  const classroomContents = (
    <div className='header-home'>
      {/* <p className='teachers'>Welcome, {teacher.name}!</p> */}
      <div className='charcter-class-link'>
        <Link className='character-link' to='/'>CoreValues</Link>
        {/* <form onSubmit={handleSubmit}>
          <input ref={name => studentNameInput = name}type='text'/>
          <input type='submit'/>
        </form> */}
        <Link className='new-student-link' to='/newstudent'>Add New Student</Link>
      </div>
    </div>
  );

  const characterContents = (
    <div className='header-home header-character'>
      {/* <p className='teachers'>Welcome, {teacher.name}!</p> */}
      <div className='charcter-class-link'>
        <Link className='character-link' to='/character'>Character Traits</Link>
      </div>
    </div>
  );

  //if we are currently home, render classroomContents
  //if we are /character, render characterContents

  //  .......? teacherBox = classroomContents : teacherBox = characterContents;

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
