"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _data = require("@wordpress/data");

var _components = require("@wordpress/components");

var _coreData = require("@wordpress/core-data");

var _notices = _interopRequireDefault(require("../notices"));

var _header = _interopRequireDefault(require("../header"));

var _sidebar = _interopRequireDefault(require("../sidebar"));

var _blockEditor = _interopRequireDefault(require("../block-editor"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function Editor(_ref) {
  var settings = _ref.settings;
  var template = (0, _data.useSelect)(function (select) {
    return select('core').getEntityRecord('postType', 'wp_template', settings.templateId);
  }, []);
  return template ? (0, _element.createElement)(_components.SlotFillProvider, null, (0, _element.createElement)(_components.DropZoneProvider, null, (0, _element.createElement)(_coreData.EntityProvider, {
    kind: "postType",
    type: "wp_template",
    id: settings.templateId
  }, (0, _element.createElement)(_notices.default, null), (0, _element.createElement)(_header.default, null), (0, _element.createElement)(_sidebar.default, null), (0, _element.createElement)(_blockEditor.default, {
    settings: settings
  }), (0, _element.createElement)(_components.Popover.Slot, null)))) : null;
}

var _default = (0, _components.navigateRegions)(Editor);

exports.default = _default;
//# sourceMappingURL=index.js.map