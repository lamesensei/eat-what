const React = require('react');

class Default extends React.Component {
  render() {
    let logout;
    if (this.props.currentUser) {
      logout = (
        <form method="post" action="/users/logout">
          <input className="nav-link text-light p-0" type="submit" value=" | logout" />
        </form>
      );
    }
    return (
      <html>
        <head>
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://fonts.googleapis.com/css?family=Chelsea+Market" rel="stylesheet" />
          <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="/stylesheets/main.css" />
        </head>
        <body className={this.props.bodyclasslist}>
          <header>
            <nav className="navbar navbar-dark fixed-top">
              <a className="navbar-brand logo" href="/">
                EAT WHAT?
              </a>
              <div className="nav nav-justified">
                <a href="#" className="nav-link text-light p-0 font-weight-bold">
                  <u>{this.props.currentUser}</u>
                </a>
                {logout}
              </div>
            </nav>
          </header>
          <div className="container-fluid h-100">{this.props.children}</div>
        </body>
      </html>
    );
  }
}

module.exports = Default;
