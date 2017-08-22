'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = require(SRC + 'components/App');
var store = require(SRC + 'middle/store');

module.exports = function (data) {
  store.dispatch({ type: 'setEntries', data: data });

  _server2.default.renderToString(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(App, null)
  ));
};
