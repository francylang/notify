import React, { Component } from 'react';
import Classroom from './Classroom/Classroom.js'
import '../../index.css';
import key from './key.js'


const App = () => {
  return (
    <div className='app'>
      <Classroom />
      <button onClick={text} />
    </div>
  );
}
export default App;
