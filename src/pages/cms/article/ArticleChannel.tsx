import { useRef, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import Icon from '@asany/icons';

import { ContentWrapper, Navbar } from '@/layouts/components';
import { Button, CountUp, Dropdown, Menu, Nav, Stat, User } from '@/metronic';
import type { ArticleCategory } from '@/types';

import { useArticleCategoryQuery } from '../hooks';

function ArticleChannel() {
  const params = useParams<{
    id: string;
  }>();

  const temp = useRef<ArticleCategory>({} as any);

  const [visibleMoreActions, setVisibleMoreActions] = useState(false);

  const { data, loading } = useArticleCategoryQuery({
    variables: { id: params.id },
  });

  const { category } = data || { category: temp.current };

  if (!loading) {
    temp.current = category as any;
  }

  return (
    <ContentWrapper
      header={{
        title: '新闻动态',
      }}
    >
      <Navbar>
        <Navbar.Title>
          <span className="text-gray-800 text-hover-primary fs-2 fw-bolder me-3">
            {category?.name}
          </span>
        </Navbar.Title>
        <Navbar.Description>{category?.description}</Navbar.Description>
        <Navbar.Cover>
          <img
            className="mw-50px mw-lg-75px"
            src="/assets/media/svg/brand-logos/volicity-9.svg"
            alt="image"
          />
        </Navbar.Cover>
        <Navbar.Toolbar>
          <Button
            as={Link}
            className="me-3"
            size="sm"
            background="light"
            activeTextColor="primary"
            to="/cms/articles/new"
          >
            新建信息
          </Button>
          <Button className="me-3" size="sm">
            添加子栏目
          </Button>
          {/*--begin::Menu--*/}
          <div className="me-0">
            <Dropdown
              overlay={
                <Menu className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4">
                  <Menu.Item key="delete" className="px-3 actions-delete">
                    删除
                  </Menu.Item>
                </Menu>
              }
              placement="bottomRight"
              onVisibleChange={setVisibleMoreActions}
              visible={visibleMoreActions}
            >
              <Button
                size="sm"
                background="light"
                activeTextColor="primary"
                icon={<i className="bi bi-three-dots fs-3" />}
              />
            </Dropdown>
          </div>
          {/*--end::Menu--*/}
        </Navbar.Toolbar>
        <Navbar.Body>
          <div className="d-flex flex-wrap">
            <Stat className="min-w-125px py-3 px-4 me-6 mb-3" label="Due Date">
              <div className="d-flex align-items-center">
                <div className="fs-4 fw-bolder">29 Jan, 2021</div>
              </div>
            </Stat>
            <Stat
              className="min-w-125px py-3 px-4 me-6 mb-3"
              label="Open Tasks"
            >
              <Icon
                name="Duotune/arr065"
                className="svg-icon-3 svg-icon-danger me-2"
              />
              <CountUp className="fs-4 fw-bolder" value={75}>
                100
              </CountUp>
            </Stat>
            <Stat
              className="min-w-125px py-3 px-4 me-6 mb-3"
              label="Budget Spent"
            >
              <Icon
                name="Duotune/arr066"
                className="svg-icon-3 svg-icon-success me-2"
              />
              <CountUp className="fs-4 fw-bolder" value={15000} prefix="$">
                0
              </CountUp>
            </Stat>
          </div>
          <User.Users
            size={8}
            users={[
              { avatar: '', name: 'Alan Warden' },
              {
                avatar: '/assets/media/avatars/150-12.jpg',
                name: 'Michael Eberon',
              },
              {
                avatar: '/assets/media/avatars/150-13.jpg',
                name: 'Michelle Swanston',
              },
              {
                avatar: '/assets/media/avatars/150-5.jpg',
                name: 'Francis Mitcham',
              },
              { avatar: '', name: 'Susan Redwood' },
              {
                avatar: '/assets/media/avatars/150-3.jpg',
                name: 'Melody Macy',
              },
              { avatar: '', name: 'Perry Matthew' },
              {
                avatar: '/assets/media/avatars/150-7.jpg',
                name: 'Barry Walter',
              },
              { avatar: '', name: 'Peter' },
            ]}
          />
        </Navbar.Body>
        <Navbar.Footer className="h-45px">
          <Nav selectedKey="settings" className="fs-5 fw-bolder">
            <Nav.Item key="article">文章</Nav.Item>
            <Nav.Item key="settings">设置</Nav.Item>
          </Nav>
        </Navbar.Footer>
      </Navbar>
      <Outlet
        context={{
          rootCategoryId: category?.id,
          categories: [],
          baseUrl: location.pathname,
        }}
      />
    </ContentWrapper>
  );
}

export default ArticleChannel;
