import { useMemo, useState } from 'react';

import { Form, Toast } from '@/metronic';
import type { FormInstance } from '@/metronic/Form';
import type { Route } from '@/types';
import { delay } from '@/utils';

import {
  LoadRoutesDocument,
  useCreateRouteMutation,
  useUpdateRouteMutation,
} from '../hooks';

function useRouteSubmit(
  data: Route,
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

  const [createRoute] = useCreateRouteMutation({
    fetchPolicy: 'no-cache',
    refetchQueries: [
      {
        query: LoadRoutesDocument,
        variables: {
          id: data?.application?.id,
        },
      },
    ],
  });
  const [updateRoute] = useUpdateRouteMutation({
    fetchPolicy: 'no-cache',
    refetchQueries: [
      {
        query: LoadRoutesDocument,
        variables: {
          id: data?.application?.id,
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
              updateRoute({ variables: { id: data.id, input: { ...input } } }),
              350,
            ),
            {
              pending: '提交中...',
              success: {
                render: () => (
                  <>
                    路由 <strong>{input.name}</strong> 保存成功
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
          setData(rdata.updateRoute);
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
              createRoute({
                variables: {
                  input: { ...input, application: data.application.id },
                },
              }),
              350,
            ),
            {
              pending: '提交中...',
              success: {
                render: () => (
                  <>
                    路由 <strong>{input.name}</strong> 新增成功
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
          setData(rdata.createRoute);
          setConfirmLoading(false);
        } catch (e) {
          setConfirmLoading(false);
        }
      };
    }
  }, [
    createRoute,
    data?.application?.id,
    data?.id,
    form,
    setData,
    updateRoute,
  ]);

  return [handleSubmit, { form, submitting: confirmLoading }];
}

export default useRouteSubmit;
