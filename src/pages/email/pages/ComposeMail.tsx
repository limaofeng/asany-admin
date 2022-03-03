/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useRef, useState } from 'react';

import ReactQuill, { Quill } from 'react-quill';
import Icon from '@asany/icons';
import type { ValidateErrorEntity } from 'rc-field-form/lib/interface';

import type { QueueUploadRef } from '@/pages/Metronic/components';
import { parseMail } from '@/pages/Metronic/components';
import {
  Button,
  Card,
  ContentWrapper,
  EmailTagsInput,
  Form,
  Input,
  Modal,
  QueueUpload,
  Tabs,
  Tooltip,
} from '@/pages/Metronic/components';

const { TabPane } = Tabs;

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

const RULE_VERIFY_MAIL = {
  async validator(_: any, emails: string[]) {
    for (const email of emails) {
      if (parseMail(email).invalid) {
        throw new Error('电子邮件地址无效');
      }
    }
  },
};

type ContentEditorProps = {
  mode: 'html' | 'text';
  value?: string;
  onChange?: (value: string) => void;
};

function ContentEditor(props: ContentEditorProps) {
  const { mode, onChange } = props;

  const valueRef = useRef(props.value || '');
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = useCallback(
    (_value) => {
      onChange && onChange((valueRef.current = _value));
    },
    [onChange],
  );

  const handleTextChange = useCallback(
    function (e) {
      const el = e.target;
      if (el.innerHTML.trim() === '<br>' || el.innerHTML.trim() === '<div><br></div>') {
        el.innerHTML = '';
        return;
      }
      onChange && onChange(el.innerHTML); // el.innerText
    },
    [onChange],
  );

  useEffect(() => {
    if (mode == 'text' && ref.current!.innerHTML !== props.value) {
      ref.current!.innerHTML = valueRef.current = props.value || '';
    }
  }, [mode, props.value]);

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
      <div
        ref={ref}
        contentEditable
        placeholder="输入正文"
        className="editor_mode_text"
        onInput={handleTextChange}
        dangerouslySetInnerHTML={{ __html: valueRef.current! }}
      />
    </div>
  );
}

function MailEditor() {
  const [mode, setMode] = useState<'text' | 'html'>('text');
  const [recipients, setRecipients] = useState<('cc' | 'bcc')[]>([]);

  const form = Form.useForm();

  const queueUpload = useRef<QueueUploadRef>(null);
  // const [attachments, setAttachments] = useState<FileObject[]>([]);

  // const [upload, data, progress] = useUpload('email');

  // console.log(data, progress);

  // const onDrop = useCallback(
  //   async (acceptedFiles) => {
  //     console.log('开始上传', acceptedFiles);
  //     // const fileObject = await upload(acceptedFiles[0]);
  //     console.log('上传成功', fileObject);
  //   },
  //   [upload],
  // );

  // const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // console.log('getRootProps', getRootProps())

  const buildToggleRecipients = useCallback(
    (method: 'cc' | 'bcc') => () => {
      setRecipients((_recipients) => {
        if (_recipients.includes(method)) {
          return _recipients.filter((item) => item != method);
        }
        return [..._recipients, method];
      });
    },
    [],
  );

  const toggleMode = useCallback(() => {
    setMode((_mode) => (_mode == 'text' ? 'html' : 'text'));
  }, []);

  useEffect(() => {
    if (mode == 'text') {
      return;
    }
    const toolbar = document.querySelector('.ql-toolbar');
    toolbar?.classList.add('px-5', 'border-top-0', 'border-start-0', 'border-end-0');
    const container = document.querySelector('.ql-container');
    console.log('container', container, container?.classList, container?.classList.add);
    container?.classList.add('bg-transparent', 'border-0', 'px-3', 'ql-snow');
  }, [mode]);

  const handleUploadAttachment = useCallback((e: React.MouseEvent<HTMLElement>) => {
    queueUpload.current?.browse(e);
  }, []);

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

  return (
    <Card className="email-compose-editor">
      <Card.Header>
        <Card.Title>新信息</Card.Title>
      </Card.Header>
      <Card.Body className="p-0">
        <Form
          form={form}
          onFinish={handleSubmit}
          initialValues={{
            to: ['玩玩<sxxx@msn.com>', 'limaofeng@msn.com;xxx@123.com;', 'xxx'],
          }}
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
            <Form.Item noStyle name="content">
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

function Tools() {
  return (
    <Card className="email-compose-tools">
      <Tabs className="nav-line-tabs-2x">
        <TabPane tab="通讯录" key="contacts">
          11111
        </TabPane>
        <TabPane tab="网盘" key="storage">
          222222
        </TabPane>
        <TabPane tab="信纸" key="stationery">
          222222
        </TabPane>
      </Tabs>
    </Card>
  );
}

function ComposeMail() {
  return (
    <ContentWrapper className="apps-email-compose" footer={false}>
      <MailEditor />
      <Tools />
    </ContentWrapper>
  );
}

export default ComposeMail;
