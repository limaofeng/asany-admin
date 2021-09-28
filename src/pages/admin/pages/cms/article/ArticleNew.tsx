import { useCallback, useState } from 'react';

import Icon from '@asany/icons';
import type { RouteComponentProps } from 'react-router';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block';
import '@ckeditor/ckeditor5-build-balloon-block/build/translations/zh-cn';
import classnames from 'classnames';

import { Button, Form, Input } from '@/pages/Metronic/components';
import SettingsMenu from '@/components/SettingsMenu';

import './style/ArticleEditor.scss';

type ArticleNewProps = RouteComponentProps;

function ArticleSettings() {
  return (
    <>
      <Form>
        <Form.Item name="name" label="sss">
          <Input size="sm" />
        </Form.Item>
      </Form>
    </>
  );
}

function ArticleNew(props: ArticleNewProps) {
  const { history } = props;
  const [settingsMenuCollapsed, setSettingsMenuCollapsed] = useState(true);
  const [featureImageVisible, setFeatureImageVisible] = useState(true);
  const handleBack = useCallback(() => {
    if (!!history.length) {
      return history.goBack();
    }
    history.push('/cms/channels');
  }, [history]);

  const handleTitleFocus = useCallback(() => {
    setFeatureImageVisible(true);
  }, []);

  const handleTitleBlur = useCallback(() => {
    setFeatureImageVisible(false);
  }, []);

  const handleSettingsMenuToggle = useCallback(() => {
    setSettingsMenuCollapsed((collapsed) => !collapsed);
  }, []);

  return (
    <div className="flex flex-row modal-fullscreen art-main">
      <div className="art-editor">
        <div className="art-editor-header">
          <div className="flex items-center pe-auto">
            <Button
              icon={<Icon name="Duotune/arr074" className="svg-icon-2" />}
              variant="white"
              onClick={handleBack}
            >
              文章
            </Button>
          </div>
          <div className="flex">
            <Button
              variant="white"
              color="primary"
              activeColor="primary"
              activeStyle="text"
              className="me-3"
            >
              预览
            </Button>
            <Button variant="white" className={classnames({ 'me-3': settingsMenuCollapsed })}>
              发布
            </Button>
            {settingsMenuCollapsed && <div className="settings-menu-toggle-spacer" />}
          </div>
        </div>
        <div className="art-editor-body relative w-100 vh-100 overflow-x-hidden hover-scroll-overlay-y px-5 z-0">
          <div className="art-editor-feature-image-container">
            <div
              className={classnames('flex flex-row items-center', {
                invisible: !featureImageVisible,
              })}
            >
              <Button
                icon={<Icon name="Duotune/arr087" className="svg-icon-2" />}
                variantStyle="link"
                activeStyle="text"
                activeColor="gray-700"
                flushed={true}
              >
                添加封面图
              </Button>
            </div>
          </div>
          <div className="art-editor-title">
            <Input
              placeholder="文章标题"
              size="lg"
              bordered={false}
              onFocus={handleTitleFocus}
              onBlur={handleTitleBlur}
            />
          </div>
          <div className="art-editor-content">
            <CKEditor
              editor={BalloonBlockEditor}
              data="<p>Hello from CKEditor 5!</p>"
              config={{
                language: 'zh-cn',
              }}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
          </div>
        </div>
      </div>
      {!settingsMenuCollapsed && <SettingsMenu title="文章设置" content={<ArticleSettings />} />}
      <Button
        className="settings-menu-toggle"
        variant="white"
        icon={<Icon name="Duotune/lay004" className="svg-icon-2" />}
        onClick={handleSettingsMenuToggle}
      />
    </div>
  );
}

export default ArticleNew;
