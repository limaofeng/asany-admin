import { useCallback, useEffect, useReducer, useRef } from 'react';

import * as pdfjsLib from 'pdfjs-dist';
// const pdfjsLib = window.pdfjsLib;
pdfjsLib.GlobalWorkerOptions.workerSrc = require('pdfjs-dist/build/pdf.worker.entry');

import './PdfViewer.scss';

function usePdfViewer(
  pdfUrl: string,
  opts: { pageSize?: number } = { pageSize: 1 },
): [
  React.RefObject<HTMLDivElement>,
  { numPages: number; currentPage: number; goToPage: (pageNumber: number) => void },
] {
  const pdfContainerRef = useRef<HTMLDivElement>(null);

  const pdfDocRef = useRef<any>(null);

  const stateRef = useRef({ numPages: 0, currentPage: 0 });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const caches = useRef(new Map<number, any>());

  const goToPage = useCallback(
    async (pageNumber: number) => {
      const container = pdfContainerRef.current!;

      const pdfDoc = pdfDocRef.current;
      const totalConut = pdfDoc.numPages;

      const actualPageNumber = Math.max(Math.min(pageNumber, totalConut), 1);

      if (stateRef.current.currentPage == actualPageNumber) {
        return;
      }

      caches.current.get(stateRef.current.currentPage)?.hide();

      if (caches.current.has(actualPageNumber)) {
        caches.current.get(actualPageNumber).show();
      } else {
        const page = await pdfDoc.getPage(actualPageNumber);

        const canvas = document.createElement('canvas');
        canvas.classList.add('pdf-page-canvas');
        container.appendChild(canvas);

        const viewport = page.getViewport({ scale: 1 });

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const context = canvas.getContext('2d')!;
        const devicePixelRatio = window.devicePixelRatio || 1;

        // 设置 canvas 的缩放，以匹配设备的 devicePixelRatio
        canvas.width = viewport.width * devicePixelRatio;
        canvas.height = viewport.height * devicePixelRatio;

        page.render({
          canvasContext: context,
          viewport: viewport,
          transform: [devicePixelRatio, 0, 0, devicePixelRatio, 0, 0], // 设置变换矩阵
        });

        caches.current.set(actualPageNumber, {
          page,
          viewport,
          context,
          isVisible: () => {
            return canvas.style.display !== 'none';
          },
          show: () => {
            canvas.style.display = 'block';
          },
          hide: () => {
            canvas.style.display = 'none';
          },
          remove: () => {
            canvas.remove();
          },
        });
      }

      if (stateRef.current.currentPage != actualPageNumber) {
        stateRef.current.currentPage = actualPageNumber;
        forceRender();
      }
    },
    [opts.pageSize],
  );

  useEffect(() => {
    stateRef.current.currentPage = 0;
    console.log('pdfjsLib', pdfjsLib);

    const data = caches.current;
    for (const key of data.keys()) {
      data.get(key).remove();
    }
    caches.current.clear();
    forceRender();
    pdfjsLib.getDocument(pdfUrl).promise.then((pdfDoc: any) => {
      pdfDocRef.current = pdfDoc;
      stateRef.current.numPages = pdfDoc.numPages;
      goToPage(1);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdfUrl]);

  return [
    pdfContainerRef,
    { numPages: stateRef.current.numPages, currentPage: stateRef.current.currentPage, goToPage },
  ];
}

type PdfViewerProps = {
  pdfUrl?: string;
  onPreviewRendered?: () => void;
};

function PdfViewer({ pdfUrl }: PdfViewerProps) {
  const [pdfContainerRef, { numPages, currentPage, goToPage }] = usePdfViewer(pdfUrl!);

  return (
    <div className="pdf-viewer">
      <div className="pdf-viewer-pages" ref={pdfContainerRef} />
      <div>
        <p>
          共: {currentPage} 页，当前为 {numPages} 页
        </p>
        <button onClick={() => goToPage(1)}>第一页·</button>
        <button onClick={() => goToPage(currentPage - 1)}>上一页</button>
        <button onClick={() => goToPage(currentPage + 1)}>下一页</button>
        <button onClick={() => goToPage(numPages)}>最后一页</button>
      </div>
    </div>
  );
}

export default PdfViewer;
