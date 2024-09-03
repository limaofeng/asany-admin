import { useCallback, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

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
  Input,
  Menu,
  Table,
} from '@/metronic';
import { Product } from '@/types';
import { getSortDirection } from '@/utils';

import { useProductsQuery } from '../hooks';
import useProductDelete from '../hooks/useProductDelete';

const baseUrl = '/pim';

function ProductActions({
  baseUrl,
  data,
  refetch,
}: {
  baseUrl: string;
  data: Product;
  refetch: () => void;
}) {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const { delete: handleDelete } = useProductDelete(() => refetch());

  const handleClick = useCallback(({ key }: any) => {
    if (key === 'edit') {
      navigate(`${baseUrl}/products/${data.id}`);
    } else if (key === 'delete') {
      handleDelete({ name: data.name!, id: data.id });
    }
  }, []);

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

function ProductListView() {
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

  const [products, { loading, pageInfo, refetch }] = useListPage(
    useProductsQuery,
    {
      variables,
      fetchPolicy: 'network-only',
    },
  );

  const { deleteMany: handleDeleteMany } = useProductDelete(() => refetch());

  const handleDeleteInBatch = useCallback(
    (ids: string[]) => async () => {
      handleDeleteMany(ids);
    },
    [],
  );

  return (
    <ContentWrapper
      header={{
        title: '产品列表',
      }}
    >
      <Card className="mb-5 mb-xl-10">
        <Card.Header className="pt-8">
          <Card.Title className="flex-column">
            <Input.Search
              solid
              className="w-250px"
              placeholder="搜索产品"
              // onSearch={handleSearch}
            />
          </Card.Title>
          <Card.Toolbar>
            <div className="d-flex justify-content-end">
              <Button
                as={Link}
                variant="primary"
                className="me-3"
                icon={<Icon className="svg-icon-2" name="Duotune/arr075" />}
                to={`/pim/products/new`}
              >
                新建产品
              </Button>
            </div>
            {/* <div className="me-4 my-1">
          <Select
            solid
            size="sm"
            className="w-125px"
            options={[
              { label: '全部时间', value: 'all' },
              { label: '今年', value: 'thisyear' },
              { label: '这个月', value: 'thismonth' },
              { label: '最近一个月', value: 'lastmonth' },
              { label: '最近90天', value: 'last90days' },
            ]}
          />
        </div>
        <div className="me-4 my-1">
          <Select
            solid
            size="sm"
            className="w-125px"
            options={[
              { label: '全部状态', value: 'all' },
              { label: '草稿', value: 'DRAFT' },
              { label: '已发布', value: 'PUBLISHED' },
              { label: '等待发布', value: 'SCHEDULED' },
            ]}
          />
        </div> */}
          </Card.Toolbar>
        </Card.Header>
        <Card.Body>
          {!pageInfo?.total && !loading ? (
            <Card className="mb-5 mb-xl-10">
              <Empty
                title="还没有产品"
                description="马上添加一个产品吧！"
                image="/assets/media/illustrations/sigma-1/4.png"
              >
                <Button variant="primary">添加产品</Button>
              </Empty>
            </Card>
          ) : (
            <>
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
                        已选中<span className="mx-2">{size}</span>个产品
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
                      key: 'id',
                      title: 'ID',
                      sorter: true,
                      sortOrder: getSortDirection(searchParams, 'id'),
                      width: 80,
                    },
                    {
                      key: 'brand',
                      title: '品牌',
                      width: 120,
                      render: (brand) => brand?.name,
                    },
                    {
                      key: 'name',
                      title: '产品名称',
                      sorter: true,
                      sortOrder: getSortDirection(searchParams, 'name'),
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
                          <ProductActions
                            baseUrl={baseUrl}
                            data={record}
                            refetch={refetch}
                          />
                        );
                      },
                    },
                  ]}
                  pagination={pageInfo}
                  onChange={handleTableChange}
                  dataSource={products}
                />
              </BlockUI>
            </>
          )}
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default ProductListView;
