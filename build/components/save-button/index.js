"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SaveButton;

var _element = require("@wordpress/element");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _coreData = require("@wordpress/core-data");

var _data = require("@wordpress/data");

var _components = require("@wordpress/components");

var _i18n = require("@wordpress/i18n");

var _editor = require("@wordpress/editor");

/**
 * WordPress dependencies
 */
function SaveButton() {
  var _useEntityProp = (0, _coreData.useEntityProp)('postType', 'wp_template', 'status'),
      _useEntityProp2 = (0, _slicedToArray2.default)(_useEntityProp, 2),
      setStatus = _useEntityProp2[1]; // Publish template if not done yet.


  (0, _element.useEffect)(function () {
    return setStatus('publish');
  }, []);

  var _useSelect = (0, _data.useSelect)(function (select) {
    var _select = select('core'),
        getEntityRecordChangesByRecord = _select.getEntityRecordChangesByRecord,
        isSavingEntityRecord = _select.isSavingEntityRecord;

    var entityRecordChangesByRecord = getEntityRecordChangesByRecord();
    var changedKinds = Object.keys(entityRecordChangesByRecord);
    return {
      isDirty: changedKinds.length > 0,
      isSaving: changedKinds.some(function (changedKind) {
        return Object.keys(entityRecordChangesByRecord[changedKind]).some(function (changedName) {
          return Object.keys(entityRecordChangesByRecord[changedKind][changedName]).some(function (changedKey) {
            return isSavingEntityRecord(changedKind, changedName, changedKey);
          });
        });
      })
    };
  }),
      isDirty = _useSelect.isDirty,
      isSaving = _useSelect.isSaving;

  var disabled = !isDirty || isSaving;

  var _useState = (0, _element.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var open = (0, _element.useCallback)(setIsOpen.bind(null, true), []);
  var close = (0, _element.useCallback)(setIsOpen.bind(null, false), []);
  return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_components.Button, {
    isPrimary: true,
    "aria-disabled": disabled,
    disabled: disabled,
    isBusy: isSaving,
    onClick: disabled ? undefined : open
  }, (0, _i18n.__)('Update')), (0, _element.createElement)(_editor.EntitiesSavedStates, {
    isOpen: isOpen,
    onRequestClose: close
  }));
}
//# sourceMappingURL=index.js.map