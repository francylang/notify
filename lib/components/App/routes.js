import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import HeaderContainer from '../../containers/HeaderContainer';
import ClassroomContainer from '../../containers/ClassroomContainer';
import StudentContainer from '../../containers/StudentContainer';
import NewStudentContainer from '../../containers/NewStudentContainer';

//gives access in this.props.params

class Routes extends Component {
  render() {
    return (
      <div className="routes">
        <Route path="/" component={ HeaderContainer }/>
        <Route exact path="/" component={ ClassroomContainer }/>
        <Route path="/newstudent" component={ NewStudentContainer }/>
        <Route path="/students/:id" component={ StudentContainer }/>
      </div>
    );
  }
}

export default Routes;
