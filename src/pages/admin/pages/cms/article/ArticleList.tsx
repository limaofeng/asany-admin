import { useQuery } from '@apollo/client';
import { Pagination } from 'react-bootstrap';
import Icon from '@asany/icons';

import { QUEERY_ARTICLE_ALL } from './gql/article.gql';

import { Card, Table } from '@/pages/Metronic/components';

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
    <Card clssName="mt-6 mt-xl-9" headerClassName="mt-5">
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
                    <a className="text-gray-800 text-hover-primary mb-1">{title}</a>
                    <span className="text-gray-500">
                      {record.status} . {record.createdAt}
                    </span>
                  </div>
                );
              },
            },
            // {
            //   title: '点击',
            //   dataIndex: 'clicks',
            //   width: 100,
            // },
            // {
            //   title: '评论',
            //   dataIndex: 'comments',
            //   width: 100,
            // },
            {
              title: '状态',
              dataIndex: 'status',
              width: 120,
            },
            {
              title: '操作',
              key: 'action',
              width: 140,
            },
          ]}
        />
      </Card.Body>
    </Card>
  );
}

export default ArticleList;
