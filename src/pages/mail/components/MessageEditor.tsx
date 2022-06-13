import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import Icon from '@asany/icons';
import TagsInput, { emailValidator, parseEmailTag } from '@asany/tags-input';
import type { ValidateErrorEntity } from 'rc-field-form/lib/interface';

import {
  MailboxesDocument,
  useCreateMailboxMessageMutation,
  useSendMailboxMessageMutation,
  useUpdateMailboxMessageMutation,
} from '../hooks';

import { Button, Card, Form, Input, Modal, QuillEditor, Tooltip, Upload } from '@/metronic';
import type { QueueUploadRef } from '@/metronic/typings';
import { useAutoSave } from '@/metronic/utils';
import { toHtml, toPlainText } from '@/metronic/utils/format';
import type { MailboxMessage, MailboxMessageCreateInput } from '@/types';
import { delay } from '@/utils';

const RULE_VERIFY_MAIL = {
  async validator(_: any, emails: string[]) {
    for (const email of emails) {
      if (emailValidator(email)) {
        throw new Error('电子邮件地址无效');
      }
    }
  },
};

type ContentEditorProps = {
  mode: 'html' | 'plain';
  value?: string;
  onChange?: (value: string) => void;
};

type EmailTagsInputProps = {
  placeholder?: string;
};

function EmailTagsInput(props: EmailTagsInputProps) {
  return (
    <TagsInput
      className="email-tags-input border-0 form-control form-control-transparent"
      validate={emailValidator}
      parseTag={parseEmailTag}
      {...props}
    />
  );
}

function ContentEditor(props: ContentEditorProps) {
  return <QuillEditor {...props} />;
}

type MessageEditorProps = {
  message?: MailboxMessage;
  onAutoSave: (message: MailboxMessage) => void;
  onSend: (message: MailboxMessage) => void;
};

type MessageEditorState = {
  message?: MailboxMessage;
  disabled: boolean;
  mode: 'plain' | 'html';
  autoSaveState: 'default' | 'saving' | 'saved';
  recipients: ('cc' | 'bcc')[];
  sending: boolean;
  title: string;
};

function initState(message?: MailboxMessage): MessageEditorState {
  if (!message) {
    return {
      sending: false,
      mode: 'plain',
      disabled: true,
      autoSaveState: 'default',
      recipients: [],
      title: '',
    };
  }
  const recipients: ('cc' | 'bcc')[] = [];
  if (message.cc.length) {
    recipients.push('cc');
  }
  if (message.bcc.length) {
    recipients.push('bcc');
  }
  return {
    message,
    sending: false,
    disabled: !message.to || !message.to.length,
    autoSaveState: 'default',
    title: message.subject!,
    recipients,
    mode: message.mimeType?.endsWith('html') ? 'html' : 'plain',
  };
}

