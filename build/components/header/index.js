"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _element = require("@wordpress/element");

var _i18n = require("@wordpress/i18n");

var _saveButton = _interopRequireDefault(require("../save-button"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function Header() {
  return (0, _element.createElement)("div", {
    className: "edit-site-header",
    role: "region",
    "aria-label": (0, _i18n.__)('Site editor top bar.'),
    tabIndex: "-1"
  }, (0, _element.createElement)("h1", {
    className: "edit-site-header__title"
  }, (0, _i18n.__)('Site Editor'), " ", (0, _i18n.__)('(beta)')), (0, _element.createElement)("div", {
    className: "edit-site-header__actions"
  }, (0, _element.createElement)(_saveButton.default, null)));
}
//# sourceMappingURL=index.js.map