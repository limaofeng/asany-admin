import { useMemo, useState } from 'react';

import { FetchResult, InternalRefetchQueriesInclude } from '@apollo/client';

import { Form, Toast } from '@/metronic';
import type { FormInstance } from '@/metronic/Form';
import type { CustomerStore } from '@/types';
import { delay } from '@/utils';

import {
  useCreateCustomerStoreMutation,
  useUpdateCustomerStoreMutation,
} from './api';

function useCustomerStoreSubmit(
  data: CustomerStore,
  options?: {
    onSubmitted?: (data: any, type: 'create' | 'update') => void;
    transform?: (data: any, type: 'create' | 'update') => any;
    refetchQueries?:
      | ((result: FetchResult<any>) => InternalRefetchQueriesInclude)
      | InternalRefetchQueriesInclude;
    messages?: {
      pending?: string;
      success?: {
        render: () => React.ReactNode;
      };
      error?: string;
    };
  },
): [
  () => Promise<void>,
  {
    form: FormInstance;
    submitting: boolean;
  },
] {
  const form = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const {
    messages,
    onSubmitted = () => {},
    transform = (values: any) => values,
  } = options || {};

  const [createCustomerStore] = useCreateCustomerStoreMutation({
    fetchPolicy: 'no-cache',
    refetchQueries: options?.refetchQueries,
  });
  const [updateCustomerStore] = useUpdateCustomerStoreMutation({
    fetchPolicy: 'no-cache',
    refetchQueries: options?.refetchQueries,
  });

  const handleSubmit = useMemo(() => {
    if (!!data?.id) {
      return async () => {
        setConfirmLoading(true);
        try {
          const input = transform(await form.validateFields(), 'update');
          const { data: rdata } = await Toast.promise(
            delay(
              updateCustomerStore({
                variables: { id: data.id, input: { ...input } },
              }),
              350,
            ),
            {
              pending: messages?.pending || '保存中...',
              success: {
                render: () => (
                  <>
                    路由 <strong>{input.name}</strong> 保存成功
                  </>
                ),
              },
              error: messages?.error || '保存出错',
            },
            {
              duration: 2000,
              placement: 'top-center',
            },
          );
          onSubmitted(rdata.result, 'update');
          setConfirmLoading(false);
        } catch (e) {
          setConfirmLoading(false);
        }
      };
    } else {
      return async () => {
        setConfirmLoading(true);
        try {
          const input = transform(await form.validateFields(), 'create');
          const { data: rdata } = await Toast.promise(
            delay(
              createCustomerStore({
                variables: {
                  input: { ...input },
                },
              }),
              350,
            ),
            {
              pending: messages?.pending || '提交中...',
              success: {
                render: messages?.pending || '提交成功',
              },
              error: messages?.error || '提交出错',
            },
            {
              duration: 2000,
              placement: 'top-center',
            },
          );
          onSubmitted(rdata.result, 'create');
          setConfirmLoading(false);
        } catch (e) {
          setConfirmLoading(false);
        }
      };
    }
  }, [
    createCustomerStore,
    data?.id,
    form,
    onSubmitted,
    updateCustomerStore,
    transform,
  ]);

  return [handleSubmit, { form, submitting: confirmLoading }];
}

export default useCustomerStoreSubmit;
