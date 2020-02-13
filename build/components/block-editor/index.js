"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlockEditor;

var _element = require("@wordpress/element");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _data = require("@wordpress/data");

var _mediaUtils = require("@wordpress/media-utils");

var _coreData = require("@wordpress/core-data");

var _blocks = require("@wordpress/blocks");

var _blockEditor = require("@wordpress/block-editor");

var _sidebar = _interopRequireDefault(require("../sidebar"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function BlockEditor(_ref) {
  var _settings = _ref.settings;
  var canUserCreateMedia = (0, _data.useSelect)(function (select) {
    var _canUserCreateMedia = select('core').canUser('create', 'media');

    return _canUserCreateMedia || _canUserCreateMedia !== false;
  }, []);
  var settings = (0, _element.useMemo)(function () {
    if (!canUserCreateMedia) {
      return _settings;
    }

    return (0, _objectSpread2.default)({}, _settings, {
      mediaUpload: function mediaUpload(_ref2) {
        var _onError = _ref2.onError,
            rest = (0, _objectWithoutProperties2.default)(_ref2, ["onError"]);
        (0, _mediaUtils.uploadMedia)((0, _objectSpread2.default)({
          wpAllowedMimeTypes: _settings.allowedMimeTypes,
          onError: function onError(_ref3) {
            var message = _ref3.message;
            return _onError(message);
          }
        }, rest));
      }
    });
  }, [canUserCreateMedia, _settings]);

  var _useEntityProp = (0, _coreData.useEntityProp)('postType', 'wp_template', 'content'),
      _useEntityProp2 = (0, _slicedToArray2.default)(_useEntityProp, 2),
      content = _useEntityProp2[0],
      _setContent = _useEntityProp2[1];

  var initialBlocks = (0, _element.useMemo)(function () {
    if (typeof content !== 'function') {
      var parsedContent = (0, _blocks.parse)(content);
      return parsedContent.length ? parsedContent : undefined;
    }
  }, []);

  var _useEntityProp3 = (0, _coreData.useEntityProp)('postType', 'wp_template', 'blocks'),
      _useEntityProp4 = (0, _slicedToArray2.default)(_useEntityProp3, 2),
      _useEntityProp4$ = _useEntityProp4[0],
      blocks = _useEntityProp4$ === void 0 ? initialBlocks : _useEntityProp4$,
      setBlocks = _useEntityProp4[1];

  var setContent = (0, _element.useCallback)(function (nextBlocks) {
    setBlocks(nextBlocks);

    _setContent((0, _blocks.serialize)(nextBlocks));
  }, []);
  return (0, _element.createElement)(_blockEditor.BlockEditorProvider, {
    settings: settings,
    value: blocks,
    onInput: setBlocks,
    onChange: setContent
  }, (0, _element.createElement)(_blockEditor.BlockEditorKeyboardShortcuts, null), (0, _element.createElement)(_sidebar.default.InspectorFill, null, (0, _element.createElement)(_blockEditor.BlockInspector, null)), (0, _element.createElement)("div", {
    className: "editor-styles-wrapper"
  }, (0, _element.createElement)(_blockEditor.WritingFlow, null, (0, _element.createElement)(_blockEditor.ObserveTyping, null, (0, _element.createElement)(_blockEditor.BlockList, {
    className: "edit-site-block-editor__block-list",
    renderAppender: _blockEditor.ButtonBlockerAppender
  })))));
}
//# sourceMappingURL=index.js.map