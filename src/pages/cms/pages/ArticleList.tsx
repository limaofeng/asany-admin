import { useCallback, useMemo, useState } from 'react';

import Icon from '@asany/icons';
import jquery from 'jquery';
import moment from 'moment';
import type { RouteComponentProps } from 'react-router';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import type { IArticle } from '../article/typings';
import {
  useArticlesQuery,
  useDeleteArticleMutation,
  useDeleteManyArticlesMutation,
} from '../hooks';

import { ContentWrapper } from '@/layouts/components';
import { Badge, Button, Card, Dropdown, Empty, Input, Menu, Modal, Table } from '@/metronic';
import type { Article } from '@/types';

import '../style/article-list.scss';

type ArticleActionsProps = {
  baseUrl: string;
  data: IArticle;
  refetch: () => void;
};

type DeleteOptions = {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  width?: string;
};

function useDelete(options: DeleteOptions, execute: () => Promise<void>) {
  const onDelete = useCallback(async () => {
    const { width } = options;
    const data = await Modal.confirm({
      ...options,
      width,
      okText: '删 除',
      okClassName: 'btn-danger',
    });
    if (data.isConfirmed) {
      await execute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.title, options.content]);

  return [onDelete];
}

type DeleteManyProps = {
  selectedRows: Article[];
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
      title: (
        <>
          你确定要删除这
          {selectedRows.length > 1 && (
            <>
              “<strong>{selectedRows.length}</strong>“`
            </>
          )}
          篇文章吗？
        </>
      ),
      content:
        selectedRows.length > 1 ? (
          `您即将删除以下文章:<ul className="py-2">${selectedRows
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
        ) : (
          <>
            您即将删除“<strong>{selectedRows[0].title}</strong>”。
            <br />
            删除操作不可逆转，请谨慎操作，您确定删除吗？
          </>
        ),
    },
    async () => {
      await deleteManyArticles({ variables: { ids: selectedRows.map((item) => item.id!) } });
      await refetch();
    },
  );

  return (
    <Button color="danger" onClick={onDelete} variant={false} size="sm" className="px-4 py-2">
      批量删除
    </Button>
  );
}

function ArticleActions(props: ArticleActionsProps) {
  const { data, refetch, baseUrl } = props;
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const [deleteArticle] = useDeleteArticleMutation();

  const [onDelete] = useDelete(
    {
      title: '你确定要删除这篇文章吗？',
      content: (
        <>
          您即将删除“<strong>${data.title}</strong>”。删除操作不可逆转，请谨慎操作，您确定删除吗？
        </>
      ),
    },
    async () => {
      await deleteArticle({ variables: { id: data.id! } });
      await refetch();
    },
  );

  const handleClick = useCallback(({ key }: any) => {
    if (key == 'edit') {
      history.push(`${baseUrl}/articles/${data.id}`);
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
          className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4"
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
      <Button variant="light" activeColor="light-primary">
        操 作
        <Icon className="ms-2 svg-icon-5 m-0" name="Duotune/arr072" />
      </Button>
    </Dropdown>
  );
}

type ArticleListProps = RouteComponentProps<
  { id: string },
  any,
  {
    rootCategoryId: string;
    baseUrl: string;
  }
>;

function ArticleList(props: ArticleListProps) {
  const {
    match: {
      params: { id: categoryId },
    },
    location,
  } = props;

  const rootCategoryId = location.state.rootCategoryId;

  const variables = useMemo(() => {
    const { q, ...query } = (location as any).query;
    if (!query.filter) {
      query.filter = {};
    }
    if (q) {
      query.filter = { name_contains: q };
    }
    query.filter.category = { id: categoryId, subColumns: true };
    return query;
  }, [location, categoryId]);

  const { data, refetch } = useArticlesQuery({
    variables,
    fetchPolicy: 'cache-and-network',
  });

  const pagination = (data || {}).articles || { edges: [], current: 0, total: 0 };

  const articles = useMemo(() => {
    return pagination.edges.map((item) => item.node as Article);
  }, [pagination.edges]);

  const handleSearch = useCallback((value: any) => {
    console.log(value);
  }, []);

  const [selectedRows, setSelectedRows] = useState<Article[]>([]);

  const handleSelectedRows = useCallback(
    (_: any, _selectedRows: Article[]) => {
      setSelectedRows(_selectedRows);
    },
    [setSelectedRows],
  );

  const tableToolbar = useMemo(() => {
    return (selectedRowKeys: string[], _selectedRows: Article[]) => {
      return <DeleteMany selectedRows={_selectedRows} refetch={refetch} />;
    };
  }, [refetch]);

  const baseUrl = location.state.baseUrl || '';

  return (
    <ContentWrapper
      header={{
        title: '新闻动态',
      }}
    >
      <div className="tab-content">
        <Card flush headerClassName="mt-5">
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
                {/**
                  // <>
                  //   <Button
                  //     variant="primary"
                  //     icon={<Icon className="svg-icon-2" name="Duotune/gen016" />}
                  //     className="me-3"
                  //   >
                  //     批量发布
                  //   </Button>
                  //   <Button
                  //     variant="danger"
                  //     icon={<Icon className="svg-icon-2" name="Duotune/gen027" />}
                  //   >
                  //     批量删除
                  //   </Button>
                  // </>
                   */}
                <Button
                  variantStyle="light"
                  variant="primary"
                  className="me-3"
                  icon={<Icon className="svg-icon-2" name="Duotune/gen031" />}
                >
                  过滤筛选
                </Button>
                <Button
                  as={Link}
                  variant="primary"
                  className="me-3"
                  icon={<Icon className="svg-icon-2" name="Duotune/arr075" />}
                  to={`${baseUrl}/cms/categories/${categoryId}/articles/new`}
                >
                  新建文章
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
          <Card.Body className="pt-0">
            {!pagination.total ? (
              <Empty
                title="新增文章"
                description="该栏目还是空的，没有任何文章"
                image="/assets/media/illustrations/sigma-1/4.png"
              >
                <Button as={Link} className="me-2" variant="light" to={`${baseUrl}/settings`}>
                  查看栏目信息
                </Button>
                <Button as={Link} variant="primary" to={`${baseUrl}/articles/new`}>
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
                  toolbar: tableToolbar,
                }}
                pagination={pagination}
                dataSource={articles}
                rowHeight={136}
                columns={[
                  {
                    title: '标题',
                    dataIndex: 'title',
                    key: 'title',
                    render: (title, record) => {
                      return (
                        <div className="d-flex flex-column  align-items-start">
                          <div className="meta-container no-selecto-drag">
                            <Link to="/xx/12" className="user-message">
                              林暮春
                            </Link>
                            <span className="created-at">{moment(record.createdAt).fromNow()}</span>
                            <div className="category_list">
                              {record.categories
                                .filter((item) => item.id !== rootCategoryId)
                                .map((category) => (
                                  <Link
                                    key={category.id}
                                    to={`${baseUrl}/cms/categories/${category.id}/articles`}
                                    className="tag"
                                  >
                                    {category.name}
                                  </Link>
                                ))}
                            </div>
                          </div>
                          <Link
                            onClick={(e) => e.stopPropagation()}
                            to={`${baseUrl}/cms/categories/${categoryId}/articles/${record.id}`}
                            className="mt-2 mb-2 text-gray-800 no-selecto-drag fs-4 text-hover-primary mb-1"
                          >
                            {title}
                          </Link>
                          <div className="summary mb-2">
                            <span className="text-muted fs-base no-selecto-drag">
                              曾经我用过，写过一些挺骚的东西，但是我忘得一干二净 方法一 【换肤】
                              在页面一定用link标签引入less样式的文件, 比如
                            </span>
                          </div>
                          <div className="fs-base ">
                            <Link
                              className="text-muted no-selecto-drag text-hover-primary me-8"
                              to={`${baseUrl}/cms/categories/${categoryId}/articles/${record.id}`}
                            >
                              <Icon className="svg-icon-4 me-2" name="Bootstrap/eye" />
                              41W
                            </Link>
                            <Link
                              className="text-muted no-selecto-drag text-hover-primary me-8"
                              to={`${baseUrl}/cms/categories/${categoryId}/articles/${record.id}#comments`}
                            >
                              <Icon className="svg-icon-6 me-2" name="Bootstrap/chat" />
                              41W
                            </Link>
                          </div>
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
                      return (
                        <ArticleActions
                          baseUrl={`${baseUrl}/cms/categories/${categoryId}`}
                          data={record}
                          refetch={refetch}
                        />
                      );
                    },
                  },
                ]}
              />
            )}
          </Card.Body>
        </Card>
      </div>
    </ContentWrapper>
  );
}

export default ArticleList;
