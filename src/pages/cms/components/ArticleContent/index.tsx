import React, { useCallback, useEffect, useState } from 'react';

import { Card } from '@/metronic';
import {
  ContentType,
  DocumentContent,
  ArticleContent as IArticleContent,
  ImageContent,
  TextContent,
  VideoContent,
} from '@/types';

type IArticleContentData =
  | TextContent
  | ImageContent
  | VideoContent
  | DocumentContent;

type ArticleContentProps = {
  value?: IArticleContent;
  contentType?: ContentType | null;
  onChange?: (value: IArticleContent) => void;
};

const ArticleContentEditor: {
  [key in ContentType]: React.LazyExoticComponent<React.ComponentType<any>>;
} = {
  VIDEO: React.lazy(() => import('./VideoContent')),
  DOCUMENT: React.lazy(() => import('./DocumentContent')),
  IMAGE: React.lazy(() => import('./ImageContent')),
  TEXT: React.lazy(() => import('./TextContent')),
};

// const ContentTypes = [
//   {
//     label: '文本',
//     value: ContentType.Text,
//     children: [
//       {
//         label: '富文本',
//         value: 'html',
//       },
//       {
//         label: 'Markdown',
//         value: 'markdown',
//       },
//     ],
//   },
//   { label: '图片', value: ContentType.Image },
//   { label: '视频', value: ContentType.Video },
//   { label: '文档', value: ContentType.Document },
// ];

function ArticleContent(props: ArticleContentProps) {
  const { contentType, onChange } = props;

  const [value, setValue] = useState<IArticleContentData>(
    props.value || ({} as any),
  );

  useEffect(() => {
    setValue(props.value || ({} as any));
  }, [props.value]);

  const handleChange = useCallback((value: IArticleContent) => {
    onChange && onChange(value);
  }, []);

  const ContentEditor = contentType
    ? ArticleContentEditor[contentType]
    : () => <div />;

  return (
    <Card flush className="py-4">
      <div className="mb-2 d-flex">
        {/* <div className="ms-4">
          <Radio.Group
            options={[
              { label: '文本', value: 'TextContent' },
              { label: '图片', value: 'ImageContent' },
              { label: '视频', value: 'VideoContent' },
              { label: '文档', value: 'DocumentContent' },
            ]}
          />
        </div> */}
      </div>
      {ContentEditor && <ContentEditor value={value} onChange={handleChange} />}
    </Card>
  );
}

export default ArticleContent;
