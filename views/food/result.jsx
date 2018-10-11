const React = require('react');
const Default = require('../layout/Default');

class Result extends React.Component {
  render() {
    return (
      <Default currentUser={this.props.currentUser.login}>
        <div className="container mx-auto">
          <div className="row mt-2">
            <div className="alert alert-success w-100 text-center" role="alert">
              <h4 className="alert-heading">{this.props.result.name}</h4>
              <p>@ {this.props.result.location}</p>
              <hr />
              <p>"{this.props.result.description}"</p>
            </div>
            <a href="/food/solo" className="btn btn-lg btn-info text-light mx-auto">
              <i className="fas fa-redo" />
            </a>
          </div>
        </div>
      </Default>
    );
  }
}

module.exports = Result;
