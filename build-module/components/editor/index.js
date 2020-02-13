import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { SlotFillProvider, DropZoneProvider, Popover, navigateRegions } from '@wordpress/components';
import { EntityProvider } from '@wordpress/core-data';
/**
 * Internal dependencies
 */

import Notices from '../notices';
import Header from '../header';
import Sidebar from '../sidebar';
import BlockEditor from '../block-editor';

function Editor(_ref) {
  var settings = _ref.settings;
  var template = useSelect(function (select) {
    return select('core').getEntityRecord('postType', 'wp_template', settings.templateId);
  }, []);
  return template ? createElement(SlotFillProvider, null, createElement(DropZoneProvider, null, createElement(EntityProvider, {
    kind: "postType",
    type: "wp_template",
    id: settings.templateId
  }, createElement(Notices, null), createElement(Header, null), createElement(Sidebar, null), createElement(BlockEditor, {
    settings: settings
  }), createElement(Popover.Slot, null)))) : null;
}

export default navigateRegions(Editor);
//# sourceMappingURL=index.js.map