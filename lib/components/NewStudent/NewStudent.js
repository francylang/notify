import React, { Component } from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

class NewStudent extends Component {
  constructor(props) {
    super(props)
    const studentIds = props.students.map(student => student.id)
    const lastStudentId = studentIds.length - 1
    const newStudentId = lastStudentId + 1
    // const newStudentId = props.students.length
      this.state = {
        id: newStudentId,
        name: '',
        parentContact: '',
        phone: ''
      }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event, type) {
    let value = event.target.value;

    this.setState({
      [type]: value
    });
  }

  handleSubmit(event, type) {
    event.preventDefault();
    const newStudent = this.state
    this.props.addStudent(newStudent);
    this.setState({
      id: '',
      name: '',
      parentContact: '',
      phone: ''
    })
    this.props.history.push('/');
  }

  render() {
    const isDisabled =
    this.state.name.length &&
    this.state.parentContact.length &&
    this.state.phone.length  ? false : true;

    return(
      <div className='new-student'>
        <h2 className='create-new-student'>Create New Student</h2>
        <form
          className='add-new-student-form'>
          <input
            type='text'
            placeholder='Student Name'
            value={this.state.name}
            onChange={ (event) => this.handleChange(event, 'name')} />
          <input
            type='text'
            placeholder='Parent Contact'
            value={this.state.parentContact}
            onChange={ (event) => this.handleChange(event, 'parentContact')} />
          <input
            type='text'
            placeholder='phone'
            value={this.state.phone}
            onChange={ (event) => this.handleChange(event, 'phone')}/>
          <input
            className='form-button'
            disabled={isDisabled}
            type='submit'
            onClick={this.handleSubmit}
            />
          </form>
        </div>
    )
  }
}

export default NewStudent;
