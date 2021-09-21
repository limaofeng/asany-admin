import { Tab } from 'react-bootstrap';
import MenuPane from './Secondary/MenuPane';

import { useRef } from 'react';
import Icon from '@asany/icons';

import { useScroll } from '../utils';
import type { MenuData, NuwaComponent } from '@/.umi/app/typings';
import { useReactComponent } from 'sunmao';

type AsideSecondaryProps = {
  menus: MenuData[];
};

function AsideSecondary(props: AsideSecondaryProps) {
  const { menus } = props;

  const footerRef = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useScroll(scrollRef, workspaceRef, [footerRef]);

  return (
    <div className="aside-secondary d-flex flex-row-fluid">
      {/* --begin::Workspace--*/}
      <div ref={workspaceRef} className="aside-workspace my-5 p-5">
        <div className="d-flex h-100 flex-column">
          {/* --begin::Wrapper--*/}
          <div ref={scrollRef} className="flex-column-fluid hover-scroll-y">
            <Tab.Content>
              {/* --begin::Tab pane--*/}
              {menus.map((item) => (
                <Tab.Pane transition={true} eventKey={item.id}>
                  <TabContent menu={item} />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </div>
          <div ref={footerRef} className="flex-column-auto pt-10 px-5">
            <a
              href="../../demo7/dist/documentation/getting-started.html"
              className="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
              title="200+ in-house components and 3rd-party plugins"
            >
              <span className="btn-label">Docs &amp; Components</span>
              <Icon name="Duotune/gen005" className="btn-icon svg-icon-4 ms-2" />
            </a>
          </div>
        </div>
      </div>
      {/* --end::Workspace--*/}
    </div>
  );
}

type TabContentProps = {
  menu: MenuData;
};

type CustomTabContentProps = {
  menu: MenuData;
  component: NuwaComponent;
};

function CustomTabContent(props: CustomTabContentProps) {
  const { component } = props;
  const ReactComponent = useReactComponent(component.template, component.blocks);
  return <ReactComponent />;
}

function TabContent({ menu }: TabContentProps) {
  if (menu.component) {
    return <CustomTabContent menu={menu} component={menu.component} />;
  }
  return <MenuPane />;
}

export default AsideSecondary;
