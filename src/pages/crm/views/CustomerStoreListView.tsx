import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import Icon from '@asany/icons';
import moment from 'moment';

import useImportExcel from '@/hooks/useImportExcel';
import useListPage, {
  queryToVariables,
  variablesToQuery,
} from '@/hooks/useListPage';
import { ContentWrapper } from '@/layouts/components';
import {
  BlockUI,
  Button,
  Card,
  Dropdown,
  Empty,
  Input,
  Menu,
  Modal,
  Table,
  Toast,
} from '@/metronic';
import { CustomerStore } from '@/types';
import { getSortDirection } from '@/utils';

import useExcel from '@/hooks/useExcel';
import CustomerStoreDrawer from '../components/CustomerStoreDrawer';
import {
  useCreateCustomerStoreMutation,
  useCustomerStoresLazyQuery,
  useCustomerStoresQuery,
  useUpdateCustomerStoreMutation,
} from '../hooks/index';
import useCustomerStoreDelete from '../hooks/useCustomerStoreDelete';

function CustomerStoreActions({
  data,
  onEdit,
  refetch,
}: {
  data: CustomerStore;
  onEdit: (data: CustomerStore) => void;
  refetch: () => void;
}) {
  const [visible, setVisible] = useState(false);

  const { delete: handleDelete } = useCustomerStoreDelete(refetch);

  const handleClick = useCallback(({ key }: any) => {
    if (key === 'edit') {
      onEdit(data);
    } else if (key === 'delete') {
      handleDelete({ name: data.name!, id: data.id });
    }
  }, []);

  return (
    <Dropdown
      overlay={
        <Menu
          onClick={handleClick}
          className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-2"
        >
          <Menu.Item key="edit" className="px-3">
            编辑
          </Menu.Item>
          <Menu.Item key="delete" className="actions-delete px-3">
            删除
          </Menu.Item>
        </Menu>
      }
      placement="bottomRight"
      onVisibleChange={setVisible}
      visible={visible}
    >
      <Button variant="clean" activeColor="light-primary">
        操 作
        <Icon className="ms-2 svg-icon-5 m-0" name="Duotune/arr072" />
      </Button>
    </Dropdown>
  );
}

