import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../index.css';

const Header = (props) => {
  let teacherBox;

  let studentNameInput;
  const handleSubmit = (event) => {
    event.preventDefault()
    props.addStudent(studentNameInput.value)
  }
  const classroomContents = (
    <div className='header-home'>
      {/* <p className='teachers'>Welcome, {teacher.name}!</p> */}
      <div className='charcter-class-link'>
        <Link className='character-link' to='/'>Character Traits</Link>
        <form onSubmit={handleSubmit}>
          <input ref={name => studentNameInput = name}type='text'/>
          <input type='submit'/>
        </form>
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
      {/* <input type='submit' onClick={() => addStudent(student)}/> */}
      {classroomContents}
    </div>
  );
};

Header.propTypes = {

};

export default Header;
