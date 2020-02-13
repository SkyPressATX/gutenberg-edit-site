"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = initialize;

var _element = require("@wordpress/element");

require("@wordpress/notices");

var _blockLibrary = require("@wordpress/block-library");

require("./hooks");

var _editor = _interopRequireDefault(require("./components/editor"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

/**
 * Initializes the site editor screen.
 *
 * @param {string} id       ID of the root element to render the screen in.
 * @param {Object} settings Editor settings.
 */
function initialize(id, settings) {
  (0, _blockLibrary.registerCoreBlocks)();

  if (process.env.GUTENBERG_PHASE === 2) {
    (0, _blockLibrary.__experimentalRegisterExperimentalCoreBlocks)(settings);
  }

  (0, _element.render)((0, _element.createElement)(_editor.default, {
    settings: settings
  }), document.getElementById(id));
}
//# sourceMappingURL=index.js.map