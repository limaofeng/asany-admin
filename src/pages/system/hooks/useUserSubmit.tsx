import { useMemo, useState } from 'react';

import { FetchResult, InternalRefetchQueriesInclude } from '@apollo/client';

import { Form, Toast } from '@/metronic';
import type { FormInstance } from '@/metronic/Form';
import type { User } from '@/types';
import { delay } from '@/utils';

import { useCreateUserMutation, useUpdateUserMutation } from './api';

function useUserSubmit(
  data: User,
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

  const [createUser] = useCreateUserMutation({
    fetchPolicy: 'no-cache',
    refetchQueries: options?.refetchQueries,
  });
  const [updateUser] = useUpdateUserMutation({
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
              updateUser({
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
          onSubmitted(rdata.result);
          setConfirmLoading(false);
        } catch (e) {
          setConfirmLoading(false);
        }
      };
    } else {
      return async () => {
        setConfirmLoading(true);
        try {
          const input = transform(await form.validateFields());
          const { data: rdata } = await Toast.promise(
            delay(
              createUser({
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
          onSubmitted(rdata.result);
          setConfirmLoading(false);
        } catch (e) {
          setConfirmLoading(false);
        }
      };
    }
  }, [createUser, data?.id, form, onSubmitted, updateUser]);

  return [handleSubmit, { form, submitting: confirmLoading }];
}

export default useUserSubmit;
