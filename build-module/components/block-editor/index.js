import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { useMemo, useCallback } from '@wordpress/element';
import { uploadMedia } from '@wordpress/media-utils';
import { useEntityProp } from '@wordpress/core-data';
import { parse, serialize } from '@wordpress/blocks';
import { BlockEditorProvider, BlockEditorKeyboardShortcuts, BlockInspector, WritingFlow, ObserveTyping, BlockList, ButtonBlockerAppender } from '@wordpress/block-editor';
/**
 * Internal dependencies
 */

import Sidebar from '../sidebar';
export default function BlockEditor(_ref) {
  var _settings = _ref.settings;
  var canUserCreateMedia = useSelect(function (select) {
    var _canUserCreateMedia = select('core').canUser('create', 'media');

    return _canUserCreateMedia || _canUserCreateMedia !== false;
  }, []);
  var settings = useMemo(function () {
    if (!canUserCreateMedia) {
      return _settings;
    }

    return _objectSpread({}, _settings, {
      mediaUpload: function mediaUpload(_ref2) {
        var _onError = _ref2.onError,
            rest = _objectWithoutProperties(_ref2, ["onError"]);

        uploadMedia(_objectSpread({
          wpAllowedMimeTypes: _settings.allowedMimeTypes,
          onError: function onError(_ref3) {
            var message = _ref3.message;
            return _onError(message);
          }
        }, rest));
      }
    });
  }, [canUserCreateMedia, _settings]);

  var _useEntityProp = useEntityProp('postType', 'wp_template', 'content'),
      _useEntityProp2 = _slicedToArray(_useEntityProp, 2),
      content = _useEntityProp2[0],
      _setContent = _useEntityProp2[1];

  var initialBlocks = useMemo(function () {
    if (typeof content !== 'function') {
      var parsedContent = parse(content);
      return parsedContent.length ? parsedContent : undefined;
    }
  }, []);

  var _useEntityProp3 = useEntityProp('postType', 'wp_template', 'blocks'),
      _useEntityProp4 = _slicedToArray(_useEntityProp3, 2),
      _useEntityProp4$ = _useEntityProp4[0],
      blocks = _useEntityProp4$ === void 0 ? initialBlocks : _useEntityProp4$,
      setBlocks = _useEntityProp4[1];

  var setContent = useCallback(function (nextBlocks) {
    setBlocks(nextBlocks);

    _setContent(serialize(nextBlocks));
  }, []);
  return createElement(BlockEditorProvider, {
    settings: settings,
    value: blocks,
    onInput: setBlocks,
    onChange: setContent
  }, createElement(BlockEditorKeyboardShortcuts, null), createElement(Sidebar.InspectorFill, null, createElement(BlockInspector, null)), createElement("div", {
    className: "editor-styles-wrapper"
  }, createElement(WritingFlow, null, createElement(ObserveTyping, null, createElement(BlockList, {
    className: "edit-site-block-editor__block-list",
    renderAppender: ButtonBlockerAppender
  })))));
}
//# sourceMappingURL=index.js.map