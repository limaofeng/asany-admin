import { useCallback, useEffect, useReducer, useRef } from 'react';

import type { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import Icon from '@asany/icons';
import ReactQuill, { Quill } from 'react-quill';

import {
  Button,
  Card,
  EmailTagsInput,
  Form,
  Input,
  Modal,
  QueueUpload,
  Tooltip,
  parseMail,
} from '@/pages/Metronic/components';
import type { QueueUploadRef } from '@/pages/Metronic/components';
import type { MailboxMessage } from '@/types';
import { toHtml, toPlainText } from '@/pages/Metronic/components/utils/format';

const RULE_VERIFY_MAIL = {
  async validator(_: any, emails: string[]) {
    for (const email of emails) {
      if (parseMail(email).invalid) {
        throw new Error('电子邮件地址无效');
      }
    }
  },
};

const Size = Quill.import('attributors/style/size');
const Font = Quill.import('attributors/style/font');

const fontSize = [
  '9px',
  '10px',
  '11px',
  '12px',
  '13px',
  false,
  '16px',
  '18px',
  '24px',
  '36px',
  '48px',
  '64px',
  '72px',
  '96px',
  '144px',
  '288px',
];

Size.whitelist = fontSize;

const fontFamily = [
  'SimSun',
  'SimHei',
  'Microsoft-YaHei',
  'KaiTi',
  'FangSong',
  'Arial',
  'pingfang',
];

Font.whitelist = fontFamily;

Quill.register(Size, true);
Quill.register(Font, true);

type ContentEditorProps = {
  mode: 'html' | 'plain';
  value?: string;
  onChange?: (value: string) => void;
};

function ContentEditor(props: ContentEditorProps) {
  const { mode, onChange } = props;

  const valueRef = useRef(props.value || '');

  const handleChange = useCallback(
    (_value) => {
      onChange && onChange((valueRef.current = _value));
    },
    [onChange],
  );

  const handleTextChange = useCallback(
    function (e) {
      onChange && onChange(e.target.value);
    },
    [onChange],
  );

  if (mode == 'html') {
    return (
      <ReactQuill
        id="kt_inbox_form_editor"
        className="quill-zh_hans"
        modules={{
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ font: fontFamily }],
            [{ size: fontSize }],
            [{ color: [] }, { background: [] }],
            [{ list: 'bullet' }, { list: 'ordered' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ align: [] }],
            ['clean'],
          ],
        }}
        placeholder="输入正文"
        theme="snow"
        value={props.value}
        onChange={handleChange}
      />
    );
  }
  return (
    <div id="kt_inbox_form_editor" className="bg-transparent border-0 px-3">
      <Input.TextArea
        bordered={false}
        value={props.value}
        onChange={handleTextChange}
        className="editor_mode_text"
        placeholder="输入正文"
      />
    </div>
  );
}

type MailEditorProps = {
  message?: MailboxMessage;
  saveState: 'default' | 'saving' | 'saved';
  onAutoSave: (values: any) => void;
};

