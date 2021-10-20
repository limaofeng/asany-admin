import { useCallback, useState } from 'react';

import { useQuery } from '@apollo/client';
import { Pagination } from 'react-bootstrap';
import Icon from '@asany/icons';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import type { IArticle } from './typings';
import { QUEERY_ARTICLE_ALL } from './gql/article.gql';

import { Badge, Button, Card, Dropdown, Menu, Table } from '@/pages/Metronic/components';

type ArticleActionsProps = {
  data: IArticle;
};

function ArticleActions(props: ArticleActionsProps) {
  const { data } = props;
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const handleClick = useCallback(({ key }) => {
    if (key == 'edit') {
      history.push(`/cms/articles/${data.id}/edit`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dropdown
      overlay={
        <Menu
          onClick={handleClick}
          className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
        >
          <Menu.Item key="edit" className="px-3">
            编辑
          </Menu.Item>
          <Menu.Item key="delete" className="px-3 actions-delete">
            删除
          </Menu.Item>
        </Menu>
      }
      placement="bottomRight"
      onVisibleChange={setVisible}
      visible={visible}
    >
      <Button variant="light" activeStyle="light" activeColor="primary" size="sm">
        操 作
        <Icon className="ms-2 svg-icon-5 m-0" name="Duotune/arr072" />
      </Button>
    </Dropdown>
  );
}

function ArticleList() {
  const active = 2;
  const items = [];
  for (let number = 1; number <= 5; number += 1) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  const { data } = useQuery(QUEERY_ARTICLE_ALL);

  const pagination = (data || {}).articles || { edges: [] };

  const articles = pagination.edges.map((item: any) => item.node);

  console.log('articles', articles);

  return (
    <Card flush clssName="mt-6 mt-xl-9" headerClassName="mt-5">
      <Card.Title className="flex-column">
        <h3 className="fw-bolder mb-1">文章</h3>
      </Card.Title>
      <Card.Toolbar>
        {/*--begin::Select--*/}
        <div className="me-6 my-1">
          <select
            id="kt_filter_year"
            name="year"
            data-control="select2"
            data-hide-search="true"
            className="w-125px form-select form-select-solid form-select-sm"
          >
            <option value="All" selected={true}>
              All time
            </option>
            <option value="thisyear">This year</option>
            <option value="thismonth">This month</option>
            <option value="lastmonth">Last month</option>
            <option value="last90days">Last 90 days</option>
          </select>
        </div>
        {/*--end::Select--*/}
        {/*--begin::Select--*/}
        <div className="me-4 my-1">
          <select
            id="kt_filter_orders"
            name="orders"
            data-control="select2"
            data-hide-search="true"
            className="w-125px form-select form-select-solid form-select-sm"
          >
            <option value="All" selected={true}>
              All Orders
            </option>
            <option value="Approved">Approved</option>
            <option value="Declined">Declined</option>
            <option value="In Progress">In Progress</option>
            <option value="In Transit">In Transit</option>
          </select>
        </div>
        {/*--end::Select--*/}
        {/*--begin::Search--*/}
        <div className="d-flex align-items-center position-relative my-1">
          <Icon name="Duotune/gen021" className="svg-icon-3 position-absolute ms-3" />
          <input
            type="text"
            id="kt_filter_search"
            className="form-control form-control-solid form-select-sm w-150px ps-9"
            placeholder="Search Order"
          />
        </div>
        {/*--end::Search--*/}
      </Card.Toolbar>
      <Card.Body className="pt-0">
        <Table
          rowKey="id"
          rowSelection={{
            type: 'checkbox',
            /*     onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: (record: DataType) => ({
              disabled: record.name === 'Disabled User', // Column configuration not to be checked
              name: record.name,
            }), */
          }}
          pagination={{ total: 80, current: 5 }}
          dataSource={articles}
          columns={[
            {
              title: '标题',
              dataIndex: 'title',
              key: 'title',
              render: (title, record) => {
                return (
                  <div className="d-flex flex-column">
                    <Link
                      to={`/cms/articles/${record.id}`}
                      className="text-gray-800 text-hover-primary mb-1"
                    >
                      {title}
                    </Link>
                    <span className="text-gray-500">
                      {record.status} . {record.createdAt}
                    </span>
                  </div>
                );
              },
            },
            {
              title: '状态',
              dataIndex: 'status',
              width: 120,
              render: (value) => {
                const status = {
                  DRAFT: { title: '草稿', lightStyle: 'danger' },
                  PUBLISHED: { title: '已发布' },
                  SCHEDULED: { title: '计划', lightStyle: 'primary' },
                };
                return <Badge lightStyle={status[value].lightStyle}>{status[value].title}</Badge>;
              },
            },
            {
              title: '操作',
              key: 'action',
              width: 140,
              render: (_, record: any) => {
                return <ArticleActions data={record} />;
              },
            },
          ]}
        />
      </Card.Body>
    </Card>
  );
}

export default ArticleList;
