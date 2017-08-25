'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_React$PureComponent) {
  _inherits(Pagination, _React$PureComponent);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _this.range = 2;
    return _this;
  }

  _createClass(Pagination, [{
    key: 'inRange',
    value: function inRange(n, min, max) {
      return n >= min && n <= max;
    }
  }, {
    key: 'map',
    value: function map(start, end, callback) {
      var result = [];

      for (var i = start; i <= end; i++) {
        result.push(callback(i));
      }

      return result;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty(i, start, end, active) {
      return this.inRange(i, start + 1, end - 1) && !this.inRange(i, active - this.range, active + this.range);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var active = this.props.active;
      var empty = false;

      return _react2.default.createElement(
        'div',
        { className: 'paginator' },
        this.map(1, this.props.count, function (i) {
          var nextIsEmpty = _this2.isEmpty(i, 1, _this2.props.count, active);
          if (empty && nextIsEmpty) return null;

          empty = nextIsEmpty;

          return empty ? _react2.default.createElement(
            'div',
            { key: i, className: 'page' },
            '...'
          ) : _react2.default.createElement(
            'div',
            {
              onClick: _this2.props.onClickHandler(i),
              key: i,
              className: 'page ' + (i == active ? 'active' : '')
            },
            i
          );
        })
      );
    }
  }]);

  return Pagination;
}(_react2.default.PureComponent);

Pagination.propTypes = {
  onClickHandler: _propTypes2.default.func,
  active: _propTypes2.default.number,
  count: _propTypes2.default.number
};

exports.default = Pagination;