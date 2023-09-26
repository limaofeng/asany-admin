import { useLayoutEffect, useMemo, useRef } from 'react';

import { Base64 } from 'js-base64';

type ExcelViewerProps = {
  title: string;
  excelUrl?: string;
  // height: number;
  onPreviewRendered?: () => void;
};

function ExcelViewer(props: ExcelViewerProps) {
  const { excelUrl, title, onPreviewRendered } = props;

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const param = useMemo(() => {
    const opts = {
      copy: '0',
      cors: '1',
      fid: '111',
      fname: title,
      furl: excelUrl,
      private: '1',
      sign: '5555',
      type: 'xlsx',
    };
    return Base64.encode(JSON.stringify(opts));
  }, [excelUrl, title]);

  useLayoutEffect(() => {
    // 获取 <iframe> 元素
    const iframe = iframeRef.current!;

    // 添加 load 事件监听器
    const handleLoad = () => {
      onPreviewRendered && onPreviewRendered();
    };

    iframe.addEventListener('load', handleLoad);

    return () => {
      // 在组件卸载时移除事件监听器
      iframe.removeEventListener('load', handleLoad);
    };
  }, [onPreviewRendered]);

  return (
    <div className="excel-viewer">
      <iframe
        ref={iframeRef}
        className="excel-viewer-iframe"
        src={`./xlsx1/index.html?param=${param}`}
      />
    </div>
  );
}

export default ExcelViewer;
