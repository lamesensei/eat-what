const React = require('react');
const Default = require('../layout/Default');

class FaveList extends React.Component {
  render() {
    const listItems = this.props.places.map(item => (
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control text-center bg-success text-white font-weight-bold"
          defaultValue={item.name}
          disabled
        />
        <div class="input-group-append">
          <form action={`/food/${item.id}/fave/delete?_method=DELETE`} method="post">
            <button type="submit" className="btn-danger btn">
              <i class="fas fa-times" />
            </button>
          </form>
        </div>
      </div>
    ));

    return (
      <Default currentUser={this.props.currentUser.login}>
        <div className="container mx-auto">
          <div className="row mt-2">
            <div className="alert alert-info w-100 text-center" role="alert">
              <h4 className="alert-heading">Faves</h4>
              <hr />
              <p>Remove a favourite by pressing the red X button.</p>
            </div>
          </div>
          <div className="row mt-3 foodlist">{listItems}</div>
        </div>
      </Default>
    );
  }
}

module.exports = FaveList;
