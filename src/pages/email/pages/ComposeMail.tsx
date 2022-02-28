import { useCallback, useEffect, useState } from 'react';

import ReactQuill, { Quill } from 'react-quill';
import Icon from '@asany/icons';
import { useDropzone } from 'react-dropzone';

import {
  Button,
  Card,
  ContentWrapper,
  Tabs,
  Tooltip,
  useUpload,
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

function MailEditor() {
  const [mode, setMode] = useState<'text' | 'html'>('text');
  const [recipients, setRecipients] = useState<('cc' | 'bcc')[]>([]);

  const [upload, data, progress] = useUpload();

  console.log(data, progress);

  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(upload, acceptedFiles);
      // upload(acceptedFiles[0]);
    },
    [upload],
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

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

  const handleTextChange = useCallback(function (e) {
    const el = e.target;
    if (el.innerHTML.trim() === '<br>' || el.innerHTML.trim() === '<div><br></div>') {
      el.innerHTML = '';
      return;
    }
    console.log(el.innerText);
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

  return (
    <Card className="email-compose-editor">
      <Card.Header>
        <Card.Title>新信息</Card.Title>
      </Card.Header>
      <Card.Body className="p-0">
        <form id="kt_inbox_compose_form">
          {/*--begin::Body--*/}
          <div className="email-compose-editor-body">
            {/*--begin::To--*/}
            <div className="d-flex align-items-center border-bottom px-8 min-h-45px">
              {/*--begin::Label--*/}
              <div className="text-dark fw-bolder w-75px">收件人:</div>
              {/*--end::Label--*/}
              {/*--begin::Input--*/}
              <input
                type="text"
                className="form-control form-control-transparent border-0"
                name="compose_to"
                value=""
                data-kt-inbox-form="tagify"
              />
              {/*--end::Input--*/}
              {/*--begin::CC & BCC buttons--*/}
              <div className="ms-auto w-75px text-end">
                {!recipients.includes('cc') && (
                  <span
                    onClick={buildToggleRecipients('cc')}
                    className="text-muted fs-bold cursor-pointer text-hover-primary me-2"
                    data-kt-inbox-form="cc_button"
                  >
                    抄送
                  </span>
                )}
                {!recipients.includes('bcc') && (
                  <span
                    onClick={buildToggleRecipients('bcc')}
                    className="text-muted fs-bold cursor-pointer text-hover-primary"
                    data-kt-inbox-form="bcc_button"
                  >
                    密送
                  </span>
                )}
              </div>
              {/*--end::CC & BCC buttons--*/}
            </div>
            {/*--end::To--*/}
            {/*--begin::CC--*/}
            {recipients.includes('cc') && (
              <div
                className="align-items-center border-bottom ps-8 pe-5 min-h-45px d-flex"
                data-kt-inbox-form="cc"
              >
                {/*--begin::Label--*/}
                <div className="text-dark fw-bolder w-75px">抄送:</div>
                {/*--end::Label--*/}
                {/*--begin::Input--*/}
                <input
                  type="text"
                  className="form-control form-control-transparent border-0"
                  name="compose_cc"
                  value=""
                  data-kt-inbox-form="tagify"
                />
                {/*--end::Input--*/}
                {/*--begin::Close--*/}
                <span
                  className="btn btn-clean btn-xs btn-icon"
                  onClick={buildToggleRecipients('cc')}
                >
                  <i className="la la-close" />
                </span>
                {/*--end::Close--*/}
              </div>
            )}
            {/*--end::CC--*/}
            {/*--begin::BCC--*/}
            {recipients.includes('bcc') && (
              <div
                className="align-items-center border-bottom inbox-to-bcc ps-8 pe-5 min-h-45px d-flex"
                data-kt-inbox-form="bcc"
              >
                {/*--begin::Label--*/}
                <div className="text-dark fw-bolder w-75px">密送:</div>
                {/*--end::Label--*/}
                {/*--begin::Input--*/}
                <input
                  type="text"
                  className="form-control form-control-transparent border-0"
                  name="compose_bcc"
                  value=""
                  data-kt-inbox-form="tagify"
                />
                {/*--end::Input--*/}
                {/*--begin::Close--*/}
                <span
                  className="btn btn-clean btn-xs btn-icon"
                  onClick={buildToggleRecipients('bcc')}
                >
                  <i className="la la-close" />
                </span>
                {/*--end::Close--*/}
              </div>
            )}
            {/*--end::BCC--*/}
            {/*--begin::Subject--*/}
            <div className="border-bottom">
              <input
                className="form-control form-control-transparent border-0 px-8 min-h-45px"
                name="compose_subject"
                placeholder="主题"
              />
            </div>
            {/*--end::Subject--*/}
            {mode == 'html' ? (
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
                value=""
              />
            ) : (
              <div id="kt_inbox_form_editor" className="bg-transparent border-0 px-3">
                <div
                  contentEditable
                  placeholder="输入正文"
                  className="editor_mode_text"
                  onInput={handleTextChange}
                />
              </div>
            )}
            {/*--begin::Attachments--*/}
            <div
              className="dropzone dropzone-queue px-8 py-4"
              id="kt_inbox_reply_attachments"
              data-kt-inbox-form="dropzone"
            >
              <div className="dropzone-items">
                <div className="dropzone-item">
                  {/*--begin::Dropzone filename--*/}
                  <div className="dropzone-file">
                    <div className="dropzone-filename" title="some_image_file_name.jpg">
                      <span data-dz-name="">some_image_file_name.jpg</span>
                      <strong>
                        (<span data-dz-size="">340kb</span>)
                      </strong>
                    </div>
                    <div className="dropzone-error" data-dz-errormessage="" />
                  </div>
                  {/*--end::Dropzone filename--*/}
                  {/*--begin::Dropzone progress--*/}
                  <div className="dropzone-progress">
                    <div className="progress">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        /*      aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="0"
                  data-dz-uploadprogress="" */
                      />
                    </div>
                  </div>
                  {/*--end::Dropzone progress--*/}
                  {/*--begin::Dropzone toolbar--*/}
                  <div className="dropzone-toolbar">
                    <span className="dropzone-delete" data-dz-remove="">
                      <i className="bi bi-x fs-1" />
                    </span>
                  </div>
                  {/*--end::Dropzone toolbar--*/}
                </div>
              </div>
            </div>
            {/*--end::Attachments--*/}
          </div>
          <div className="d-flex flex-stack flex-wrap gap-2 py-5 ps-8 pe-5 border-top">
            <div className="d-flex align-items-center me-3">
              <div className="btn-group me-4">
                <Button loading={false} className="fs-bold px-8" variant="primary">
                  发送
                </Button>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span
                {...getRootProps()}
                className="btn btn-icon btn-sm btn-clean btn-active-light-primary me-2 dz-clickable"
              >
                <input {...getInputProps()} />
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
            {/*--end::Toolbar--*/}
          </div>
        </form>
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
