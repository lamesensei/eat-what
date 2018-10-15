const React = require('react');
const Default = require('../layout/Default');

class AddForm extends React.Component {
  render() {
    const locationList = this.props.location.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
    return (
      <Default currentUser={this.props.currentUser.login}>
        <div className="container">
          <div className="row mt-2">
            <div className="alert alert-info w-100 text-center" role="alert">
              <h4 className="alert-heading">Add New Place</h4>
            </div>
          </div>
          <form className="" action="/food" method="post" encType="multipart/form-data">
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
              <label>Add Photo</label>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="validatedCustomFile"
                  name="photo"
                  required
                />
                <label class="custom-file-label" for="validatedCustomFile">
                  Choose File...
                </label>
              </div>
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

module.exports = AddForm;
