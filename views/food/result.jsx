const React = require('react');
const Default = require('../layout/Default');

class Result extends React.Component {
  render() {
    return (
      <Default currentUser={this.props.currentUser.login}>
        <div className="container mx-auto">
          <div className="row mt-2">
            <div class="alert alert-success w-100 text-center" role="alert">
              <h4 class="alert-heading">DSEN RECOMMENDS</h4>
              <p>{this.props.result.name}</p>
              <p>{this.props.result.description}</p>
              <p>{this.props.result.location}</p>
            </div>
            <a href="/food/solo" className="btn btn-block btn-secondary">
              REFRESH
            </a>
          </div>
        </div>
      </Default>
    );
  }
}

module.exports = Result;
