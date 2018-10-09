const React = require('react');
const Default = require('./layout/Default');

class Home extends React.Component {
  render() {
    const shutupeslint = this.props;
    return (
      <Default bodyclasslist="homebg">
        <div className="container d-flex align-items-center h-100">
          <h1 className="logo display-1 mx-auto text-center">
            EAT <br /> WHAT?
          </h1>
        </div>
        <nav className="navbar fixed-bottom justify-content-center">
          <a className="btn btn-lg btn-outline-light m-4 font-weight-bold" href="#">
            LOGIN
          </a>
          <a className="btn btn-lg btn-outline-light m-4 font-weight-bold" href="/users/new">
            SIGNUP
          </a>
        </nav>
      </Default>
    );
  }
}

module.exports = Home;