function MessageEditor(props: MessageEditorProps) {
  const { onAutoSave, onSend } = props;

  const state = useRef<MessageEditorState>(initState(props.message));
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const [createMessage] = useCreateMailboxMessageMutation({
    refetchQueries: [MailboxesDocument],
  });
  const [updateMessage] = useUpdateMailboxMessageMutation({
    refetchQueries: [MailboxesDocument],
  });
  const [sendMessage] = useSendMailboxMessageMutation({
    refetchQueries: [MailboxesDocument],
  });

  const [autoSave, saving] = useAutoSave<MailboxMessageCreateInput>(async (_, values) => {
    const { message } = state.current;
    if (!message) {
      const { data } = await createMessage({
        variables: {
          input: values,
        },
      });
      state.current.message = data?.message as any;
    } else {
      const { data } = await updateMessage({
        variables: {
          id: message.id,
          input: values,
        },
      });
      state.current.message = data?.message as any;
    }
    onAutoSave(state.current.message!);
  }, state.current.message || {});

  const form = Form.useForm();

  const queueUpload = useRef<QueueUploadRef>(null);

  const buildToggleRecipients = useCallback(
    (method: 'cc' | 'bcc') => () => {
      if (state.current.recipients.includes(method)) {
        state.current.recipients = state.current.recipients.filter((item) => item != method);
      } else {
        state.current.recipients = [...state.current.recipients, method];
      }
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
    autoSave({ ...allValues, mimeType: `text/${state.current.mode}` });
  }, [form, autoSave]);

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
      console.log('changedValues', changedValues);
      if (changedValues.hasOwnProperty('subject')) {
        state.current.title = changedValues.subject;
        forceRender();
      }
      if (changedValues.hasOwnProperty('to')) {
        if (!changedValues.to || !changedValues.to.length) {
          if (!state.current.disabled) {
            state.current.disabled = true;
            forceRender();
          }
        } else if (state.current.disabled) {
          state.current.disabled = false;
          forceRender();
        }
      }
      autoSave({ ...allValues, mimeType: `text/${state.current.mode}` });
    },
    [autoSave],
  );

  const handleSubmit = useCallback(async () => {
    await queueUpload.current?.uploadAll();
    try {
      const values = await form.validateFields();

      if (!values.subject || !values.body) {
        const fieldNames = [];
        if (!values.subject) {
          fieldNames.push('主题');
        }
        if (!values.body) {
          fieldNames.push('正文');
        }
        const result = await Modal.confirm({
          title: '此邮件没有' + fieldNames.join('和'),
          content: '是否仍要发送邮件？',
          okText: '仍然发送',
        });

        if (!result.isConfirmed) {
          return;
        }
      }
      state.current.sending = true;
      forceRender();
      try {
        const result = await delay(
          sendMessage({
            variables: { id: state.current.message!.id },
          }),
          350,
        );
        Modal.success({
          title: '操作成功',
          content: '邮件已成功发送',
          timer: 3000,
        });
        onSend(result.data!.message as any);
      } catch (se: any) {
        state.current.sending = false;
        forceRender();
        Modal.error({
          title: '错误',
          content: se.message,
        });
      }
    } catch (e) {
      const error = e as ValidateErrorEntity;
      const firstError = error.errorFields[0];

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
  }, [form, onSend, sendMessage]);

  useMemo(() => {
    if (saving) {
      return (state.current.autoSaveState = 'saving');
    }
    if (state.current.autoSaveState != 'default') {
      return (state.current.autoSaveState = 'saved');
    }
    return state.current.autoSaveState;
  }, [saving]);

  useEffect(() => {
    if (!props.message || props.message.id == state.current.message?.id) {
      return;
    }
    state.current = initState(props.message);
    form.setFieldsValue({ ...props.message });
    forceRender();
  }, [form, props.message]);

  const { message, recipients, mode, autoSaveState, disabled, sending } = state.current;

  console.log('recipients', recipients);

  return (
    <Card className="email-compose-editor">
      <Card.Header>
        <Card.Title>{state.current.title || '新信息'}</Card.Title>
        <Card.Toolbar className="text-gray-600">
          {autoSaveState == 'saving' && '正在存储草稿...'}
          {autoSaveState == 'saved' && '已存储'}
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
                <EmailTagsInput placeholder="输入收件人邮箱" />
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
                  <EmailTagsInput placeholder="输入抄送邮箱" />
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
                  <EmailTagsInput placeholder="输入密送邮箱" />
                </Form.Item>
                <span
                  className="btn btn-clean btn-xs btn-icon"
                  onClick={buildToggleRecipients('bcc')}
                >
                  <i className="la la-close" />
                </span>
              </div>
            )}
            <div className="d-flex align-items-center border-bottom px-8 min-h-45px">
              <div className="text-dark fw-bolder w-75px">主题:</div>
              <Form.Item noStyle name="subject">
                <Input className="border-0 min-h-45px" placeholder="输入主题" transparent />
              </Form.Item>
            </div>
            <Form.Item noStyle name="body">
              <ContentEditor mode={mode} />
            </Form.Item>
            <Form.Item noStyle name="attachments">
              <Upload.Queue className="px-8 py-4" auto ref={queueUpload} namespace="email" />
            </Form.Item>
          </div>
          <div className="d-flex flex-stack flex-wrap gap-2 py-5 ps-8 pe-5 border-top">
            <div className="d-flex align-items-center me-3">
              <div className="btn-group me-4">
                <Button
                  htmlType="button"
                  loading={sending}
                  size="lg"
                  className="rounded-2 fs-bold px-10"
                  variant="primary"
                  icon={<Icon name="Duotune/gen016" className="svg-icon-1 ms-n4 me-4" />}
                  disabled={saving || disabled}
                  onClick={handleSubmit}
                >
                  {sending ? '发送中...' : '发送'}
                </Button>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <Tooltip title="添加附件" placement="top">
                <span
                  onClick={handleUploadAttachment}
                  className="btn btn-icon btn-sm btn-clean btn-active-light-primary me-2 dz-clickable"
                >
                  <Icon className="svg-icon-2 m-0" name="Duotune/com008" />
                </span>
              </Tooltip>
              <Tooltip title="切换编辑器" placement="top">
                <Button
                  as="span"
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

export default MessageEditor;
