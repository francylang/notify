import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from '../../containers/HeaderContainer';
import ClassroomContainer from '../../containers/ClassroomContainer';
import StudentContainer from '../../containers/StudentContainer';
import NewStudentContainer from '../../containers/NewStudentContainer';
import NewCoreValueContainer from '../../containers/NewCoreValueContainer';
import LoginContainer from '../../containers/LoginContainer';

class Routes extends Component {
  render() {
    return (
      <div className="routes">
        <Route path="/" component={ HeaderContainer }/>
        <Route exact path="/" component={ ClassroomContainer }/>
        <Route path="/newstudent" component={ NewStudentContainer }/>
        <Route path="/newcorevalue" component={ NewCoreValueContainer }/>
        <Route path="/students/:id" component={ StudentContainer }/>
        <Route path="/login" component={ LoginContainer } />
      </div>
    );
  }
}

export default Routes;
