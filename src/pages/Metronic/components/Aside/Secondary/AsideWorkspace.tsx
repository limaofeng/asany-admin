import { useEffect, useRef } from 'react';

import classnames from 'classnames';

import { useScroll } from '../../utils';
import { useLayout, useLayoutSelector } from '../../Layout/LayoutContext';

type AsideWorkspaceProps = {
  className?: string;
  width?: number;
  children: React.ReactNode;
  padding?: string | false;
  footer?: React.ReactNode;
  collapsible?: boolean;
  resizeable?: boolean;
};

function AsideWorkspace(props: AsideWorkspaceProps) {
  const {
    className,
    padding = 'p-5',
    width = 325,
    children,
    footer,
    collapsible = true,
    resizeable,
  } = props;
  const minimize = useLayoutSelector((state) => state.aside.minimize);
  const asideWidth = useLayoutSelector((state) => state.aside.width);

  const workspaceRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  // const footerRef = useRef<HTMLDivElement>(null);

  const layout = useLayout();

  useScroll(scrollRef, workspaceRef, []);

  useEffect(() => {
    layout.aside.width(width + 100);
  }, [layout.aside, width]);

  useEffect(() => {
    layout.aside.collapsible(collapsible);
  }, [layout.aside, collapsible]);

  useEffect(() => {
    layout.aside.collapsible(!!resizeable);
  }, [layout.aside, resizeable]);

  return (
    <div
      ref={workspaceRef}
      style={{ width: !minimize ? asideWidth - 100 : undefined }}
      className={classnames('aside-workspace', padding, className)}
    >
      <div className="d-flex h-100 flex-column">
        {/* --begin::Wrapper--*/}
        <div ref={scrollRef} className="flex-column-fluid hover-scroll-y">
          {/* {currentMenu && <TabContent menu={currentMenu} />} */}
          <div className="tab-content">
            <div className="tab-pane fade tab-pane fade active show">{children}</div>
          </div>
          {/* <Tab.Content> */}
          {/*menus.map((item) => (
          <Tab.Pane key={item.id} transition={true} eventKey={item.id}>
            <TabContent menu={item} />
          </Tab.Pane>
        ))*/}
          {/* </Tab.Content> */}
        </div>
        {footer}
        {/* <div ref={footerRef} className="flex-column-auto pt-10 px-5">
      <a
        href="#"
        className="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
        title="200+ in-house components and 3rd-party plugins"
      >
        <span className="btn-label"> 开 发 文 档 </span>
        <Icon name="Duotune/gen005" className="btn-icon svg-icon-4 ms-2" />
      </a>
    </div> */}
      </div>
    </div>
  );
}

export default AsideWorkspace;
