import React, { Component } from 'react';
import PropTypes from 'prop-types';
import userLoginData from '../../utils/userLoginData.js';


// import { Redirect } from 'react-router';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
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
    const user = this.state;
    this.props.isAuthenticated()
    const realUser = user === userLoginData ? true : false
    console.log(userLoginData);
    console.log(realUser);
    console.log(user);
    this.setState({
      email: '',
      password: ''
    });
    // this.props.history.push('/');
  }

  render() {
    const isDisabled =
    this.state.email.length &&
    this.state.password.length ? false : true;

    return (
      <div>
        <form className='login-form'>
          <h2 className='login'>Login</h2>
            <input
              type='text'
              placeholder='Email'
              value={this.state.email}
              onChange={ (event) => this.handleChange(event, 'email')}>
            </input>
            <input
              type='text'
              placeholder='Password'
              value={this.state.password}
              onChange={ (event) => this.handleChange(event, 'password')}>
            </input>
            <input
              className='login-submit-button'
              disabled={isDisabled}
              type='submit'
              onClick={this.handleSubmit}
              >
            </input>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object
};


export default Login;
