import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewStudent extends Component {
  constructor(props) {
    super(props);
    const studentIds = props.students.map(student => student.id);
    const lastStudentId = studentIds.length - 1;
    const newStudentId = lastStudentId + 1;
    this.state = {
      id: newStudentId,
      name: '',
      parentContact: '',
      phone: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, type) {
    let value = event.target.value;

    this.setState({
      [type]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { coreValues, addStudent, newSetofCoreValues, history } = this.props;

    const newStudent = this.state;
    const id = newStudent.id;
    const coreValueKeys = Object.keys(coreValues[0]);
    const newSet = coreValueKeys.reduce((accu, coreValue) => {
      accu[coreValue] = 0;
      return accu;
    }, {});
    addStudent(newStudent);
    newSetofCoreValues(id, newSet);
    this.setState({
      id: '',
      name: '',
      parentContact: '',
      phone: ''
    });
    history.push('/');
  }

  render() {
    const { name, parentContact, phone } = this.state;

    return (
      <div className='new-student'>
        <h2 className='create-new-student'>Create New Student</h2>
        <form
          className='add-new-student-form'>
          <input
            className='add-new-student-form-name'
            type='text'
            placeholder='Student Name'
            value={name}
            onChange={ (event) => this.handleChange(event, 'name')} />
          <input
            className='add-new-student-form-parent-contact'
            type='text'
            placeholder='Parent Contact'
            value={parentContact}
            onChange={ (event) => this.handleChange(event, 'parentContact')} />
          <input
            className='add-new-student-phone'
            type='text'
            placeholder='phone'
            value={phone}
            onChange={ (event) => this.handleChange(event, 'phone')}/>
          <input
            className='form-button'
            disabled={!phone.length}
            type='submit'
            onClick={this.handleSubmit}
            />
        </form>
      </div>
    );
  }
}

NewStudent.propTypes = {
  history: PropTypes.object,
  students: PropTypes.array,
  coreValues: PropTypes.object,
  addStudent: PropTypes.func,
  newSetofCoreValues: PropTypes.func
};


export default NewStudent;
