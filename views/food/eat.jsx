const React = require('react');
const Default = require('../layout/Default');

class Eat extends React.Component {
  render() {
    return (
      <Default currentUser={this.props.currentUser.login}>
        <div className="container mx-auto">
          <div className="row mt-2">
            <div className="alert alert-info w-100 text-center" role="alert">
              <h4 className="alert-heading">{this.props.location}</h4>
            </div>
            <div className="textoverlaycontainer w-100">
              <a href="/food/solo">
                <img src="/media/solo.jpg" alt="SOLO" className="img-fluid rounded" />
                <p className="textoverlaycenter display-3 logo shadow">SOLO</p>
              </a>
            </div>
          </div>
          <div className="row mt-3">
            <div className="textoverlaycontainer w-100">
              <a href="/food/friends">
                <img src="/media/friends.jpg" alt="FRIENDS" className="img-fluid rounded" />
                <p className="textoverlaycenter display-3 logo shadow">FRIENDS</p>
              </a>
            </div>
          </div>
        </div>
      </Default>
    );
  }
}

module.exports = Eat;
