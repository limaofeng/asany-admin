import { useMemo, useState } from 'react';

import { FetchResult, InternalRefetchQueriesInclude } from '@apollo/client';

import { Form, Toast } from '@/metronic';
import type { FormInstance } from '@/metronic/Form';
import type { Customer } from '@/types';
import { delay } from '@/utils';

import { useCreateCustomerMutation, useUpdateCustomerMutation } from './api';

function useCustomerSubmit(
  data: Customer,
  options?: {
    onSubmitted?: (data: any) => void;
    transform?: (data: any) => any;
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
    transform = (x: any) => x,
  } = options || {};

  const [createCustomer] = useCreateCustomerMutation({
    fetchPolicy: 'no-cache',
    refetchQueries: options?.refetchQueries,
  });
  const [updateCustomer] = useUpdateCustomerMutation({
    fetchPolicy: 'no-cache',
    refetchQueries: options?.refetchQueries,
  });

  const handleSubmit = useMemo(() => {
    if (!!data?.id) {
      return async () => {
        setConfirmLoading(true);
        try {
          const input = transform(await form.validateFields());
          const { data: rdata } = await Toast.promise(
            delay(
              updateCustomer({
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
          onSubmitted(rdata.updateCustomer);
          setConfirmLoading(false);
        } catch (e) {
          setConfirmLoading(false);
          console.error(e);
        }
      };
    } else {
      return async () => {
        setConfirmLoading(true);
        try {
          const input = transform(await form.validateFields());
          const { data: rdata } = await Toast.promise(
            delay(
              createCustomer({
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
          onSubmitted(rdata.createCustomer);
          setConfirmLoading(false);
        } catch (e) {
          setConfirmLoading(false);
        }
      };
    }
  }, [createCustomer, data?.id, form, onSubmitted, updateCustomer]);

  return [handleSubmit, { form, submitting: confirmLoading }];
}

export default useCustomerSubmit;
