import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */

import SaveButton from '../save-button';
export default function Header() {
  return createElement("div", {
    className: "edit-site-header",
    role: "region",
    "aria-label": __('Site editor top bar.'),
    tabIndex: "-1"
  }, createElement("h1", {
    className: "edit-site-header__title"
  }, __('Site Editor'), " ", __('(beta)')), createElement("div", {
    className: "edit-site-header__actions"
  }, createElement(SaveButton, null)));
}
//# sourceMappingURL=index.js.map