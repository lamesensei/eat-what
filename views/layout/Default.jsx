const React = require('react');

class Default extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
        </head>
        <body>
          <header>
            <nav />
          </header>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Default;