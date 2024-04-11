import { useCallback, useEffect, useState } from 'react';

import mime from 'mime-types';

import { DocumentViewer, Input, Modal, SignleUpload } from '@/metronic';
import { DocumentContent as IDocumentContent } from '@/types';

type DocumentContentData = Omit<IDocumentContent, 'id'>;

type DocumentContentProps = {
  value?: DocumentContentData;
  onChange?: (value: DocumentContentData) => void;
};

const parseUrl = (value?: DocumentContentData) => {
  if (value?.url) {
    return value.url;
  }
  if (typeof value?.document === 'string') {
    return process.env.STORAGE_URL + `/preview/${value.document}`;
  } else if (typeof value?.document === 'object') {
    return URL.createObjectURL(value.document.id);
  }
  return '';
};

async function getFileMetaData(url: string) {
  try {
    // 发起HEAD请求
    const response = await fetch(url, { method: 'HEAD' });
    // 从响应头中获取Content-Type
    const contentType = response.headers.get('Content-Type');
    // 从响应头中获取Content-Length
    const contentLength = response.headers.get('Content-Length');

    return {
      contentType,
      contentLength,
    };
  } catch (error) {
    console.error('Error fetching URL:', error);
    return null;
  }
}

function DocumentContent(props: DocumentContentProps) {
  const { value, onChange } = props;

  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState<string>(parseUrl(props.value));
  const [externalLink, setExternalLink] = useState(props.value?.url || '');

  useEffect(() => {
    setUrl(parseUrl(props.value));
    setExternalLink(props.value?.url || '');
  }, [props.value]);

  const handleExternalLinks = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(true);
  }, []);

  const handleChange = useCallback(
    (value: DocumentContentData) => {
      onChange && onChange(value);
    },
    [onChange],
  );

  const handleOk = useCallback(async () => {
    setVisible(false);
    const metadata = await getFileMetaData(externalLink);
    if (!metadata) {
      return;
    }
    const type = mime.extension(metadata.contentType!).toUpperCase();
    if (!['PDF'].includes(type)) {
      console.error('只支持PDF文件');
      return;
    }
    handleChange({
      ...value,
      type: type as any,
      size: metadata.contentLength,
      document: undefined,
      url: externalLink,
    });
  }, [value, externalLink]);

  const handleClose = useCallback(() => {
    setVisible(false);
    setExternalLink(value?.url || '');
  }, [value?.url]);

  const handleFileUpload = useCallback(
    (fileId: string) => {
      handleChange({
        ...value,
        document: fileId,
        url: undefined,
      });
    },
    [value],
  );

  const handleLinkChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setExternalLink(e.target.value);
    },
    [],
  );

  return (
    <div>
      <Modal
        centered
        visible={visible}
        dialogClassName="modal-dialog-small w-500px"
        onCancel={handleClose}
        onOk={handleOk}
        title="设置链接引用"
        closable={false}
        headerClassName="border-bottom-0"
        bodyClassName="py-2"
        footerClassName="border-top-0"
      >
        <Input.TextArea
          autoSize={{ minRows: 3, maxRows: 5 }}
          onChange={handleLinkChange}
          value={externalLink}
        />
      </Modal>
      <div className="fv-row mb-2">
        <SignleUpload
          value={value?.document}
          accept={{
            'application/pdf': ['.pdf'],
          }}
          title={
            <>
              将文件拖拽至此处、点击上传，或
              <a onClick={handleExternalLinks} className="">
                设置
              </a>
              链接引用。
            </>
          }
          description="支持的文档格式：pdf"
          onChange={handleFileUpload}
        />
      </div>
      {!!url && <DocumentViewer url={url} />}
    </div>
  );
}

export default DocumentContent;
