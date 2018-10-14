const React = require('react');
const Default = require('../layout/Default');

class Eat extends React.Component {
  render() {
    return (
      <Default currentUser={this.props.currentUser.login}>
        <div className="container mx-auto">
          <div className="row mt-2">
            <div className="alert alert-info w-100 text-center" role="alert">
              <h4 className="alert-heading">Curate</h4>
              <p>Add, select or edit your own eating spots here!</p>
            </div>
          </div>
          <div className="row mt-3">
            <a class="btn btn-success btn-block" href="add" role="button">
              Add New Place
            </a>
            <a class="btn btn-info btn-block" href="fave" role="button">
              Favourite Place
            </a>
            <a class="btn btn-warning btn-block" href="edit" role="button">
              Edit Place
            </a>
          </div>
        </div>
      </Default>
    );
  }
}

module.exports = Eat;
