import type { RefObject } from 'react';
import { useCallback } from 'react';

import { Icon } from '@asany/icons';

import { Button, Card, Form, Input, Upload } from '@/metronic';
import type { QueueUploadRef } from '@/metronic/typings';
import { Article, ContentType } from '@/types';

import ArticleContent from '../../ArticleContent';

type GeneralProps = {
  contentType?: ContentType | null;
  article?: Article;
  queueUpload: RefObject<QueueUploadRef>;
};

function General(props: GeneralProps) {
  const { queueUpload, contentType } = props;

  const handleUploadAttachment = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      queueUpload.current?.browse(e);
    },
    [queueUpload],
  );

  return (
    <div className="d-flex flex-column gap-7 gap-lg-10">
      <Card flush className="py-4">
        <Form.Item
          name="title"
          label="标题"
          required
          help="标题是必需的"
          rules={[{ required: true, message: '标题不能为空' }]}
        >
          <Input placeholder="文章标题" className="mw-400px" />
        </Form.Item>
      </Card>

      <Form.Item name="content" noStyle help="您可以选择适合自己的，编辑方式">
        <ArticleContent contentType={contentType} />
      </Form.Item>

      <Card flush className="py-4" title="附件" bodyClassName="pt-0">
        <Form.Item name="attachments" noStyle>
          <Upload.Queue ref={queueUpload} namespace="email" />
        </Form.Item>
        <Button
          variant="light-primary"
          className="me-3 mt-4"
          onClick={handleUploadAttachment}
          icon={<Icon className="svg-icon-2" name="Duotune/com008" />}
        >
          添加附件
        </Button>
        {/* <span
        onClick={handleUploadAttachment}
        className="btn btn-icon btn-sm btn-clean btn-active-light-primary me-2 dz-clickable"
      >
        <Icon className="svg-icon-2 m-0" name="Duotune/com008" />
      </span> */}
      </Card>
    </div>
  );
}

export default General;
