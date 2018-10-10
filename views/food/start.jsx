const React = require('react');
const Default = require('../layout/Default');

class Start extends React.Component {
  render() {
    return <Default currentUser={this.props.currentUser.login}>hi</Default>;
  }
}

module.exports = Start;
