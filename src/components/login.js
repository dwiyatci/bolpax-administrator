/**
 * Created by glenn on 17/02/16.
 */

import React from 'react';

const Login = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    // Do dummy login.
    window.location.pathname = '/dashboard';
  },

  render() {
    return (
      <div className="container">
        <form className="pull-left m-t-2 form-signin" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Please sign in</h2>
          <label htmlFor="inputPhone" className="sr-only">Phone number</label>
          <input type="tel" id="inputPhone" className="form-control" placeholder="Phone number" required autoFocus />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
          <button className="btn btn-lg btn-primary btn-block m-t-1" type="submit">Sign in</button>
        </form>
      </div>
    );
  }
});

export { Login as default, Login };
