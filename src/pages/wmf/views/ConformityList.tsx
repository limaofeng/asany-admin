import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Icon from '@asany/icons';
import moment from 'moment';

import useAppModule from '@/hooks/useAppModule';
import useDelete from '@/hooks/useDelete';
import useImportExcel from '@/hooks/useImportExcel';
import useListPage, {
  queryToVariables,
  variablesToQuery,
} from '@/hooks/useListPage';
import { ContentWrapper } from '@/layouts/components';
import {
  Badge,
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
import {
  useArticlesLazyQuery,
  useArticlesQuery,
  useCreateArticleMutation,
  useDeleteManyArticlesMutation,
  useUpdateArticleMutation,
} from '@/pages/cms/hooks';
import { Article, ArticleStatus, DocumentContent } from '@/types';
import { getSortDirection } from '@/utils';

import ConformityDrawer from '../components/ConformityDrawer';

function ArticleActions({
  data,
  delete: handleDelete,
  onEdit,
}: {
  data: Article;
  onEdit: (data: Article) => void;
  delete: (data: any) => void;
}) {
  const [visible, setVisible] = useState(false);

  const handleClick = useCallback(({ key }: any) => {
    if (key === 'edit') {
      onEdit(data);
    } else if (key === 'delete') {
      handleDelete({ name: data.title!, id: data.id });
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

function ConformityList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [module] = useAppModule('drive');
  const spaceId = module?.values.space;

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
    return queryToVariables(searchParams, [
      {
        source: 'q',
        target: 'where.OR',
        transform: (value) => {
          return [
            {
              tags: [value],
            },
            {
              title: value,
            },
          ];
        },
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
  }, [searchParams.toString()]);

  const [loadArticles] = useArticlesLazyQuery({ fetchPolicy: 'network-only' });
  const [createArticle] = useCreateArticleMutation();
  const [updateArticle] = useUpdateArticleMutation();

  const [articles, { loading, pageInfo, refetch }] = useListPage(
    useArticlesQuery,
    {
      variables,
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

      const toast = Toast.loading('开始导入文件', {
        placement: 'top-center',
      });

      statistics.startTime = new Date();

      let currentCount = 0;
      for (const record of data) {
        currentCount++;
        try {
          // 假设 importRecord 是一个导入记录的函数
          const { data } = await loadArticles({
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
              url: `storage://${spaceId}/` + record.file,
            },
          };

          if (data?.result?.pageInfo.total === 1) {
            toast.update(
              `更新 ${record.title} - ${currentCount}/${statistics.totalRecords}`,
              {
                icon: 'loading',
              },
            );
            const { errors } = await updateArticle({
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
            const { errors } = await createArticle({
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
    [refetch, spaceId],
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
          name: '文件位置',
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

  const { delete: deleteConformity, deleteMany: deleteManyConformity } =
    useDelete(useDeleteManyArticlesMutation, {
      onDeleted: () => refetch(),
      dialog: {
        title: '你确定要删除吗？',
        content: (data, info) => {
          let message;
          if (info.batch) {
            const keys = data as any as string[];
            message = `确定删除选中的, 共 ${keys.length} 个文件吗？`;
          } else {
            message = (
              <>
                您即将删除“<strong>{data.name}</strong>
              </>
            );
          }
          return (
            <>
              <p className="tip-confirm">{message}</p>
              <p>删除的操作不可逆,请谨慎操作</p>
            </>
          );
        },
      },
    });

  const handleDeleteInBatch = useCallback(
    (selectedRowKeys: string[]) => async () => {
      deleteManyConformity(selectedRowKeys);
    },
    [deleteManyConformity],
  );

  const [state, setState] = useState<{ data?: Article; visible: boolean }>({
    visible: false,
  });

  const handleCloseDrawer = useCallback(() => {
    setState((prevState) => ({ ...prevState, visible: false }));
  }, []);

  const handleSuccess = useCallback(
    (_data: Article) => {
      setState((prevState) => ({
        ...prevState,
        route: _data,
      }));
      refetch();
    },
    [setState],
  );

  const handleDeleteSuccess = useCallback(
    (_data: Article) => {
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
        title: '符合性申明管理',
      }}
    >
      <ConformityDrawer
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
              <Button className="me-4 my-1" onClick={handleImportExcel}>
                模板数据导入
              </Button>
              <Button
                variant="light"
                className="me-4 my-1"
                onClick={handleDownloadTmplate}
              >
                符合性声明模板下载
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
                  key: 'title',
                  title: 'CMMF CODE',
                  width: 130,
                  sorter: true,
                  sortOrder: getSortDirection(searchParams, 'title'),
                },
                {
                  key: 'tags',
                  title: 'WMF CODE',
                  width: 130,
                  render(_, record) {
                    return !!record!.tags.length && record!.tags[0].name;
                  },
                },
                {
                  key: 'content',
                  title: '规范文件',
                  render(_, record) {
                    const document = record.content as DocumentContent;
                    const reg = new RegExp('^storage://[^/]+/');
                    return (
                      <div>
                        {(document as any)?.rawUrl?.replace(reg, '')}
                        {document?.url?.startsWith('storage://') && (
                          <Badge className="ms-2" color="dark">
                            未上传
                          </Badge>
                        )}
                      </div>
                    );
                  },
                },
                {
                  key: 'status',
                  title: '状态',
                  width: 200,
                  sorter: true,
                  sortOrder: getSortDirection(searchParams, 'status'),
                  render(value, record) {
                    switch (value) {
                      case ArticleStatus.Draft:
                        return (
                          <Badge light color="secondary">
                            草稿
                          </Badge>
                        );
                      case ArticleStatus.Published:
                        return (
                          <Badge light color="primary">
                            已发布
                          </Badge>
                        );
                      case ArticleStatus.Scheduled:
                        return (
                          <>
                            <Badge light color="info">
                              将于{' '}
                              {moment(record.scheduledAt).format(
                                'YYYY-MM-DD HH:mm',
                              )}{' '}
                              发布
                            </Badge>
                          </>
                        );
                      case ArticleStatus.Expired:
                        return <Badge color="dark">已过期</Badge>;
                      default:
                        return (
                          <span className="badge badge-light-dark">未知</span>
                        );
                    }
                  },
                },
                {
                  key: 'expirationAt',
                  title: '结束时间',
                  sorter: true,
                  sortOrder: getSortDirection(searchParams, 'expirationAt'),
                  width: 160,
                  render(value) {
                    return (
                      <div className="text-gray-700">
                        {value && moment(value).format('YYYY-MM-DD HH:mm')}
                      </div>
                    );
                  },
                },
                {
                  title: '操作',
                  key: 'action',
                  width: 120,
                  render: (_, record: any) => {
                    return (
                      <ArticleActions
                        data={record}
                        delete={deleteConformity}
                        onEdit={handleEdit}
                      />
                    );
                  },
                },
              ]}
              pagination={pageInfo}
              onChange={handleTableChange}
              dataSource={articles}
            />
          </BlockUI>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default ConformityList;
