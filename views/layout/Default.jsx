const React = require('react');

class Default extends React.Component {
  render() {
    let logout;
    let bodyclass = 'defaultbg';
    if (this.props.currentUser) {
      logout = (
        <form method="post" action="/users/logout">
          <input className="nav-link text-light p-0" type="submit" value=" | logout" />
        </form>
      );
    }

    if (this.props.bodyclasslist) {
      bodyclass = this.props.bodyclasslist;
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
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
            integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="/stylesheets/main.css" />
        </head>
        <body className={bodyclass}>
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
          <script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossOrigin="anonymous"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossOrigin="anonymous"
          />
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossOrigin="anonymous"
          />
        </body>
      </html>
    );
  }
}

module.exports = Default;
