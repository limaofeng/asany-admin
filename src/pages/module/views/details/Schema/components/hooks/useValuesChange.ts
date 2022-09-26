import { useCallback, useEffect, useState } from 'react';

import { pinyin } from 'pinyin-pro';

import type { FormInstance } from '@/metronic/typings';

function useValuesChange(form: FormInstance<any>, mode: 'new' | 'edit') {
  const [codeLinkageable, setCodeLinkageable] = useState(true);
  const [dbColumnNameLinkageable, setDbColumnNameLinkageable] = useState(true);

  const handleValuesChange = useCallback(
    (changedValues: any) => {
      if (Object.hasOwn(changedValues, 'code')) {
        setCodeLinkageable(false);
      }
      if (Object.hasOwn(changedValues, 'databaseColumnName')) {
        setDbColumnNameLinkageable(false);
      }
      if (Object.hasOwn(changedValues, 'name') && codeLinkageable) {
        const pyCode = pinyin(changedValues.name, { toneType: 'none', type: 'array' }).join('');
        form.setFieldValue('code', pyCode);
        if (dbColumnNameLinkageable) {
          form.setFieldValue('databaseColumnName', pyCode.toUpperCase());
        }
      }
      if (Object.hasOwn(changedValues, 'code') && dbColumnNameLinkageable) {
        form.setFieldValue('databaseColumnName', changedValues.code.toUpperCase());
      }
    },
    [codeLinkageable, dbColumnNameLinkageable, form],
  );

  useEffect(() => {
    if (mode == 'edit') {
      setCodeLinkageable(false);
      setDbColumnNameLinkageable(false);
    } else {
      setCodeLinkageable(true);
      setDbColumnNameLinkageable(true);
    }
  }, [mode]);

  return handleValuesChange;
}

export default useValuesChange;
