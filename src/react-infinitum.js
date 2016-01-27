import React from 'react';

class Infinitum extends React.Component {

  componentDidMount() {
    let w = window;
    let d = document;

    w.addEventListener('scroll', () => {
      let wintop = w.scrollY;
      let docheight = this._getDocHeight();
      let winheight = w.innerHeight;
      let scrolltrigger = this.props.trigger;

      if ((wintop/(docheight-winheight)) > scrolltrigger) {
        if (this.props.loadMore) {
          this.props.onReachBottom();
        }
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
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