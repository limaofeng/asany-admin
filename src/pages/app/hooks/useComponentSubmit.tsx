import { useMemo, useState } from 'react';

import {
  LoadComponentsDocument,
  useCreateComponentMutation,
  useUpdateComponentMutation,
} from '.';

import { Form, Toast } from '@/metronic';
import type { FormInstance } from '@/metronic/Form';
import type { Component } from '@/types';
import { delay } from '@/utils';

function useComponentSubmit(
  data: Component,
  setData: any,
): [
  () => Promise<void>,
  {
    form: FormInstance;
    submitting: boolean;
  },
] {
  const form = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [createComponent] = useCreateComponentMutation({
    fetchPolicy: 'no-cache',
    refetchQueries: [
      {
        query: LoadComponentsDocument,
        variables: {
          id: data?.libraryId,
        },
      },
    ],
  });
  const [updateComponent] = useUpdateComponentMutation({
    fetchPolicy: 'no-cache',
    refetchQueries: [
      {
        query: LoadComponentsDocument,
        variables: {
          id: data?.libraryId,
        },
      },
    ],
  });

  const handleSubmit = useMemo(() => {
    if (!!data?.id) {
      return async () => {
        setConfirmLoading(true);
        try {
          const input = await form.validateFields();
          const { data: rdata } = await Toast.promise(
            delay(
              updateComponent({
                variables: {
                  id: data.id,
                  input: { ...input, libraryId: data.libraryId },
                },
              }),
              350,
            ),
            {
              pending: '提交中...',
              success: {
                render: () => (
                  <>
                    组件 <strong>{input.title}</strong> 保存成功
                  </>
                ),
              },
              error: '提交出错',
            },
            {
              duration: 2000,
              placement: 'top-center',
            },
          );
          setData(rdata.updateComponent);
          setConfirmLoading(false);
        } catch (e) {
          setConfirmLoading(false);
        }
      };
    } else {
      return async () => {
        setConfirmLoading(true);
        try {
          const input = await form.validateFields();
          const { data: rdata } = await Toast.promise(
            delay(
              createComponent({
                variables: { input: { ...input, libraryId: data.libraryId } },
              }),
              350,
            ),
            {
              pending: '提交中...',
              success: {
                render: () => (
                  <>
                    组件 <strong>{input.name}</strong> 新增成功
                  </>
                ),
              },
              error: '提交出错',
            },
            {
              duration: 2000,
              placement: 'top-center',
            },
          );
          setData(rdata.createComponent);
          setConfirmLoading(false);
        } catch (e) {
          setConfirmLoading(false);
        }
      };
    }
  }, [
    createComponent,
    data?.libraryId,
    data?.id,
    form,
    setData,
    updateComponent,
  ]);

  console.log('data', data);

  return [handleSubmit, { form, submitting: confirmLoading }];
}

export default useComponentSubmit;
