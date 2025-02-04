import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Icon from '@asany/icons';

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
  Menu,
  Table,
} from '@/metronic';
import { Brand } from '@/types';
import { getSortDirection } from '@/utils';

import { BrandModal } from '../components/BrandModal';
import { useBrandsQuery } from '../hooks';
import useDeleteBrand from '../hooks/useBrandDelete';

function BrandActions({
  data,
  refetch,
  onEdit,
}: {
  data: Brand;
  refetch: () => void;
  onEdit: () => void;
}) {
  const [visible, setVisible] = useState(false);

  const { delete: handleDelete } = useDeleteBrand(() => refetch());

  const handleClick = useCallback(
    ({ key }: any) => {
      if (key === 'edit') {
        onEdit();
      } else if (key === 'delete') {
        handleDelete({ name: data.name!, id: data.id });
      }
    },
    [onEdit],
  );

  return (
    <Dropdown
      overlay={
        <Menu
          onClick={handleClick}
          className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4"
        >
          <Menu.Item key="edit" className="px-3">
            编辑
          </Menu.Item>
          <Menu.Item key="delete" className="px-3">
            删除
          </Menu.Item>
        </Menu>
      }
      placement="bottomRight"
      onVisibleChange={setVisible}
      visible={visible}
    >
      <Button variant="light" activeColor="light-primary">
        操 作
        <Icon className="ms-2 svg-icon-5 m-0" name="Duotune/arr072" />
      </Button>
    </Dropdown>
  );
}

function BrandListView() {
  const [state, setState] = useState<{
    visible: boolean;
    data?: Brand;
  }>({
    visible: false,
  });
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

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

  const variables = useMemo(() => {
    return queryToVariables(searchParams, [
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
  }, [searchParams.toString()]);

  const [brands, { loading, pageInfo, refetch }] = useListPage(useBrandsQuery, {
    variables,
  });

  const { deleteMany: handleDeleteMany } = useDeleteBrand(() => refetch());

  const handleDeleteInBatch = useCallback(
    (ids: string[]) => async () => {
      handleDeleteMany(ids);
    },
    [],
  );

  return (
    <ContentWrapper
      header={{
        title: '品牌列表',
      }}
    >
      <BrandModal
        visible={state.visible}
        setVisible={(visible) => setState({ ...state, visible })}
        refetch={refetch}
        data={state.data}
      />
      {!pageInfo?.total && !loading ? (
        <Card className="mb-5 mb-xl-10">
          <Empty
            title="还没有品牌"
            description="马上添加一个品牌吧！"
            image="/assets/media/illustrations/sigma-1/4.png"
          >
            <Button variant="primary">添加品牌</Button>
          </Empty>
        </Card>
      ) : (
        <>
          <Card className="mb-5 mb-xl-10">
            <Card.Header className="pt-8">
              <Card.Title className="flex-column"></Card.Title>
              <Card.Toolbar>
                <div className="d-flex justify-content-end">
                  <Button
                    variant="primary"
                    className="me-3"
                    icon={<Icon className="svg-icon-2" name="Duotune/arr075" />}
                    onClick={() => setState({ visible: true })}
                  >
                    添加品牌
                  </Button>
                </div>
              </Card.Toolbar>
            </Card.Header>
            <Card.Body>
              <BlockUI
                overlayClassName="bg-white bg-opacity-25"
                loading={loading}
              >
                <Table
                  hover
                  rowKey="id"
                  rowSelection={{
                    type: 'checkbox',
                    renderTitle: (size) => (
                      <>
                        已选中<span className="mx-2">{size}</span>个品牌
                      </>
                    ),
                    toolbar: (selectedRowKeys: string[]) => {
                      return (
                        <div>
                          <Button
                            color="success"
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
                      key: 'id',
                      title: '编码',
                      sorter: true,
                      sortOrder: getSortDirection(searchParams, 'id'),
                      width: 120,
                    },
                    {
                      key: 'name',
                      title: '品牌名称',
                      sorter: true,
                      width: 180,
                      sortOrder: getSortDirection(searchParams, 'name'),
                    },
                    {
                      key: 'description',
                      title: '描述',
                    },
                    {
                      key: 'createdAt',
                      title: '创建时间',
                      width: 120,
                    },
                    {
                      title: '操作',
                      key: 'action',
                      width: 140,
                      render: (_, record: any) => {
                        return (
                          <BrandActions
                            data={record}
                            onEdit={() => {
                              setState({
                                visible: true,
                                data: record,
                              });
                            }}
                            refetch={refetch}
                          />
                        );
                      },
                    },
                  ]}
                  pagination={pageInfo}
                  onChange={handleTableChange}
                  dataSource={brands}
                />
              </BlockUI>
            </Card.Body>
          </Card>
        </>
      )}
    </ContentWrapper>
  );
}

export default BrandListView;
