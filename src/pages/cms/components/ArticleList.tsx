import { useCallback, useMemo, useState } from 'react';

import jquery from 'jquery';
import Icon from '@asany/icons';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import classnames from 'classnames';
import moment from 'moment';

import type { ArticlesQueryVariables } from '../hooks';
import {
  useArticlesQuery,
  useDeleteArticleMutation,
  useDeleteManyArticlesMutation,
} from '../hooks';
import type { IArticle } from '../article/typings';

import {
  Badge,
  Button,
  Card,
  Dropdown,
  Empty,
  Input,
  Menu,
  Modal,
  Select2,
  Table,
} from '@/pages/Metronic/components';
import type { Article } from '@/types';

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
          ? `您即将删除以下文章:<ul className="py-2">${selectedRows
              .map(
                (item, index) =>
                  `<li ${
                    index >= 4 ? 'style="display: none !important;"' : ''
                  } className="d-flex align-items-center text-gray-800 mb-1 fs-6"><span className="bullet bullet-dot me-2"></span><strong>${
                    item.title
                  }</strong></li>`,
              )
              .join('')}
              <li ${
                selectedRows.length <= 4 ? 'style="display: none !important;"' : ''
              } className="d-flex align-items-center text-gray-800 fs-6"><a href="javascript:void(0)" onClick="_MoreshowOrhide(this)">更多</a></li></ul> `
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
      批量删除
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
          <Menu.Item key="publish" className="px-3">
            发布
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

type ArticleListProps = {
  style?: 'small' | 'normal';
  query: ArticlesQueryVariables;
};

function ArticleList(props: ArticleListProps) {
  const { query, style = 'normal' } = props;
  const { data, refetch } = useArticlesQuery({
    variables: { ...query },
    fetchPolicy: 'cache-and-network',
  });

  const pagination = (data || {}).articles || { edges: [], current: 0, total: 0 };

  const articles = useMemo(() => {
    return pagination.edges.map((item) => item.node);
  }, [pagination.edges]);

  const handleSearch = useCallback((value) => {
    console.log(value);
  }, []);

  const [selectedRows, setSelectedRows] = useState<Article[]>([]);

  const handleSelectedRows = useCallback(
    (_, _selectedRows) => {
      setSelectedRows(_selectedRows);
    },
    [setSelectedRows],
  );

  return (
    <div className="tab-content">
      {style == 'small' && (
        <div className="d-flex flex-wrap flex-stack pb-7">
          {/*--begin::Title--*/}
          <div className="d-flex flex-wrap align-items-center my-1">
            <h3 className="fw-bolder me-5 my-1">文章 ({pagination.total})</h3>
            {/*--begin::Search--*/}
            <Input.Search
              size="sm"
              placeholder="搜索"
              boxClassName="my-1"
              className="form-control-white  w-150px ps-9"
            />
            {/*--end::Search--*/}
          </div>
          {/*--end::Title--*/}
          {/*--begin::Controls--*/}
          <div className="d-flex flex-wrap my-1">
            {/*--begin::Tab nav--*/}
            <ul style={{ display: 'none' }} className="nav nav-pills me-6 mb-2 mb-sm-0">
              <li className="nav-item m-0">
                <a
                  className="btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary me-3"
                  href="#kt_project_users_card_pane"
                >
                  <Icon name="Duotune/gen024" className="svg-icon-2" />
                </a>
              </li>
              <li className="nav-item m-0">
                <a
                  className="btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary active"
                  href="#kt_project_users_table_pane"
                >
                  <Icon name="Duotune/abs015" className="svg-icon-2" />
                </a>
              </li>
            </ul>
            {/*--end::Tab nav--*/}
            {/*--begin::Actions--*/}
            <div className="d-flex my-0">
              {/*--begin::Select--*/}
              <Select2
                size="sm"
                className="form-select-white w-125px me-5"
                placeholder="发布时间"
                options={[
                  { label: '全部时间', value: 'all' },
                  { label: '今年', value: 'thisyear' },
                  { label: '这个月', value: 'thismonth' },
                  { label: '最近一个月', value: 'lastmonth' },
                  { label: '最近90天', value: 'last90days' },
                ]}
              />
              {/*--end::Select--*/}
              {/*--begin::Select--*/}
              <Select2
                size="sm"
                className="form-select-white w-125px"
                placeholder="状态"
                options={[
                  { label: '全部状态', value: 'all' },
                  { label: '草稿', value: 'DRAFT' },
                  { label: '已发布', value: 'PUBLISHED' },
                  { label: '等待发布', value: 'SCHEDULED' },
                ]}
              />
              {/*--end::Select--*/}
            </div>
            {/*--end::Actions--*/}
          </div>
          {/*--end::Controls--*/}
        </div>
      )}
      <Card
        flush
        className={classnames({ ['mt-6 mt-xl-9']: style === 'normal' })}
        headerClassName="mt-5"
      >
        {style === 'normal' && (
          <Card.Header className="pt-8">
            <Card.Title className="flex-column">
              <Input.Search
                solid
                className="w-250px"
                placeholder="搜索文章"
                onSearch={handleSearch}
              />
            </Card.Title>
            <Card.Toolbar>
              <div className="d-flex justify-content-end">
                {!!selectedRows.length && (
                  <>
                    <Button
                      variant="primary"
                      icon={<Icon className="svg-icon-2" name="Duotune/gen016" />}
                      className="me-3"
                    >
                      批量发布
                    </Button>
                    <Button
                      variant="danger"
                      icon={<Icon className="svg-icon-2" name="Duotune/gen027" />}
                    >
                      批量删除
                    </Button>
                  </>
                )}
                {!selectedRows.length && (
                  <>
                    <Button
                      variant="primary"
                      className="me-3"
                      icon={<Icon className="svg-icon-2" name="Duotune/gen031" />}
                    >
                      过滤筛选
                    </Button>
                    <Button
                      as={Link}
                      variant="primary"
                      icon={<Icon className="svg-icon-2" name="Duotune/arr075" />}
                      to="/cms/articles/new"
                    >
                      新建文章
                    </Button>
                  </>
                )}
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
        )}
        <Card.Body className="pt-0">
          {!pagination.total ? (
            <Empty
              title="新增文章"
              description="该栏目还是空的，没有任何文章"
              image="/assets/media/illustrations/sigma-1/4.png"
            >
              <Button as={Link} variant="primary" to="/cms/articles/new">
                新建文章
              </Button>
            </Empty>
          ) : (
            <Table
              rowKey="id"
              rowSelection={{
                type: 'checkbox',
                onChange: handleSelectedRows,
                selectedRowKeys: (selectedRows || []).map((item) => item.id),
                renderTitle: (size) => (
                  <>
                    已选中<span className="mx-2">{size}</span>篇文章
                  </>
                ),
                toolbar:
                  style == 'small' &&
                  ((_, _selectedRows) =>
                    (<DeleteMany selectedRows={_selectedRows} refetch={refetch} />) as any),
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
                          to={`/cms/articles/${record.id}/edit`}
                          className="text-gray-800 text-hover-primary mb-1"
                        >
                          {title}
                        </Link>
                        <span className="text-gray-500">
                          {record.channels.map((item) => (
                            <Badge className="me-2" key={item.id}>
                              {item.fullName}
                            </Badge>
                          ))}
                          {moment(record.createdAt).fromNow()}
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
                    return (
                      <Badge lightStyle={status[value].lightStyle}>{status[value].title}</Badge>
                    );
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
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ArticleList;
