import React from 'react';

var reachBottom = false;

class Infinitum extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this._checkWindowReachBottom);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._checkWindowReachBottom);
  }

  _checkWindowReachBottom() {
    let w = window;

    let wintop = w.scrollY;
    let docheight = this._getDocHeight();
    let winheight = w.innerHeight;
    let scrolltrigger = this.props.trigger;

    if ((wintop/(docheight-winheight)) > scrolltrigger) {
      if (this.props.loadMore && !reachBottom) {
        reachBottom = true;

        this.props.onReachBottom();
      }
    }
    else {
      reachBottom = false;
    }
  }

  _getDocHeight() {
    let d = document;

    return Math.max(
      d.body.scrollHeight, d.documentElement.scrollHeight,
      d.body.offsetHeight, d.documentElement.offsetHeight,
      d.body.clientHeight, d.documentElement.clientHeight
    );
  }

  render() {
    return (
      <div className="infinitum">
        <div className="infinitum__container">
          {this.props.children}
        </div>
      </div>
    );
  }

}

Infinitum.defaultProps = {
  trigger: 0.85,
  loadMore: true
};

Infinitum.propTypes = {
  onReachBottom: React.PropTypes.func.isRequired,
  trigger: React.PropTypes.number,
  loadMore: React.PropTypes.bool
};

export default Infinitum;