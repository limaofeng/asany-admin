import { useCallback, useEffect, useRef, useState } from 'react';

import { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist';

export class PageInstance {
  private setNumLoaded: (
    numLoaded: ((numLoaded: number) => number) | number,
  ) => void;
  private pdfDoc: PDFDocumentProxy;
  private index: number;
  private data?: PDFPageProxy;
  constructor(
    setNumLoaded: (numLoaded: ((numLoaded: number) => number) | number) => void,
    pdfDoc: PDFDocumentProxy,
    index: number,
  ) {
    this.setNumLoaded = setNumLoaded;
    this.pdfDoc = pdfDoc;
    this.index = index;
  }

  load = async () => {
    if (this.data) {
      return this.data;
    }
    this.data = await this.pdfDoc.getPage(this.index);
    this.setNumLoaded((numLoaded) => numLoaded + 1);
    return this.data;
  };
}

function useLoadPDF(pdfUrl: string): [
  boolean,
  {
    numPages: number;
    pages: PageInstance[];
    getPage: (index: number) => Promise<any>;
    numLoaded: number;
  },
] {
  const [loading, setLoading] = useState(false);
  const [numLoaded, setNumLoaded] = useState<number>(0);
  const pages = useRef<PageInstance[]>([]);
  const pdfDocRef = useRef<PDFDocumentProxy>();

  const loadData = useCallback(async (pdfUrl: string) => {
    const pdfjsLib = await import('pdfjs-dist');
    pdfjsLib.GlobalWorkerOptions.workerSrc = require('pdfjs-dist/build/pdf.worker');
    return pdfjsLib.getDocument(pdfUrl).promise;
  }, []);

  useEffect(() => {
    if (!pdfUrl) {
      return;
    }
    setLoading(true);
    loadData(pdfUrl).then((_pdfDoc: PDFDocumentProxy) => {
      pdfDocRef.current = _pdfDoc;
      pages.current = Array.from({ length: _pdfDoc.numPages });
      for (let i = 0; i < _pdfDoc.numPages; i++) {
        pages.current[i] = new PageInstance(setNumLoaded, _pdfDoc, i + 1);
      }
      setLoading(false);
    });
    return () => {
      setLoading(false);
      pdfDocRef.current = undefined;
    };
  }, [pdfUrl]);

  const pdfDoc = pdfDocRef.current;

  const getPage = useCallback(
    (index: number) => {
      if (!pdfDoc) {
        return Promise.reject('pdfDoc is not ready');
      }
      return pdfDoc.getPage(index + 1);
    },
    [pdfDoc],
  );

  return [
    loading,
    {
      numPages: pdfDoc?.numPages || 0,
      pages: pages.current,
      getPage,
      numLoaded,
    },
  ];
}

export default useLoadPDF;
