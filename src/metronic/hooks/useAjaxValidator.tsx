import { useCallback, useRef } from 'react';

import type { RuleObject } from 'rc-field-form/lib/interface';

function useAjaxValidator(
  callback: (
    rule: RuleObject,
    value: any,
    signal: AbortSignal,
  ) => Promise<boolean>,
) {
  const abortController = useRef(new AbortController());

  const validator = useCallback(
    async (rule: RuleObject, value: any) => {
      if (!value) {
        return;
      }
      if (abortController.current) {
        abortController.current.abort();
      }
      abortController.current = new AbortController();
      if (!(await callback(rule, value, abortController.current.signal))) {
        throw new Error(rule.message as string);
      }
    },
    [callback],
  );
  return validator;
}

export default useAjaxValidator;
