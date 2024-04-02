import { useCallback, useMemo, useState } from 'react';

import { Icon } from '@asany/icons';
import { Link } from 'umi';

import CreateWebsite from '../components/CreateWebsite';
import { useWebsitesQuery } from '../hooks';

import { useLocation } from '@umijs/max';

import { ContentWrapper } from '@/layouts/components';
import { Card, Col, Row, Symbol } from '@/metronic';

import qs from 'query-string';

import './WebsiteList.scss';

// type ActionsProps = {
//   history: History;
//   data: LandingPage;
//   onShowQRCode: (url: string) => void;
//   onDelete: (...ids: string[]) => Promise<void>;
// };

// function Actions({ data, history, onDelete, onShowQRCode }: ActionsProps) {
//   const handleDelete = useCallback(
//     async (_data: LandingPage) => {
//       const message = `确定删除活动 “${_data.name}” 吗？`;

//       const result = await Modal.confirm({
//         title: '确定删除',
//         content: (
//           <>
//             <p className="tip-confirm">{message}</p>
//             <p>删除的操作不可逆,请谨慎操作</p>
//           </>
//         ),
//         okClassName: 'btn-danger',
//         okText: '删除',
//       });
//       if (!result.isConfirmed) {
//         return;
//       }
//       await onDelete(_data.id);
//       Toast.success(`活动 “${_data.name}” 删除成功`, 2000, {
//         placement: 'bottom-start',
//         progressBar: true,
//       });
//     },
//     [onDelete],
//   );

//   const handleMenuClick = useCallback(
//     (event: any) => {
//       if (event.key == 'view') {
//         navigate(`/website/landing/pages/${data.id}`);
//       } else if (event.key == 'delete') {
//         handleDelete(data);
//       } else if (event.key == 'preview') {
//         onShowQRCode(location.protocol + process.env.MOBILE_URL + '/lps/' + data.id);
//       }
//     },
//     [data, handleDelete, history, onShowQRCode],
//   );

//   return (
//     <Dropdown
//       overlay={
//         <Menu
//           onClick={handleMenuClick}
//           className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold fs-8 w-125px py-4"
//         >
//           <Menu.Item key="view" className="px-3">
//             编辑
//           </Menu.Item>
//           <Menu.Separator />
//           {/* {data.status == 'DRAFT' && (
//             <Menu.Item key="publish" className="px-3">
//               发布
//             </Menu.Item>
//           )}
//           {data.status == 'PUBLISHED' && (
//             <Menu.Item key="cancel" className="px-3">
//               取消活动
//             </Menu.Item>
//           )} */}
//           <Menu.Item key="preview" className="px-3">
//             预览
//           </Menu.Item>
//           <Menu.Separator />
//           <Menu.Item key="delete" className="px-3 actions-delete">
//             删除
//           </Menu.Item>
//         </Menu>
//       }
//       placement="bottomRight"
//     >
//       <Button className="fs-8" variant="light" activeColor="light-primary">
//         操作
//         <Icon className="svg-icon-5 ms-2 me-n1" name="Duotune/arr072" />
//       </Button>
//     </Dropdown>
//   );
// }

// const allStatus = [
//   { label: '草稿', value: 'DRAFT', color: 'secondary' },
//   { label: '进行中', value: 'PUBLISHED', color: 'success' },
//   { label: '取消', value: 'SUSPEND', color: 'light' },
//   { label: '结束', value: 'COMPLETED', color: 'light' },
// ];

