const React = require('react');
const Default = require('../layout/Default');

class Signup extends React.Component {
  render() {
    const eslintshutup = this.props;
    return (
      <Default>
        <div className="container">
          <form className="" action="/users" method="post">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Suparman Bin Batman"
                required
              />
            </div>
            <div className="form-group">
              <label>Login</label>
              <input
                type="text"
                className="form-control"
                name="login"
                placeholder="suparbat91"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" required />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
              <i class="fas fa-check" />
            </button>
          </form>
        </div>
      </Default>
    );
  }
}

module.exports = Signup;
