import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import HeaderContainer from '../../containers/HeaderContainer';
import ClassroomContainer from '../../containers/ClassroomContainer';
import CharacterRoomContainer from '../../containers/CharacterRoomContainer';

class Routes extends Component {
  render() {
    return (
      <div className="routes">
        <Route path="/" component={ HeaderContainer }/>
        {/* <Route exact path="/" component={ ClassroomContainer }/>
        <Route path="/character" component={ CharacterRoomContainer }/> */}
      </div>
    );
  }
}

export default Routes;
