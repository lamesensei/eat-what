const React = require('react');
const Default = require('./layout/Default');

class Home extends React.Component {
  render() {
    return (
      <Default>
        <p>Test</p>
      </Default>
    );
  }
}

module.exports = Home;
