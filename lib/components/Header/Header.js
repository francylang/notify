import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = () => {

  const classroomContents = (
    <div className='header-home'>
      <p className='teachers'>Welcome, {teacher.name}!</p>
      <div className='charcter-class-link'>
        <Link className='character-link' to='/'>Character Traits</Link>
      </div>
    </div>
  );
};
