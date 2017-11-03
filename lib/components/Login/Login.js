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
    if(type === 'email') {
      value = value.toLowerCase()
    }
    this.setState({
      [type]: value
    });
  }

  render() {
    return(
      <div>
        <form>
          <input type='text' placeholder='Email'></input>
          <input type='text' placeholder='Password'></input>
          <input
            type='submit'
            onChange={ (event) => this.handleChange(event, type)}
            ></input>
        </form>
      </div>
    )
  }
}

export default Login;
