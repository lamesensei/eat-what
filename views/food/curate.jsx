const React = require('react');
const Default = require('../layout/Default');

class Curate extends React.Component {
  render() {
    let sucessAlert;
    let message;
    if (this.props.success) {
      if (this.props.action) message = `${this.props.success} was ${this.props.action}`;
      message = 'Success!';
      sucessAlert = (
        <div className="alert alert-success w-100 text-center" role="alert">
          {message}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
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
              <hr />
              <p>Perform food related actions here.</p>
            </div>
          </div>
          <div className="row mt-3">
            <a className="btn btn-success btn-block" href="/food/fave" role="button">
              Show Favourites
            </a>
            <a className="btn btn-success btn-block" href="/food" role="button">
              Show Non-favourites
            </a>
            <a className="btn btn-success btn-block" href="/food/edit" role="button">
              Edit Place(s)
            </a>
            <a className="btn btn-success btn-block" href="/food/add" role="button">
              Add New Place
            </a>
          </div>
        </div>
      </Default>
    );
  }
}

module.exports = Curate;
