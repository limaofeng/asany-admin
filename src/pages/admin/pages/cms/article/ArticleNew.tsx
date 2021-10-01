/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useRef, useState } from 'react';

import Icon from '@asany/icons';
import type { RouteComponentProps } from 'react-router';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block';
import '@ckeditor/ckeditor5-build-balloon-block/build/translations/zh-cn';
import classnames from 'classnames';

import { delayUpdate } from './utils';

import { Button, DatePicker, Form, Input, Select } from '@/pages/Metronic/components';
import SettingsMenu from '@/components/SettingsMenu';

import './style/ArticleEditor.scss';

type ArticleNewProps = RouteComponentProps;

function ArticleSettings() {
  const handleSave = useCallback(
    delayUpdate(
      {},
      (value: any, diff: any) => {
        console.log(`执行更新`, value, diff);
      },
      { delay: 1000, onlyDiff: true },
    ),
    [],
  );
  const handleChange = useCallback((_, values) => {
    console.log(values);
    handleSave(values);
  }, []);

  return (
    <div className="article-settings">
      <Form initialValues={{ url: '123' }} onValuesChange={handleChange} component={false}>
        <Form.Item dependencies={['url']} className="mb-10" label="链接地址">
          {(form) => {
            return (
              <>
                <Form.Item name="url" noStyle={true}>
                  <Input size="sm" />
                </Form.Item>
                <p className="mt-1 text-gray-600">localhost:2368/{form.getFieldValue('url')}/</p>
              </>
            );
          }}
        </Form.Item>
        <Form.Item className="mb-10" name="publishedAt" label="发布时间">
          <DatePicker size="sm" />
        </Form.Item>
        <Form.Item className="mb-10" name="tags" label="标签">
          <Select size="sm" />
        </Form.Item>
        <Form.Item className="mb-10" name="access" label="访问权限">
          <Select size="sm" options={[{ value: 'public', label: '完全公开' }]} />
        </Form.Item>
        <Form.Item className="mb-10" name="summary" label="摘要">
          <Input.TextArea autoSize={{ minRows: 3 }} />
        </Form.Item>
        <Form.Item className="mb-10" name="author" label="作者">
          <Input size="sm" />
        </Form.Item>
      </Form>
      <Button
        icon={<Icon name="Duotune/arr015" className="svg-icon-2" />}
        activeColor="danger"
        variantStyle="light"
        variant="danger"
        className="mb-10"
      >
        删除文章
      </Button>
    </div>
  );
}

/**
 * 设置光标位置
 * @returns selection
 */
function focusFirstRange(editor: any, writer: any) {
  const firstRange = editor.model.document._getDefaultRange();
  const selection = writer.createSelection(firstRange);
  writer.setSelection(selection);
  return selection;
}

function ArticleNew(props: ArticleNewProps) {
  const { history } = props;

  const editorRef = useRef<any>(null);
  const ref = useRef<HTMLDivElement>(null);

  const [settingsMenuCollapsed, setSettingsMenuCollapsed] = useState(false);
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

  const handlePressEnterOfTitle = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const editor = editorRef.current;
    if (!!editor) {
      // 创建空行
      editor.model.change((writer: any) => {
        editor.focus();

        // 如果存在空行
        if (editor.getData().startsWith('<p>&nbsp;</p>')) {
          return focusFirstRange(editor, writer);
        }

        const selection = focusFirstRange(editor, writer);

        // 插入空行
        const p1 = writer.createElement('paragraph');
        const p2 = writer.createElement('paragraph');
        const blockQuote = writer.createElement('p');
        const docFrag = writer.createDocumentFragment();
        writer.append(p1, docFrag);
        writer.append(blockQuote, docFrag);
        writer.append(p2, blockQuote);

        // 插入模型片段
        editor.model.insertContent(docFrag, selection);

        focusFirstRange(editor, writer);
      });
      // 获取焦点
      // editor.focus();

      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  const handleChange = useCallback((_, values) => {
    console.log(values);
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
            <div className="art-editor-status px-4">
              <span className="text-gray-600 ls-2">草稿 - 已保存</span>
            </div>
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
        <div
          ref={ref}
          className="art-editor-body relative w-100 vh-100 overflow-x-hidden hover-scroll-overlay-y px-5 z-0"
        >
          <Form initialValues={{ url: '123' }} onValuesChange={handleChange} component={false}>
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
              <Form.Item name="title" noStyle={true}>
                <Input.TextArea
                  autoSize={true}
                  bordered={false}
                  onPressEnter={handlePressEnterOfTitle}
                  placeholder="文章标题"
                  onFocus={handleTitleFocus}
                  onBlur={handleTitleBlur}
                />
              </Form.Item>
            </div>
            <div className="art-editor-content">
              <CKEditor
                editor={BalloonBlockEditor}
                data="<p>Hello from CKEditor 5!</p>"
                config={{
                  language: 'zh-cn',
                }}
                onReady={(editor: any) => {
                  // 解决 BalloonBlockEditor 浮标滚动 BUG
                  const body = editor.ui.view.body._bodyCollectionContainer;
                  editor.ui.view.element = ref.current;
                  body.remove();
                  editor.ui.view.element.appendChild(body);
                  editorRef.current = editor;
                }}
                onChange={(event: any, editor: any) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
              />
            </div>
          </Form>
        </div>
        <div className="art-editor-wordcount-container">
          <div className="art-editor-wordcount text-gray-500">437 个字符</div>
          <Icon name="Duotune/art008" className="svg-icon-4 px-2 py-2" />
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
