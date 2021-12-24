import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';

import Icon from '@asany/icons';
import type { RouteComponentProps } from 'react-router';
import classnames from 'classnames';
import { useHoverDirty } from 'react-use';
import NavigationPrompt from 'react-router-navigation-prompt';

import {
  useArticleChannelAllQuery,
  useArticleQuery,
  useCreateArticleMutation,
  useUpdateArticleMutation,
} from '../hooks';

import { delayUpdate } from './utils';
import type { EditorStyle } from './components/ArticleContentEditor';
import ArticleContentEditor from './components/ArticleContentEditor';
import NavigationPromptModal from './components/NavigationPromptModal';

import { useForm } from '@/pages/Metronic/components/forms/Form/Form';
import { Button, DatePicker, Form, Input, Select, Spin } from '@/pages/Metronic/components';
import SettingsMenu from '@/components/SettingsMenu';
import { delay } from '@/utils';
import type { Article } from '@/types';

import './style/ArticleEditor.scss';

type ArticleEditorProps =
  | {
      data?: Article;
      loading?: boolean;
    } & RouteComponentProps;

type IArticleStatus = 'New' | 'Draft' | 'Published';
type IArticleSavedStatus = 'Saving' | 'NotSaved' | 'Saved';

type ArticleSettingsProps = {
  isNew: boolean;
  onChange: (values: Article) => void;
};

const STATUS_MAPPINGS = {
  DRAFT: 'Draft',
  PUBLISHED: 'Published',
};

