import React from 'react';
import type { RouteComponentProps } from 'react-router';

import { SketchProvider, useReactComponent } from '@asany/sunmao';

import { PageContent } from '@/layouts/components';
import { useModelViewQuery } from '@/pages/module/hooks';
import type { Component, Module } from '@/types';

type ContentViewProps = RouteComponentProps<
  { mid?: string; vid?: string },
  any,
  { module: Module; baseUrl: string }
> & {
  children: React.ReactNode;
};

type ViewLoaderProps = {
  component: Component;
};

function ViewLoader(props: ViewLoaderProps) {
  // const sketch = useSketch();

  const component = useReactComponent(
    props.component?.template || '',
    props.component?.blocks,
    {
      id: 'root',
      dev: true,
    },
  );

  /* const [settingsVisible, setSettingsVisible] = useState(false);

  const handleOpenSettings = useCallback(() => {
    setSettingsVisible(true);
  }, []);

  const handleCloseSettings = useCallback(() => {
    setSettingsVisible(false);
  }, []);

  const handleBlockClick = useCallback(() => {
    // console.log('handleBlockClick', id);
  }, []);

  const handleBlockMouseEnter = useCallback(() => {
    // console.log('handleBlockMouseEnter', key);
  }, []);

  const handleBlockMouseLeave = useCallback(() => {
    // console.log('handleBlockMouseLeave', key);
  }, []); */

  /*  useEffect(() => {
    const unbindBlockClick = sketch.on('block-click', handleBlockClick);
    const unbindBlockMouseEnter = sketch.on('block-mouse-enter', handleBlockMouseEnter);
    const unbindBlockMouseLeave = sketch.on('block-mouse-leave', handleBlockMouseLeave);
    return () => {
      unbindBlockClick();
      unbindBlockMouseEnter();
      unbindBlockMouseLeave();
    };
  }, [handleBlockClick, handleBlockMouseEnter, handleBlockMouseLeave, sketch]);
 */

  return (
    <>
      {component && React.createElement(component)}
      {/* <div className="engage-toolbar d-flex position-fixed px-5 fw-bold zindex-2 top-50 end-0 transform-90 mt-5 mt-lg-20 gap-2">
        <button
          className="engage-demos-toggle engage-btn btn shadow-sm fs-6 px-4 rounded-top-0"
          onClick={handleOpenSettings}
        >
          <span id="kt_engage_demos_label">页面设置</span>
        </button>
        <button className="engage-help-toggle btn engage-btn shadow-sm px-5 rounded-top-0">
          高级定制化
        </button>
      </div>
      <ViewSettings visible={settingsVisible} onClose={handleCloseSettings} /> */}
    </>
  );
}

function ContentView(props: ContentViewProps) {
  const { vid: id } = props.match.params;

  const { data, loading } = useModelViewQuery({
    variables: {
      id,
    },
  });

  const view = data?.view;

  console.log('DefaultListView', data, id);

  return (
    <PageContent className="pages-module-content-model-view" loading={loading}>
      <SketchProvider>
        <ViewLoader component={view?.component as any} />
      </SketchProvider>
    </PageContent>
  );
}

export default ContentView;