function WebsiteList() {
  const location = useLocation();

  const [visibleNewWebsite, setVisibleNewWebsite] = useState(false);

  const variables = useMemo(() => {
    const { q, ...query } = qs.parse(location.search) as any;
    if (q) {
      query.filter = { name_contains: q };
    }
    return query;
  }, [location]);

  // const sorter = useMemo<Sorter>(() => {
  //   if (!variables.orderBy) {
  //     return {
  //       order: 'descend',
  //       field: 'createdAt',
  //     };
  //   }
  //   const [field, order] = variables.orderBy.split('_');
  //   return {
  //     order: order == 'desc' ? 'descend' : 'ascend',
  //     field,
  //   };
  // }, [variables.orderBy]);

  /*   const [deletePage] = useDeletePageMutation({
    refetchQueries: [LandingPagesDocument],
  }); */

  const { data, loading, previousData, refetch } = useWebsitesQuery({
    fetchPolicy: 'cache-and-network',
    variables,
  });

  const total = useMemo(() => {
    if (loading) {
      return previousData?.websites.length || 0;
    }
    return data?.websites.length || 0;
  }, [data?.websites.length, loading, previousData?.websites.length]);
  const websites = data?.websites || [];

  // const handleSearch = useCallback(
  //   (text: string) => {
  //     history.replace(location.pathname + '?' + qs.stringify({ q: text }));
  //   },
  //   [history, location.pathname],
  // );

  /*   const handleChange = useCallback(
    (_pagination, _filters, _sorter) => {
      const _query: any = {};
      if (variables.filter?.name_contains) {
        _query.q = variables.filter?.name_contains;
      }
      if (!!_sorter) {
        _query.orderBy = _sorter.field + '_' + (_sorter.order == 'ascend' ? 'asc' : 'desc');
      }
      _query.page = _pagination.current;
      history.replace(location.pathname + '?' + qs.stringify(_query));
    },
    [history, location.pathname, variables.filter?.name_contains],
  ); */

  // const handleDelete = useCallback(async (...ids: string[]) => {
  //   console.log(ids);
  //   //   const { data: dresult } = await deletePage({
  //   //     variables: {
  //   //       ids,
  //   //     },
  //   //   });
  //   //   return dresult?.deleteLandingPage || 0;
  // }, []);

  // const handleDeleteInBatch = useCallback(
  //   (selectedRowKeys: string[]) => async () => {
  //     const message = `确定删除选中的, 共 ${selectedRowKeys.length} 个活动吗？`;
  //     const result = await Modal.confirm({
  //       title: '确定删除',
  //       content: (
  //         <>
  //           <p className="tip-confirm">{message}</p>
  //           <p>删除的操作不可逆,请谨慎操作</p>
  //         </>
  //       ),
  //       okClassName: 'btn-danger',
  //       okText: '删除',
  //     });
  //     if (!result.isConfirmed) {
  //       return;
  //     }
  //     await handleDelete(...selectedRowKeys);
  //     Toast.success(`活动批量删除成功`, 2000, {
  //       placement: 'bottom-start',
  //       progressBar: true,
  //     });
  //   },
  //   [handleDelete],
  // );

  // const tableToolbar = useMemo(() => {
  //   return (selectedRowKeys: string[]) => {
  //     return (
  //       <div>
  //         <Button color="success" onClick={handleDeleteInBatch(selectedRowKeys)} variant={false}>
  //           批量删除
  //         </Button>
  //       </div>
  //     );
  //   };
  // }, [handleDeleteInBatch]);

  const handleCloseNewWebsite = useCallback(() => {
    setVisibleNewWebsite(false);
  }, []);

  const handleSuccess = useCallback(() => {
    refetch();
    navigate(`/modules/${module.id}`);
  }, [refetch]);

  const handleOpenNewWebsite = useCallback(() => {
    setVisibleNewWebsite(true);
  }, []);

  return (
    <ContentWrapper
      header={{}}
      loading={loading}
      className="website-list"
      footer={false}
    >
      <div className="my-websites">
        <h1 className="anchor fw-bold mb-5">我的网站({total})</h1>
        <Row
          className="py-2"
          cols={{
            md: 2,
            xl: 5,
          }}
          gutter={{
            default: 5,
            xl: 9,
          }}
        >
          {websites.map((item) => (
            <Col key={item.id} md={4}>
              <Card
                as={Link}
                to={`/websites/${item.id}`}
                className="website-card card-p-0"
              >
                <Card.Body>
                  <Symbol
                    autoColor={false}
                    labelClassName="bg-dark text-inverse-info fs-5tx"
                    // src={item?.url}
                    alt={item.name}
                  />
                </Card.Body>
                <Card.Footer className="p-4">
                  <div className="d-flex flex-column">
                    <h3>{item.name}</h3>
                    <span className="tw-text-ellipsis overflow-hidden">
                      {item.description}
                    </span>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="create-new-website">
        <div className="d-flex flex-column">
          <h1 className="anchor fw-bold mb-5">创建一个新网站</h1>
          <span className="tw-text-ellipsis overflow-hidden">
            创建一个空白网站或从模板开始。
          </span>
        </div>
        <Row
          className="website-templates"
          cols={{
            md: 2,
            xl: 4,
          }}
          gutter={{
            default: 5,
            xl: 9,
          }}
        >
          <Col md={4}>
            <Card
              as="a"
              onClick={handleOpenNewWebsite}
              className="website-card create-website-card card-p-0"
            >
              <Card.Body>
                <div className="create-website-card-inner">
                  <div className="create-website-card__blank_icon">
                    <Icon name="Bootstrap/plus" />
                  </div>
                  <span className="create-website-card__blank_name text-gray-700">
                    空白
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <CreateWebsite
          visible={visibleNewWebsite}
          onSuccess={handleSuccess}
          onClose={handleCloseNewWebsite}
        />
      </div>
    </ContentWrapper>
  );
}

export default WebsiteList;
