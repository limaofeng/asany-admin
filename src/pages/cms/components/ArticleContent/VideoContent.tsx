import { useCallback, useEffect, useState } from 'react';

import { Input, Modal, SignleUpload, VideoPlayer } from '@/metronic';
import { VideoContent as IVideoContent } from '@/types';

type VideoContentData = Omit<IVideoContent, 'id'>;

type VideoContentProps = {
  value?: VideoContentData;
  onChange?: (value: VideoContentData) => void;
};

const parseUrl = (value?: VideoContentData) => {
  if (value?.url) {
    return value.url;
  }
  if (typeof value?.video === 'string') {
    return process.env.STORAGE_URL + `/preview/${value.video}`;
  } else if (typeof value?.video === 'object') {
    return URL.createObjectURL(value.video.id);
  }
  return '';
};

function VideoContent(props: VideoContentProps) {
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

  const handleChange = useCallback((value: VideoContentData) => {
    onChange && onChange(value);
  }, []);

  const handleOk = useCallback(() => {
    setVisible(false);
    handleChange({
      ...value,
      video: undefined,
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
        video: fileId,
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
          value={value?.video}
          accept={{
            'video/mp4': ['.mp4'],
            'video/webm': ['.webm'],
            'video/ogg': ['.ogg', '.ogv'],
            'video/x-msvideo': ['.avi'],
            'video/mpeg': ['.mpeg'],
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
          description="支持的视频格式：MP4, AVI, MOV, WEBM"
          onChange={handleFileUpload}
        />
      </div>
      {!!url && <VideoPlayer url={url} width="100%" />}
      {/* 
      <div className="fv-row mb-10 fv-plugins-icon-container">
        <label className="required fw-semibold fs-6 mb-2">标题</label>
        <Input />
      </div> */}
    </div>
  );
}

export default VideoContent;
