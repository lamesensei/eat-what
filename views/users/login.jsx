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
          <div className="row mt-2">
            <div className="alert alert-info w-100 text-center" role="alert">
              <h4 className="alert-heading">Login</h4>
            </div>
          </div>
          <form className="" action="/users/login" method="post">
            <div className="form-group">
              <label>Login</label>
              <input type="text" className="form-control" name="login" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" required />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
              <i className="fas fa-check" />
            </button>
            <div className={error} role="alert">
              Wrong details entered, try again!
            </div>
          </form>
          <a href="new">No account? Register here.</a>
        </div>
      </Default>
    );
  }
}

module.exports = Login;
