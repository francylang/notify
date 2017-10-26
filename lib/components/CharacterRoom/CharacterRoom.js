import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Character/Character.js'
import '../../index.css';

const CharacterRoom = () => {
    return (
      <div className='character-traits-ctnr'>
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
      </div>
    );
  };



CharacterRoom.propTypes = {

};

export default CharacterRoom;
