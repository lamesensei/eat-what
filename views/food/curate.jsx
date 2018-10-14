const React = require('react');
const Default = require('../layout/Default');

class Curate extends React.Component {
  render() {
    let sucessAlert;
    if (this.props.success) {
      sucessAlert = (
        <div className="alert alert-success w-100 text-center" role="alert">
          {this.props.success.name} was {this.props.action}
        </div>
      );
    }
    return (
      <Default currentUser={this.props.currentUser.login}>
        <div className="container mx-auto">
          <div className="row mt-2">
            {sucessAlert}
            <div className="alert alert-info w-100 text-center" role="alert">
              <h4 className="alert-heading">Curate</h4>
            </div>
          </div>
          <div className="row mt-3">
            <a className="btn btn-success btn-block" href="/food/add" role="button">
              Add New Place
            </a>
            <a className="btn btn-info btn-block" href="/food/fave" role="button">
              Favourite Place
            </a>
            <a className="btn btn-warning btn-block" href="/food/edit" role="button">
              Edit Place(s)
            </a>
          </div>
        </div>
      </Default>
    );
  }
}

module.exports = Curate;
