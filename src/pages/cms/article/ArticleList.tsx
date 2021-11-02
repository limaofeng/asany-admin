import { useCallback, useState } from 'react';

import jquery from 'jquery';
import { Pagination } from 'react-bootstrap';
import Icon from '@asany/icons';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import {
  useArticlesQuery,
  useDeleteArticleMutation,
  useDeleteManyArticlesMutation,
} from '../hooks';

import type { IArticle } from './typings';

import {
  Badge,
  Button,
  Card,
  Dropdown,
  Input,
  Menu,
  Modal,
  Select,
  Table,
} from '@/pages/Metronic/components';

type ArticleActionsProps = {
  data: IArticle;
  refetch: () => void;
};

type DeleteOptions = {
  title: string;
  content: string;
  width?: string;
};

function useDelete(options: DeleteOptions, execute: () => Promise<void>) {
  const onDelete = useCallback(async () => {
    const { width = 550 } = options;
    const data = await Modal.confirm({
      ...options,
      width,
      okText: '删 除',
      cancelClassName: 'btn btn-secondary btn-sm',
      okClassName: 'btn btn-danger btn-sm',
    });
    if (data.isConfirmed) {
      await execute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.title, options.content]);

  return [onDelete];
}

type DeleteManyProps = {
  selectedRows: IArticle[];
  refetch: () => void;
};

(window as any)._MoreshowOrhide = function (dom: any) {
  jquery(dom).parent().siblings().show();
  jquery(dom).parent().remove();
  return false;
};

function DeleteMany(props: DeleteManyProps) {
  const { selectedRows, refetch } = props;

  const [deleteManyArticles] = useDeleteManyArticlesMutation();

  const [onDelete] = useDelete(
    {
      title: `你确定要删除这${
        selectedRows.length > 1 ? `“<strong>${selectedRows.length}</strong>“` : ''
      }篇文章吗？`,
      content:
        selectedRows.length > 1
          ? `您即将删除以下文章:<ul class="py-2">${selectedRows
              .map(
                (item, index) =>
                  `<li ${
                    index >= 4 ? 'style="display: none !important;"' : ''
                  } class="d-flex align-items-center text-gray-800 mb-1 fs-6"><span class="bullet bullet-dot me-2"></span><strong>${
                    item.title
                  }</strong></li>`,
              )
              .join('')}
              <li ${
                selectedRows.length <= 4 ? 'style="display: none !important;"' : ''
              } class="d-flex align-items-center text-gray-800 fs-6"><a href="javascript:void(0)" onClick="_MoreshowOrhide(this)">更多</a></li></ul> `
          : `您即将删除“<strong>${selectedRows[0].title}</strong>”。` +
            '删除操作不可逆转，请谨慎操作，您确定删除吗？',
    },
    async () => {
      await deleteManyArticles({ variables: { ids: selectedRows.map((item) => item.id!) } });
      await refetch();
    },
  );

  return (
    <Button onClick={onDelete} size="sm" className="px-4 py-2" variant="danger">
      删除选择
    </Button>
  );
}

function ArticleActions(props: ArticleActionsProps) {
  const { data, refetch } = props;
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const [deleteArticle] = useDeleteArticleMutation();

  const [onDelete] = useDelete(
    {
      title: '你确定要删除这篇文章吗？',
      content: `您即将删除“<strong>${data.title}</strong>”。删除操作不可逆转，请谨慎操作，您确定删除吗？`,
    },
    async () => {
      await deleteArticle({ variables: { id: data.id! } });
      await refetch();
    },
  );

  const handleClick = useCallback(({ key }) => {
    if (key == 'edit') {
      history.push(`/cms/articles/${data.id}/edit`);
    } else if (key == 'delete') {
      setVisible(false);
      onDelete();
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

  const { data, refetch } = useArticlesQuery();

  const pagination = (data || {}).articles || { edges: [], current: 0, total: 0 };

  const articles = pagination.edges.map((item) => item.node);

  const handleSearch = useCallback((value) => {
    console.log(value);
  }, []);

  console.log('pagination', pagination);

  return (
    <Card flush className="mt-6 mt-xl-9" headerClassName="mt-5">
      <Card.Title className="flex-column">
        <h3 className="fw-bolder mb-1">文章</h3>
      </Card.Title>
      <Card.Toolbar>
        <div className="me-4 my-1">
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
              { label: '等待发布', value: 'SCHEDULED' },
            ]}
          />
        </div>
        <Input.Search
          solid
          size="sm"
          className="w-150px"
          placeholder="搜索文章"
          onSearch={handleSearch}
        />
      </Card.Toolbar>
      <Card.Body className="pt-0">
        <Table
          rowKey="id"
          rowSelection={{
            type: 'checkbox',
            onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            toolbar: (_, selectedRows) => (
              <DeleteMany selectedRows={selectedRows} refetch={refetch} />
            ),
          }}
          pagination={pagination}
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
                return <ArticleActions data={record} refetch={refetch} />;
              },
            },
          ]}
        />
      </Card.Body>
    </Card>
  );
}

export default ArticleList;
