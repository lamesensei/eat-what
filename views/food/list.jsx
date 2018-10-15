const React = require('react');
const Default = require('../layout/Default');

class List extends React.Component {
  render() {
    return (
      <Default currentUser={this.props.currentUser.login}>
        <div className="container mx-auto">
          <div className="row mt-2">
            <div className="alert alert-info w-100 text-center" role="alert">
              <h4 className="alert-heading">Food List</h4>
            </div>
          </div>
          <div className="row mt-3 foodlist">
            <script src="/scripts/foodlist.js" />
          </div>
        </div>
      </Default>
    );
  }
}

module.exports = List;
