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

      const pageTotal =
        parseInt(String(totalConut / opts.pageSize!)) + (totalConut % opts.pageSize! > 0 ? 1 : 0);

      const actualPageNumber = Math.max(Math.min(pageNumber, pageTotal), 1);

      if (stateRef.current.currentPage == actualPageNumber) {
        return;
      }

      const startIndex = actualPageNumber * opts.pageSize! - opts.pageSize! + 1;
      const endIndex = startIndex + opts.pageSize!;

      if (stateRef.current.currentPage > 0) {
        const _startIndex = stateRef.current.currentPage * opts.pageSize! - opts.pageSize! + 1;
        const _endIndex = startIndex + opts.pageSize!;

        for (let i = _startIndex; i <= Math.min(_endIndex, totalConut); i++) {
          if (caches.current.has(i)) {
            caches.current.get(i).hide();
          }
        }
      }

      for (let i = startIndex; i <= Math.min(endIndex, totalConut); i++) {
        if (caches.current.has(i)) {
          caches.current.get(i).show();
        } else {
          const page = await pdfDoc.getPage(i);

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

          caches.current.set(i, {
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
            }
          });
        }
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
  const [pdfContainerRef, { numPages, currentPage, goToPage }] = usePdfViewer(pdfUrl, {
    pageSize: 2,
  });

  return (
    <div className="pdf-viewer">
      <div className="pdf-viewer-pages" ref={pdfContainerRef} />
      <div style={{ display: 'none' }}>
        <p>
          Total Pages: {currentPage} of {numPages}
        </p>
        <button onClick={() => goToPage(1)}>First Page</button>
        <button onClick={() => goToPage(currentPage - 1)}>Previous Page</button>
        <button onClick={() => goToPage(currentPage + 1)}>Next Page</button>
        <button onClick={() => goToPage(numPages)}>Last Page</button>
      </div>
    </div>
  );
}

export default PdfViewer;
