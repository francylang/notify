import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(event, type) {
    let value = event.target.value;

    this.setState({
      [type]: value
    });
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
              value={this.state.passwword}
              onChange={ (event) => this.handleChange(event, 'password')}>
            </input>
            <input
              className='login-submit-button'
              disabled={isDisabled}
              type='submit'
              // onChange={ (event) => this.handleChange(event, type) }
              >
            </input>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
};


export default Login;
