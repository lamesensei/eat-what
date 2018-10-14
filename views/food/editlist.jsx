const React = require('react');
const Default = require('../layout/Default');

class EditList extends React.Component {
  render() {
    let errorMsg;
    if (this.props.places.length === 0) {
      errorMsg = (
        <div className="row mt-2">
          <div className="alert alert-danger w-100 text-center" role="alert">
            <h4 className="alert-heading">You have no places.</h4>
            <p>
              Add one
              <a href="add" className="font-weight-bold">
                here.
              </a>
            </p>
          </div>
        </div>
      );
    }
    const listItems = this.props.places.map(item => (
      <a className="btn btn-success btn-block" href={`${item.id}/edit`} role="button">
        {item.name}
      </a>
    ));
    return (
      <Default currentUser={this.props.currentUser.login}>
        <div className="container mx-auto">
          <div className="row mt-2">
            <div className="alert alert-info w-100 text-center" role="alert">
              <h4 className="alert-heading">Edit</h4>
              <p>Select a place to edit.</p>
            </div>
          </div>
          <div className="row mt-3">{listItems}</div>
          {errorMsg}
        </div>
      </Default>
    );
  }
}

module.exports = EditList;