function MailEditor(props: MailEditorProps) {
  const { message, saveState, onAutoSave } = props;

  const state = useRef<{
    mode: 'plain' | 'html';
    recipients: ('cc' | 'bcc')[];
    title: string;
    isLoad: boolean;
  }>({
    mode: 'plain',
    recipients: [],
    title: '',
    isLoad: false,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const form = Form.useForm();

  const queueUpload = useRef<QueueUploadRef>(null);

  const buildToggleRecipients = useCallback(
    (method: 'cc' | 'bcc') => () => {
      if (state.current.recipients.includes(method)) {
        state.current.recipients = state.current.recipients.filter((item) => item != method);
      }
      state.current.recipients = [...state.current.recipients, method];
      forceRender();
    },
    [],
  );

  const toggleMode = useCallback(() => {
    const newMode = state.current.mode == 'plain' ? 'html' : 'plain';
    const body: string = form.getFieldValue('body');
    if (newMode == 'plain') {
      form.setFieldsValue({
        body: toPlainText(body, { text: 'format' }),
      });
    } else {
      form.setFieldsValue({
        body: toHtml(body),
      });
    }
    state.current.mode = newMode;
    const allValues = form.getFieldsValue();
    onAutoSave && onAutoSave({ ...allValues, mimeType: `text/${state.current.mode}` });
  }, [form, onAutoSave]);

  useEffect(() => {
    if (state.current.mode == 'plain') {
      return;
    }
    const toolbar = document.querySelector('.ql-toolbar');
    toolbar?.classList.add('px-5', 'border-top-0', 'border-start-0', 'border-end-0');
    const container = document.querySelector('.ql-container');
    // console.log('container', container, container?.classList, container?.classList.add);
    container?.classList.add('bg-transparent', 'border-0', 'px-3', 'ql-snow');
  }, [state.current.mode]);

  const handleUploadAttachment = useCallback((e: React.MouseEvent<HTMLElement>) => {
    queueUpload.current?.browse(e);
  }, []);

  const handleValuesChange = useCallback(
    (changedValues, allValues) => {
      if (changedValues.subject) {
        state.current.title = changedValues.subject;
        forceRender();
      }
      onAutoSave && onAutoSave({ ...allValues, mimeType: `text/${state.current.mode}` });
    },
    [onAutoSave],
  );

  const handleSubmit = useCallback(async () => {
    await queueUpload.current?.uploadAll();
    try {
      const values = await form.validateFields();
      console.log('handleSubmit', values);
    } catch (e) {
      const error = e as ValidateErrorEntity;
      const firstError = error.errorFields[0];

      console.log('error', error);

      let content;
      if (firstError.name.includes('to')) {
        content = `“收件人：”字段中的一个或多个地址无效。请在纠正后重试。`;
      } else if (firstError.name.includes('cc')) {
        content = `“抄送：”字段中的一个或多个地址无效。请在纠正后重试。`;
      } else if (firstError.name.includes('bcc')) {
        content = `“密送：”字段中的一个或多个地址无效。请在纠正后重试。`;
      } else {
        content = '请在纠正后重试。';
      }

      Modal.error({
        title: firstError.errors[0],
        content,
      });
    }
  }, [form]);

  useEffect(() => {
    if (!message || state.current.isLoad) {
      return;
    }
    state.current.title = message.subject!;
    state.current.isLoad = true;
    form.setFieldsValue({ ...message });
    if (message.cc.length && !state.current.recipients.includes('cc')) {
      state.current.recipients.push('cc');
    }
    if (message.bcc.length && !state.current.recipients.includes('bcc')) {
      state.current.recipients.push('bcc');
    }
    state.current.mode = message.mimeType?.endsWith('html') ? 'html' : 'plain';
    forceRender();
  }, [form, message]);

  const { recipients, mode } = state.current;

  return (
    <Card className="email-compose-editor">
      <Card.Header>
        <Card.Title>{state.current.title || '新信息'}</Card.Title>
        <Card.Toolbar className="text-gray-600">
          {saveState == 'saving' && '正在存储草稿...'}
          {saveState == 'saved' && '已存储'}
        </Card.Toolbar>
      </Card.Header>
      <Card.Body className="p-0">
        <Form
          form={form}
          initialValues={{ ...(message || {}) }}
          onValuesChange={handleValuesChange}
          id="kt_inbox_compose_form"
        >
          <div className="email-compose-editor-body">
            <div className="d-flex align-items-center border-bottom px-8 min-h-45px">
              <div className="text-dark fw-bolder w-75px">收件人:</div>
              <Form.Item noStyle name="to" rules={[RULE_VERIFY_MAIL]}>
                <EmailTagsInput className="border-0" transparent />
              </Form.Item>
              <div className="ms-auto w-75px text-end">
                {!recipients.includes('cc') && (
                  <span
                    onClick={buildToggleRecipients('cc')}
                    className="text-muted fs-bold cursor-pointer text-hover-primary me-2"
                  >
                    抄送
                  </span>
                )}
                {!recipients.includes('bcc') && (
                  <span
                    onClick={buildToggleRecipients('bcc')}
                    className="text-muted fs-bold cursor-pointer text-hover-primary"
                  >
                    密送
                  </span>
                )}
              </div>
            </div>
            {recipients.includes('cc') && (
              <div className="align-items-center border-bottom ps-8 pe-5 min-h-45px d-flex">
                <div className="text-dark fw-bolder w-75px">抄送:</div>
                <Form.Item noStyle name="cc" rules={[RULE_VERIFY_MAIL]}>
                  <EmailTagsInput className="border-0" transparent />
                </Form.Item>
                <span
                  className="btn btn-clean btn-xs btn-icon"
                  onClick={buildToggleRecipients('cc')}
                >
                  <i className="la la-close" />
                </span>
              </div>
            )}
            {recipients.includes('bcc') && (
              <div className="align-items-center border-bottom inbox-to-bcc ps-8 pe-5 min-h-45px d-flex">
                <div className="text-dark fw-bolder w-75px">密送:</div>
                <Form.Item noStyle name="bcc" rules={[RULE_VERIFY_MAIL]}>
                  <EmailTagsInput className="border-0" transparent />
                </Form.Item>
                <span
                  className="btn btn-clean btn-xs btn-icon"
                  onClick={buildToggleRecipients('bcc')}
                >
                  <i className="la la-close" />
                </span>
              </div>
            )}
            <div className="border-bottom">
              <Form.Item noStyle name="subject">
                <Input className="border-0 px-8 min-h-45px" placeholder="主题" transparent />
              </Form.Item>
            </div>
            <Form.Item noStyle name="body">
              <ContentEditor mode={mode} />
            </Form.Item>
            <Form.Item noStyle name="attachments">
              <QueueUpload ref={queueUpload} namespace="email" />
            </Form.Item>
          </div>
          <div className="d-flex flex-stack flex-wrap gap-2 py-5 ps-8 pe-5 border-top">
            <div className="d-flex align-items-center me-3">
              <div className="btn-group me-4">
                <Button
                  htmlType="button"
                  loading={false}
                  className="fs-bold px-8"
                  variant="primary"
                  onClick={handleSubmit}
                >
                  发送
                </Button>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span
                onClick={handleUploadAttachment}
                className="btn btn-icon btn-sm btn-clean btn-active-light-primary me-2 dz-clickable"
              >
                <Icon className="svg-icon-2 m-0" name="Duotune/com008" />
              </span>
              <Tooltip title="切换编辑器" placement="bottom">
                <Button
                  as="span"
                  size="sm"
                  variant="clean"
                  activeColor="light-primary"
                  className="btn-clean"
                  icon={<Icon className="svg-icon-2" name="Duotune/art001" />}
                  onClick={toggleMode}
                />
              </Tooltip>
            </div>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default MailEditor;
