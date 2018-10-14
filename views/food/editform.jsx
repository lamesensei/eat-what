const React = require('react');
const Default = require('../layout/Default');

class EditForm extends React.Component {
  render() {
    const locationList = this.props.location.map((item) => {
      if (item.id === this.props.place.location_id) {
        return (
          <option key={item.id} value={item.id} selected>
            {item.name}
          </option>
        );
      }
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    });
    return (
      <Default currentUser={this.props.currentUser.login}>
        <div className="container">
          <div className="row mt-2">
            <div className="alert alert-info w-100 text-center" role="alert">
              <h4 className="alert-heading">Edit Place</h4>
            </div>
          </div>
          <form className="" action={`/food/${this.props.place.id}/edit?_method=PUT`} method="post">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.props.place.name}
                required
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <select className="form-control" name="location">
                {locationList}
              </select>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={this.props.place.description}
                required
              />
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

module.exports = EditForm;
