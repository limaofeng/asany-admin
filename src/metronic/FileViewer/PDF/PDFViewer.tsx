import { useCallback, useEffect, useRef, useState } from 'react';

import classnames from 'classnames';

import { Pagination } from '@/metronic';

import useLoadPDF, { PageInstance } from '../hooks/useLoadPDF';
import './PDFViewer.scss';

type PDFViewerProps = {
  url: string;
  visible: boolean;
};

function PDFPage({ page, visible }: { page: PageInstance; visible: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const init = useCallback(async (page: PageInstance) => {
    const canvas = canvasRef.current!;
    canvas.classList.add('pdf-page-canvas');

    const pageData = await page.load();

    const viewport = pageData.getViewport({ scale: 1 });

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const context = canvas.getContext('2d')!;
    const devicePixelRatio = window.devicePixelRatio || 1;

    // 设置 canvas 的缩放，以匹配设备的 devicePixelRatio
    canvas.width = viewport.width * devicePixelRatio;
    canvas.height = viewport.height * devicePixelRatio;

    pageData.render({
      canvasContext: context,
      viewport: viewport,
      transform: [devicePixelRatio, 0, 0, devicePixelRatio, 0, 0],
    });
  }, []);

  useEffect(() => {
    if (!visible) {
      return;
    }
    init(page);
  }, [page, visible]);

  return (
    <div
      className={classnames('pdf-viewer-page', {
        active: visible,
      })}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}

function PDFViewer({ url }: PDFViewerProps) {
  const [, { numPages, pages }] = useLoadPDF(url);

  const [currentPage, setCurrentPage] = useState(1);

  const handleGoToPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return (
    <div className="pdf-viewer">
      <div className="pdf-viewer-pages">
        {pages.map((page, index) => (
          <PDFPage
            key={index}
            visible={index === currentPage - 1}
            page={page}
          />
        ))}
      </div>
      <div className="pdf-viewer-controls">
        <Pagination
          size="sm"
          current={currentPage}
          pageSize={1}
          total={numPages}
          onChange={handleGoToPage}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}

export default PDFViewer;