function CustomerStoreListView() {
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();

  const searchForm = useMemo(
    () =>
      queryToVariables(searchParams, [
        {
          source: 'q',
          target: 'keywords',
        },
      ]),
    [searchParams.get('q')],
  );

  useState<{
    keywords: string;
  }>({
    keywords: searchParams.get('q') || '',
  });

  const variables = useMemo(() => {
    const newVars = queryToVariables(searchParams, [
      {
        source: 'q',
        target: 'where.name_contains',
      },
      {
        source: 'sex',
        target: 'where.sex',
      },
      {
        source: 'page',
        transform: (value) => parseInt(value),
      },
      {
        source: 'per_page',
        transform: (value) => parseInt(value),
      },
      {
        source: 'sort',
        target: 'orderBy',
        transform: (value) => {
          const [field, order] = value.split(':');
          return `${field}_${order}`;
        },
      },
    ]);
    newVars.where = newVars.where || {};
    newVars.where.customer = params.id;
    return newVars;
  }, [searchParams.toString(), params.id]);

  const [loadCustomerStores] = useCustomerStoresLazyQuery({
    fetchPolicy: 'network-only',
  });
  const [createCustomerStore] = useCreateCustomerStoreMutation();
  const [updateCustomerStore] = useUpdateCustomerStoreMutation();

  const [stores, { loading, pageInfo, refetch }] = useListPage(
    useCustomerStoresQuery,
    {
      variables,
      skip: !params.id,
    },
  );

  const handleTableChange = useCallback(
    (pagination: any, filters: any, sorter: any) => {
      const querystring = variablesToQuery(
        { searchForm, pagination, filters, sorter },
        [
          {
            source: 'searchForm.keywords',
            target: 'q',
            skip: (value) => !value,
          },
          {
            source: 'pagination.current',
            target: 'page',
            skip: (value) => value === 1,
          },
          {
            source: 'pagination.pageSize',
            target: 'per_page',
            skip: (value) => value === 15,
          },
          {
            source: 'sorter.field',
            target: 'sort',
            transform: (value) =>
              `${value}:${sorter.order === 'ascend' ? 'asc' : 'desc'}`,
          },
        ],
      );
      navigate(location.pathname + '?' + querystring, {
        replace: true,
      });
    },
    [searchForm],
  );

  const { deleteMany: handleDeleteMany } = useCustomerStoreDelete(refetch);

  const handleSearch = useCallback((value: string) => {
    navigate(location.pathname + (!!value ? '?q=' + value : ''), {
      replace: true,
    });
  }, []);

  const importData = useCallback(
    async (data: any[]) => {
      // console.log('importData', data);

      const statistics: {
        totalRecords: number;
        insertCount: number;
        updateCount: number;
        failureCount: number;
        failedRecords: { record: any; error: any }[];
        startTime: Date | null;
        endTime: Date | null;
      } = {
        totalRecords: 0, // 总记录数
        insertCount: 0, // 插入数量
        updateCount: 0, // 更新数量
        failureCount: 0, // 失败数量
        failedRecords: [], // 记录失败的详细信息
        startTime: null, // 开始时间
        endTime: null, // 结束时间
      };

      statistics.totalRecords = data.length;

      const toast = Toast.loading('开始导入客户', {
        placement: 'top-center',
      });

      statistics.startTime = new Date();

      let currentCount = 0;
      for (const record of data) {
        currentCount++;
        try {
          // 假设 importRecord 是一个导入记录的函数
          const { data } = await loadCustomerStores({
            variables: {
              where: {
                title: record.title,
              },
            },
          });

          const inputData = {
            title: record.title,
            summary: record.summary,
            tags: !!record.tag ? [record.tag] : [],
            scheduledAt: record.scheduledAt,
            expirationAt: record.expirationAt,
            category: 'conformity',
            content: {
              type: 'PDF',
              url: 'storage://ZovzE2fU/' + record.file,
            },
          };

          if (data?.result?.pageInfo.total === 1) {
            toast.update(
              `更新 ${record.title} - ${currentCount}/${statistics.totalRecords}`,
              {
                icon: 'loading',
              },
            );
            const { errors } = await updateCustomerStore({
              variables: {
                id: data.result.edges[0].node.id,
                input: inputData,
              },
            });
            if (!!errors?.length) {
              throw new Error(errors[0].message);
            }
            statistics.updateCount++;
          } else if (data?.result?.pageInfo.total === 0) {
            toast.update(
              `新增 ${record.title} - ${currentCount}/${statistics.totalRecords}`,
              {
                icon: 'loading',
              },
            );
            const { errors } = await createCustomerStore({
              variables: {
                input: inputData,
              },
            });
            if (!!errors?.length) {
              throw new Error(errors[0].message);
            }
            statistics.insertCount++;
          } else {
            statistics.failureCount++;
          }
        } catch (error) {
          toast.update(
            `失败 ${record.title} - ${currentCount}/${statistics.totalRecords}`,
            {
              icon: 'error',
            },
          );
          statistics.failureCount++;
          statistics.failedRecords.push({ record, error });
        }
      }

      statistics.endTime = new Date();
      console.log('Import Summary:', statistics);

      toast.close();

      refetch();

      Modal.success({
        title: '操作成功',
        width: 600,
        content: (
          <div>
            <p>
              导入完成, 共 {statistics.totalRecords} 条记录, 成功{' '}
              {statistics.insertCount} 条, 更新 {statistics.updateCount} 条,
              失败 {statistics.failureCount} 条
            </p>
            <p>
              耗时:{' '}
              {moment(statistics.endTime).diff(statistics.startTime, 'seconds')}{' '}
              秒
            </p>
            <p>总记录数: {statistics.totalRecords}</p>
            <p>插入数量: {statistics.insertCount}</p>
            <p>更新数量: {statistics.updateCount}</p>
            <p>失败数量: {statistics.failureCount}</p>
          </div>
        ),
        allowOutsideClick: false,
      });
    },
    [refetch],
  );

  const [excelFileInput, handleImportExcel, handleDownloadTmplate] =
    useImportExcel(importData, {
      header: 1,
      fields: {
        title: {
          index: 0,
          name: 'CMMF CODE',
          example: 'W22L1',
          formatter: (value) => String(value).trim(),
        },
        tag: {
          index: 1,
          name: 'WMF CODE',
          example: 'YS22ED',
          formatter: (value) => String(value).trim(),
        },
        scheduledAt: {
          index: 2,
          name: '发布时间',
          example: '2024/8/22 0:00',
          formatter: (value) =>
            String(value).trim() && moment(value).format('YYYY-MM-DD HH:mm'),
        },
        expirationAt: {
          index: 3,
          name: '结束时间',
          example: '2024/8/31 0:00',
          formatter: (value) =>
            String(value).trim() && moment(value).format('YYYY-MM-DD HH:mm'),
        },
        file: {
          index: 4,
          name: '客户位置',
          example: '3201000159 1873596030 炒锅铲.pdf.pdf',
          formatter: (value) => String(value).trim(),
        },
        summary: {
          index: 5,
          name: '备注',
          example: '',
          formatter: (value) => String(value).trim(),
        },
      },
      template: {
        filename: '符合性规范批量上传.xlsx',
        cols: [
          { wch: 20 },
          { wch: 20 },
          { wch: 20 },
          { wch: 20 },
          { wch: 50 },
          { wch: 30 },
        ],
      },
    });

  const excel = useExcel();

  const handleDeleteInBatch = useCallback(
    (selectedRowKeys: string[]) => async () => {
      await handleDeleteMany(selectedRowKeys);
    },
    [handleDeleteMany],
  );

  const [state, setState] = useState<{
    data?: CustomerStore;
    visible: boolean;
  }>({
    visible: false,
  });

  const handleCloseDrawer = useCallback(() => {
    setState((prevState) => ({ ...prevState, visible: false }));
  }, []);

  const handleSuccess = useCallback(
    (_data: CustomerStore) => {
      setState((prevState) => ({
        ...prevState,
        route: _data,
      }));
      refetch();
    },
    [setState],
  );

  const handleDeleteSuccess = useCallback(
    (_data: CustomerStore) => {
      setState((prevState) => {
        if (prevState.data?.id !== _data.id) {
          return prevState;
        }
        return {
          ...prevState,
          visible: false,
          menu: undefined,
        };
      });
      refetch();
    },
    [setState],
  );

  const handleNew = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      visible: true,
      data: {} as any,
    }));
  }, []);

  const handleEdit = useCallback((e: any) => {
    setState((prevState) => ({
      ...prevState,
      visible: true,
      data: e,
    }));
  }, []);

  return (
    <ContentWrapper
      header={{
        title: '门店管理',
      }}
    >
      <CustomerStoreDrawer
        data={state.data}
        onClose={handleCloseDrawer}
        onSuccess={handleSuccess}
        onDeleteSuccess={handleDeleteSuccess}
        visible={state.visible}
      />
      <Card className="mb-5 mb-xl-10">
        <Card.Header className="pt-8">
          <Card.Title className="flex-column">
            <Input.Search
              solid
              defaultValue={searchForm.keywords}
              className="w-250px"
              placeholder="关键词搜索"
              onSearch={handleSearch}
            />
          </Card.Title>
          <Card.Toolbar>
            <div>
              <Button onClick={handleNew} className="me-4 my-1">
                新建
              </Button>
              {excelFileInput}
              <Button
                className="me-4 my-1"
                variant="light"
                onClick={() => excel.export()}
              >
                导出 Excel
              </Button>
            </div>
          </Card.Toolbar>
        </Card.Header>
        <Card.Body>
          <BlockUI overlayClassName="bg-white bg-opacity-25" loading={loading}>
            <Table
              hover
              rowKey="id"
              rowSelection={{
                type: 'checkbox',
                renderTitle: (size) => (
                  <>
                    已选中<span className="mx-2">{size}</span>个
                  </>
                ),
                toolbar: (selectedRowKeys: string[]) => {
                  return (
                    <div>
                      <Button
                        color="danger"
                        onClick={handleDeleteInBatch(selectedRowKeys)}
                        variant={false}
                      >
                        批量删除
                      </Button>
                    </div>
                  );
                },
              }}
              noRowsRenderer={() => (
                <Empty
                  description="列表数据为空"
                  image="/assets/media/illustrations/sigma-1/5.png"
                />
              )}
              columns={[
                {
                  key: 'no',
                  title: '编号',
                  width: 130,
                  sorter: true,
                  sortOrder: getSortDirection(searchParams, 'no'),
                },
                {
                  key: 'name',
                  title: '名称',
                  width: 150,
                  sorter: true,
                  sortOrder: getSortDirection(searchParams, 'name'),
                },
                {
                  key: 'address.fullAddress',
                  title: '地址',
                },
                {
                  key: 'deviceCount',
                  title: '设备数',
                  sorter: true,
                  width: 80,
                  render: (value: any) => {
                    return value === 0 ? (
                      <span className="badge badge-light">无设备</span>
                    ) : (
                      <span className="badge badge-primary">{value} 台</span>
                    );
                  },
                },
                {
                  title: '操作',
                  key: 'action',
                  width: 120,
                  render: (_, record: any) => {
                    return (
                      <CustomerStoreActions
                        data={record}
                        refetch={refetch}
                        onEdit={handleEdit}
                      />
                    );
                  },
                },
              ]}
              pagination={pageInfo}
              onChange={handleTableChange}
              dataSource={stores}
            />
          </BlockUI>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default CustomerStoreListView;
