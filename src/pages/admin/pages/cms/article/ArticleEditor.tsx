import { useCallback, useEffect, useReducer, useRef, useState } from 'react';

import Icon from '@asany/icons';
import type { RouteComponentProps } from 'react-router';
import classnames from 'classnames';
import { useMutation, useQuery } from '@apollo/client';
import { useHoverDirty } from 'react-use';
import NavigationPrompt from 'react-router-navigation-prompt';

import { delayUpdate } from './utils';
import ArticleContentEditor from './components/ArticleContentEditor';
import NavigationPromptModal from './components/NavigationPromptModal';
import { MUTATE_CREATE_ARTICLE, MUTATE_UPDATE_ARTICLE, QUERY_ARTICLE } from './gql/article.gql';
import type { IArticle } from './typings';

import { useForm } from '@/pages/Metronic/components/forms/Form/Form';
import { Button, DatePicker, Form, Input, Select } from '@/pages/Metronic/components';
import SettingsMenu from '@/components/SettingsMenu';
import { delay } from '@/utils';

import './style/ArticleEditor.scss';

type ArticleEditorProps =
  | {
      data?: IArticle;
    } & RouteComponentProps;

type IArticleStatus = 'New' | 'Draft' | 'Published';
type IArticleSavedStatus = 'Saving' | 'NotSaved' | 'Saved';

type ArticleSettingsProps = {
  isNew: boolean;
  onChange: (values: IArticle) => void;
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
  data?: IArticle;
  temp?: IArticle;
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
  const { history } = props;

  const form = useForm();
  const editorRef = useRef<any>(null);
  const container = useRef<HTMLDivElement>(null);

  const coverContainer = useRef<HTMLDivElement>(null);
  const titleContainer = useRef<HTMLDivElement>(null);

  const [, forceRender] = useReducer((s) => s + 1, 0);
  const stateRef = useRef<ArticleState>({ status: 'New', saved: 'Saved' });
  const [settingsMenuCollapsed, setSettingsMenuCollapsed] = useState(false);

  useEffect(() => {
    if (!props.data) {
      return;
    }
    const state = stateRef.current;
    state.data = props.data;
    state.temp = {};
    state.status = STATUS_MAPPINGS[state.data!.status!] as IArticleStatus;
    forceRender();

    const values = { ...state.data };
    for (const key in values) {
      if (values[key] == null) {
        values[key] = undefined;
      }
    }
    form.setFieldsValue(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data]);

  const [createArticle] = useMutation(MUTATE_CREATE_ARTICLE, {
    fetchPolicy: 'no-cache',
  });

  const [updateArticle] = useMutation(MUTATE_UPDATE_ARTICLE, {
    fetchPolicy: 'no-cache',
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
            const { data } = await delay(
              createArticle({
                variables: {
                  input: { ...state.temp, ...values, category: 'news', content: contentWrap },
                },
              }),
              350,
            );
            state.data = data.article;
            state.temp = {};
            state.status = STATUS_MAPPINGS[data.article.status];
          } else {
            await delay(
              updateArticle({
                variables: {
                  id: state.data!.id,
                  input: { ...state.temp, ...values, content: contentWrap },
                },
              }),
              350,
            );
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
    <div className="flex flex-row modal-fullscreen art-main">
      <NavigationPrompt disableNative when={stateRef.current.saved == 'NotSaved'}>
        {({ onConfirm, onCancel }) => (
          <NavigationPromptModal onConfirm={onConfirm} onCancel={onCancel} />
        )}
      </NavigationPrompt>
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
            <div className="art-editor-status px-6">
              <ArticleStatus value={stateRef.current.status} saved={stateRef.current.saved} />
            </div>
          </div>
          <div className="flex">
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
                className={classnames('flex flex-row items-center', {
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
            <div className="art-editor-content">
              <Form.Item name="content" noStyle={true}>
                <ArticleContentEditor container={container} ref={editorRef} />
              </Form.Item>
            </div>
          </Form>
        </div>
        <div className="art-editor-wordcount-container">
          <div className="art-editor-wordcount text-gray-500">437 个字符</div>
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
  );
}

export type ArticleNewProps = RouteComponentProps<any>;

export type ArticleEditProps = RouteComponentProps<any>;

export function ArticleNew(props: ArticleNewProps) {
  return <ArticleEditor {...props} />;
}

export function ArticleEdit(props: ArticleEditProps) {
  const { id } = props.match.params;

  const { data, loading } = useQuery(QUERY_ARTICLE, {
    variables: { id },
    fetchPolicy: 'no-cache',
  });

  console.log('ArticleEdit', data, loading);

  return <ArticleEditor {...props} data={data?.article} />;
}

export default ArticleEditor;
