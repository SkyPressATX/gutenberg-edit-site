import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createElement, Fragment } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { useEntityProp } from '@wordpress/core-data';
import { useEffect, useState, useCallback } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { EntitiesSavedStates } from '@wordpress/editor';
export default function SaveButton() {
  var _useEntityProp = useEntityProp('postType', 'wp_template', 'status'),
      _useEntityProp2 = _slicedToArray(_useEntityProp, 2),
      setStatus = _useEntityProp2[1]; // Publish template if not done yet.


  useEffect(function () {
    return setStatus('publish');
  }, []);

  var _useSelect = useSelect(function (select) {
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

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var open = useCallback(setIsOpen.bind(null, true), []);
  var close = useCallback(setIsOpen.bind(null, false), []);
  return createElement(Fragment, null, createElement(Button, {
    isPrimary: true,
    "aria-disabled": disabled,
    disabled: disabled,
    isBusy: isSaving,
    onClick: disabled ? undefined : open
  }, __('Update')), createElement(EntitiesSavedStates, {
    isOpen: isOpen,
    onRequestClose: close
  }));
}
//# sourceMappingURL=index.js.map