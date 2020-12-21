import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/authActions';

export class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className='container bg-white my-4'>
          <div className='row justify-content-center'>
            <form className='p-3 mx-auto col-md-6' onSubmit={this.onSubmit}>
              <h1>Sign in</h1>
              <div className='form-group'>
                <label htmlFor='email'>E-mail</label>
                <input
                  type='email'
                  className='form-control'
                  value={this.state.email}
                  onChange={this.onChange}
                  name='email'
                />
              </div>
              <div className='form-group mb-4'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  value={this.state.password}
                  onChange={this.onChange}
                  name='password'
                />
              </div>
              <button className='btn btn-block btn-success mb-4' type='submit'>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

export default connect(mapStateToProps, { loginUser })(Login);
