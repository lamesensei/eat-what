const React = require('react');
const Default = require('./layout/Default');

class Home extends React.Component {
  render() {
    let user;
    let bottom = 'navbar fixed-bottom justify-content-center';
    let logo = 'logo display-1 mx-auto text-center shadow';
    let welcome = 'invisible';
    if (this.props.currentUser !== null) {
      user = this.props.currentUser.login;
      bottom = 'invisible';
      logo = 'invisible order-1';
      welcome = 'logo mx-auto text-center shadow order-0';
    }
    return (
      <Default bodyclasslist="homebg" currentUser={user}>
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="container-fluid d-flex flex-wrap">
            <h1 className={logo}>
              EAT <br /> WHAT?
            </h1>
            <h1 className={welcome}>
              Hey {user}! <br />
              <a href="#" className="btn btn-lg btn-light">
                LETS GO
              </a>
            </h1>
          </div>
        </div>
        <nav className={bottom}>
          <a className="btn btn-lg btn-outline-light m-4 font-weight-bold" href="/users/login">
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
