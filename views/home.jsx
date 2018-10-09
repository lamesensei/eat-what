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
        <nav class="navbar fixed-bottom justify-content-center">
          <a class="btn btn-lg btn-outline-light m-4" href="#">
            LOGIN
          </a>
          <a class="btn btn-lg btn-outline-light m-4" href="#">
            SIGNUP
          </a>
        </nav>
      </Default>
    );
  }
}

module.exports = Home;
