'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reachBottom = false;

var Infinitum = function (_React$Component) {
  _inherits(Infinitum, _React$Component);

  function Infinitum() {
    _classCallCheck(this, Infinitum);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Infinitum).apply(this, arguments));
  }

  _createClass(Infinitum, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this._checkWindowReachBottom);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this._checkWindowReachBottom);
    }
  }, {
    key: '_checkWindowReachBottom',
    value: function _checkWindowReachBottom() {
      var w = window;

      var wintop = w.scrollY;
      var docheight = this._getDocHeight();
      var winheight = w.innerHeight;
      var scrolltrigger = this.props.trigger;

      if (wintop / (docheight - winheight) > scrolltrigger) {
        if (this.props.loadMore && !reachBottom) {
          reachBottom = true;

          this.props.onReachBottom();
        }
      } else {
        reachBottom = false;
      }
    }
  }, {
    key: '_getDocHeight',
    value: function _getDocHeight() {
      var d = document;

      return Math.max(d.body.scrollHeight, d.documentElement.scrollHeight, d.body.offsetHeight, d.documentElement.offsetHeight, d.body.clientHeight, d.documentElement.clientHeight);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'infinitum' },
        _react2.default.createElement(
          'div',
          { className: 'infinitum__container' },
          this.props.children
        )
      );
    }
  }]);

  return Infinitum;
}(_react2.default.Component);

Infinitum.defaultProps = {
  trigger: 0.85,
  loadMore: true
};

Infinitum.propTypes = {
  onReachBottom: _react2.default.PropTypes.func.isRequired,
  trigger: _react2.default.PropTypes.number,
  loadMore: _react2.default.PropTypes.bool
};

exports.default = Infinitum;