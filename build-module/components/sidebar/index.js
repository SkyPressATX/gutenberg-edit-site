import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { createSlotFill, Panel } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

var _createSlotFill = createSlotFill('EditSiteSidebarInspector'),
    InspectorSlot = _createSlotFill.Slot,
    InspectorFill = _createSlotFill.Fill;

function Sidebar() {
  return createElement("div", {
    className: "edit-site-sidebar",
    role: "region",
    "aria-label": __('Site editor advanced settings.'),
    tabIndex: "-1"
  }, createElement(Panel, {
    header: __('Inspector')
  }, createElement(InspectorSlot, {
    bubblesVirtually: true
  })));
}

Sidebar.InspectorFill = InspectorFill;
export default Sidebar;
//# sourceMappingURL=index.js.map