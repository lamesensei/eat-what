const React = require('react');
const Default = require('../layout/Default');

class Login extends React.Component {
  render() {
    let error = 'invisible';
    if (this.props.wrong) {
      error = 'alert alert-danger';
    }
    return (
      <Default>
        <div className="container">
          <form className="" action="/users/login" method="post">
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" name="login" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" required />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
              Login
            </button>
            <div className={error} role="alert">
              Wrong details entered, try again!
            </div>
          </form>
        </div>
      </Default>
    );
  }
}

module.exports = Login;
