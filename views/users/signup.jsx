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
              <input type="text" className="form-control" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" placeholder="johndoe91" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
              Submit
            </button>
          </form>
        </div>
      </Default>
    );
  }
}

module.exports = Signup;
