import { useRef } from 'react';
import React from 'react';

import { useScroll } from '../utils';

type AsideSecondaryProps = {
  children: React.ReactNode;
};

function AsideSecondary(props: AsideSecondaryProps) {
  const { children } = props;

  // const footerRef = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useScroll(scrollRef, workspaceRef, []);

  return (
    <div className="aside-secondary d-flex flex-row-fluid">
      {/* --begin::Workspace--*/}
      <div ref={workspaceRef} className="aside-workspace my-5 p-5">
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
      {/* --end::Workspace--*/}
    </div>
  );
}

export default React.memo(AsideSecondary);