function ArticleSettings({ isNew, onChange }: ArticleSettingsProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSave = useCallback(
    delayUpdate(
      {},
      (_: any, diff: any) => {
        onChange(diff);
      },
      { delay: 1000, onlyDiff: true },
    ),
    [],
  );
  const handleChange = useCallback((_, values) => {
    handleSave(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="article-settings">
      <Form onValuesChange={handleChange} component={false}>
        <Form.Item dependencies={['slug']} className="mb-10" label="链接地址">
          {(form) => {
            return (
              <>
                <Form.Item name="slug" noStyle={true}>
                  <Input size="sm" />
                </Form.Item>
                <p className="mt-1 text-gray-600">localhost:2368/{form.getFieldValue('slug')}/</p>
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
      {!isNew && (
        <Button
          icon={<Icon name="Duotune/arr015" className="svg-icon-2" />}
          activeColor="danger"
          variantStyle="light"
          variant="danger"
          className="mb-10"
        >
          删除文章
        </Button>
      )}
    </div>
  );
}

function ArticleStatus({ value, saved }: { value: IArticleStatus; saved: IArticleSavedStatus }) {
  let text = '草稿 - 已保存';
  if (saved === 'Saving') {
    text = '保存中...';
  } else {
    if (value === 'New') {
      text = '新的';
    }
    if (value === 'Draft') {
      text = '草稿' + (saved != 'NotSaved' ? ' - 已保存' : '');
    }
  }
  return <span className="text-gray-600 ls-2">{text}</span>;
}

type ArticleState = {
  status: IArticleStatus;
  saved: IArticleSavedStatus;
  data?: Article;
  temp?: Article;
};

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

function ArticleEditor(props: ArticleEditorProps) {
  const { history, loading = false } = props;

  const form = useForm();
  const editorRef = useRef<any>(null);
  const container = useRef<HTMLDivElement>(null);

  const coverContainer = useRef<HTMLDivElement>(null);
  const titleContainer = useRef<HTMLDivElement>(null);

  const [, forceRender] = useReducer((s) => s + 1, 0);
  const stateRef = useRef<ArticleState>({ status: 'New', saved: 'Saved' });
  const [settingsMenuCollapsed, setSettingsMenuCollapsed] = useState(true);
  const [editor, setEditor] = useState<EditorStyle>('BalloonBlockEditor');
  const [wordCount, setWordCount] = useState<number>(0);

  const { data: { channels: _channels } = {} } = useArticleChannelAllQuery();

  const handleWordCount = useCallback((wc) => {
    setWordCount(wc.characters);
  }, []);

  const channels = useMemo(
    () => (_channels || []).map((item) => ({ label: item.fullName, value: item.id })),
    [_channels],
  );

  useEffect(() => {
    if (!props.data) {
      return;
    }
    const state = stateRef.current;
    state.data = { ...props.data, channels: props.data.channels.map((item: any) => item.id) };
    state.temp = {} as any;
    state.status = STATUS_MAPPINGS[state.data!.status!] as IArticleStatus;
    forceRender();

    const values = { ...state.data, content: (state.data.content as any)?.text };
    for (const key in values) {
      if (values[key] == null) {
        values[key] = undefined;
      }
    }
    form.setFieldsValue(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data]);

  const [createArticle] = useCreateArticleMutation({
    fetchPolicy: 'network-only',
  });

  const [updateArticle] = useUpdateArticleMutation({
    fetchPolicy: 'network-only',
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSave = useCallback(
    delayUpdate(
      {},
      async (_: any, values: any) => {
        const state = stateRef.current;
        const contentWrap = values.content ? { type: 'HTML', text: values.content } : undefined;
        state.saved = 'Saving';
        forceRender();
        try {
          if (state.status == 'New') {
            if (!values.title) {
              state.saved = 'NotSaved';
              forceRender();
              return;
            }
            const { data } = await delay(
              createArticle({
                variables: {
                  input: { ...state.temp, ...values, category: 'news', content: contentWrap },
                },
              }),
              350,
            );
            state.data = {
              ...data.article,
              channels: data.article.channels.map((item: any) => item.id),
            };
            state.temp = {} as any;
            state.status = STATUS_MAPPINGS[data.article.status];
          } else {
            const { data } = await delay(
              updateArticle({
                variables: {
                  id: state.data!.id,
                  input: { ...state.temp, ...values, content: contentWrap },
                },
              }),
              350,
            );
            state.data = {
              ...data.article,
              channels: data.article.channels.map((item: any) => item.id),
            };
          }
        } catch (e) {
          state.temp = values;
          console.error(e);
        }
        state.saved = 'Saved';
        forceRender();
      },
      { delay: 1000, onlyDiff: true },
    ),
    [],
  );

  const handleBack = useCallback(() => {
    if (!!history.length) {
      return history.goBack();
    }
    history.push('/cms/channels');
  }, [history]);

  const handleSettingsData = useCallback(async (values) => {
    const state = stateRef.current;
    if (state.status == 'New') {
      state.saved = 'Saving';
      forceRender();
      state.temp = await delay(Promise.resolve({ ...state.temp, ...values }), 350);
      state.saved = 'NotSaved';
      forceRender();
    } else {
      handleSave(values);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSettingsMenuToggle = useCallback(() => {
    setSettingsMenuCollapsed((collapsed) => !collapsed);
  }, []);

  const handlePressEnterOfTitle = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const _editor = editorRef.current;
    if (!!_editor) {
      // 创建空行
      _editor.model.change((writer: any) => {
        _editor.focus();

        // 如果存在空行
        if (_editor.getData().startsWith('<p>&nbsp;</p>')) {
          return focusFirstRange(_editor, writer);
        }

        const selection = focusFirstRange(_editor, writer);

        // 插入空行
        const p1 = writer.createElement('paragraph');
        const p2 = writer.createElement('paragraph');
        const blockQuote = writer.createElement('p');
        const docFrag = writer.createDocumentFragment();
        writer.append(p1, docFrag);
        writer.append(blockQuote, docFrag);
        writer.append(p2, blockQuote);

        // 插入模型片段
        _editor.model.insertContent(docFrag, selection);

        focusFirstRange(_editor, writer);
      });
      // 获取焦点
      // _editor.focus();
    }
  }, []);

  const handleChange = useCallback((_, values) => {
    const state = stateRef.current;
    state.saved = 'NotSaved';
    forceRender();
    handleSave(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isHoveringCover = useHoverDirty(coverContainer);
  const isHoveringTitle = useHoverDirty(titleContainer);
  const isHoveringCoverOrTitle = isHoveringCover || isHoveringTitle;

  return (
    <Spin spinning={loading}>
      <div className="tw-flex tw-flex-row modal-fullscreen art-main">
        <NavigationPrompt disableNative when={stateRef.current.saved == 'NotSaved'}>
          {({ onConfirm, onCancel }) => (
            <NavigationPromptModal onConfirm={onConfirm} onCancel={onCancel} />
          )}
        </NavigationPrompt>
        <div className="art-editor">
          <div className="art-editor-header">
            <div className="tw-flex tw-items-center pe-auto">
              <Button
                icon={<Icon name="Duotune/arr074" className="svg-icon-2" />}
                variant="white"
                onClick={handleBack}
              >
                文章
              </Button>
              <div className="art-editor-status px-6">
                <ArticleStatus value={stateRef.current.status} saved={stateRef.current.saved} />
              </div>
            </div>
            <div className="tw-flex">
              {stateRef.current.status !== 'New' && (
                <>
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
                </>
              )}
              {settingsMenuCollapsed && <div className="settings-menu-toggle-spacer" />}
            </div>
          </div>
          <div
            ref={container}
            className="art-editor-body relative w-100 vh-100 overflow-x-hidden hover-scroll-overlay-y px-5"
          >
            <Form
              form={form}
              initialValues={stateRef.current.data || {}}
              onValuesChange={handleChange}
              component={false}
            >
              <div ref={coverContainer} className="art-editor-feature-image-container">
                <div
                  className={classnames('tw-flex flex-row tw-items-center', {
                    invisible: !isHoveringCoverOrTitle,
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
              <div className="art-editor-title" ref={titleContainer}>
                <Form.Item name="title" noStyle={true}>
                  <Input.TextArea
                    autoSize={true}
                    bordered={false}
                    onPressEnter={handlePressEnterOfTitle}
                    placeholder="文章标题"
                  />
                </Form.Item>
              </div>
              <div className="art-editor-channel">
                <Form.Item name="channels" noStyle={true}>
                  <Select
                    size="sm"
                    multiple
                    placeholder="选择栏目"
                    width="auto"
                    options={channels}
                  />
                </Form.Item>
              </div>
              <div className="art-editor-content">
                <Form.Item name="content" noStyle={true}>
                  <ArticleContentEditor
                    onWordCount={handleWordCount}
                    editor={editor}
                    container={container}
                    ref={editorRef}
                  />
                </Form.Item>
              </div>
            </Form>
          </div>
          <div className="art-editor-switch-editor text-gray-500">
            <a onClick={() => setEditor('ClassicEditor')}>经典</a>
            <a onClick={() => setEditor('BalloonBlockEditor')}>简洁</a>
          </div>
          <div className="art-editor-wordcount-container">
            <div id="word-count" className="art-editor-wordcount text-gray-500">
              {wordCount} 个字符
            </div>
            <Icon name="Duotune/art008" className="svg-icon-4 px-2 py-2" />
          </div>
        </div>
        {!settingsMenuCollapsed && (
          <SettingsMenu
            title="文章设置"
            content={
              <ArticleSettings
                isNew={stateRef.current.status === 'New'}
                onChange={handleSettingsData}
              />
            }
          />
        )}
        <Button
          className="settings-menu-toggle"
          variant="white"
          icon={<Icon name="Duotune/lay004" className="svg-icon-2" />}
          onClick={handleSettingsMenuToggle}
        />
      </div>
    </Spin>
  );
}

export type ArticleNewProps = RouteComponentProps<any>;

export type ArticleEditProps = RouteComponentProps<any>;

export function ArticleNew(props: ArticleNewProps) {
  return <ArticleEditor {...props} />;
}

export function ArticleEdit(props: ArticleEditProps) {
  const { id } = props.match.params;

  const { data, loading } = useArticleQuery({
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  return <ArticleEditor {...props} loading={loading} data={data?.article as any} />;
}

export default ArticleEditor;
