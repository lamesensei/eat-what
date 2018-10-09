const React = require('react');

class Default extends React.Component {
  render() {
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
            <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand logo" href="/">
                EAT WHAT?
              </a>
            </nav>
          </header>
          <div className="container-fluid h-100">{this.props.children}</div>
        </body>
      </html>
    );
  }
}

module.exports = Default;
