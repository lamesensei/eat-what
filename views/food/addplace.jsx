const React = require('react');
const Default = require('../layout/Default');

class AddPlace extends React.Component {
  render() {
    console.log(this.props.location);
    const locationList = this.props.location.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
    return (
      <Default currentUser={this.props.currentUser.login}>
        <div className="container">
          <form className="" action="/food/new" method="post">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" name="name" required />
            </div>
            <div className="form-group">
              <label>Location</label>
              <select className="form-control" name="location">
                {locationList}
              </select>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input type="text" className="form-control" name="description" required />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
              <i className="fas fa-check" />
            </button>
          </form>
        </div>
      </Default>
    );
  }
}

module.exports = AddPlace;
