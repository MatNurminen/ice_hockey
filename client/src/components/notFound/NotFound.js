import React, { Component } from 'react';

import Navbar from '../layout/Navbar';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container text-center bg-white'>
          <h1 className='pt-4'>OOF!</h1>
          <h5>We are sorry, but you have reached this page in error.</h5>
          <h5>404 Error - Page not found</h5>
          <img className='error-img' alt='' src='/img/puck_spinning.gif'></img>
        </div>
      </div>
    );
  }
}
