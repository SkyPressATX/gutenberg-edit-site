"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _components = require("@wordpress/components");

var _i18n = require("@wordpress/i18n");

/**
 * WordPress dependencies
 */
var _createSlotFill = (0, _components.createSlotFill)('EditSiteSidebarInspector'),
    InspectorSlot = _createSlotFill.Slot,
    InspectorFill = _createSlotFill.Fill;

function Sidebar() {
  return (0, _element.createElement)("div", {
    className: "edit-site-sidebar",
    role: "region",
    "aria-label": (0, _i18n.__)('Site editor advanced settings.'),
    tabIndex: "-1"
  }, (0, _element.createElement)(_components.Panel, {
    header: (0, _i18n.__)('Inspector')
  }, (0, _element.createElement)(InspectorSlot, {
    bubblesVirtually: true
  })));
}

Sidebar.InspectorFill = InspectorFill;
var _default = Sidebar;
exports.default = _default;
//# sourceMappingURL=index.js.map