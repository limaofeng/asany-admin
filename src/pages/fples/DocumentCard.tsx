import { forwardRef, useCallback, useMemo, useReducer, useRef } from 'react';

import classnames from 'classnames';
import type { Accept } from 'react-dropzone';
import { useDropzone } from 'react-dropzone';
import mime from 'mime-types';

import ExcelViewer from './viewers/ExcelViewer';
import PdfViewer from './viewers/PdfViewer';

import { Card } from '@/metronic';
import { useUpload } from '@/metronic/hooks';
import type { UploadFileData } from '@/metronic/Upload/utils/upload';
import type { FileObject } from '@/types';

type Document = {
  id: string;
  url: string;
  type: 'pdf' | 'excel' | 'image';
};

type DocumentCardProps = {
  height?: number;
  className?: string;
  placeholder?: string;
  value?: FileObject;
  type: 'pdf' | 'excel' | 'image';
  onChange?: (id?: string, file?: UploadFileData) => void;
  onPreviewRendered?: () => void;
};

function DocumentCard(props: DocumentCardProps, ref: any) {
  const { type, height, className, value, onChange, onPreviewRendered, placeholder } = props;

  const [, forceRender] = useReducer((s) => s + 1, 0);

  const [upload, { data, progress }] = useUpload({
    space: 'XXTIeJCp',
  });

  console.log('data', data, progress);

  const accept = useMemo(() => {
    let fileExts = '';
    if (type == 'pdf') {
      fileExts = '.pdf';
    }
    if (type == 'excel') {
      fileExts = '.xlsx';
    }
    return fileExts.split(',').reduce((_accept, item) => {
      let fileExtension = item.trim();
      fileExtension = fileExtension.startsWith('.') ? fileExtension : '.' + fileExtension;
      const key = mime.lookup(fileExtension);
      if (!key) {
        return _accept;
      }
      if (!_accept[key]) {
        _accept[key] = [];
      }
      _accept[key].push(fileExtension);
      return _accept;
    }, {} as Accept);
  }, [type]);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const fileData = await upload(acceptedFiles[0]);
      // state.current.value = fileData.id;
      forceRender();
      onChange && onChange(fileData.id, fileData);
    },
    [onChange, upload],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  });

  const url = useMemo(() => {
    if (!value) {
      return undefined;
    }
    return process.env.STORAGE_URL + (value as any).url as string;
  }, [value]);


  return (
    <div className="document-card" ref={ref}>
      <Card ref={ref} bodyClassName="p-1" {...getRootProps()} className={classnames(className)}>
        <input {...getInputProps()} />
        {value ? (
          <>
            {type == 'pdf' && (
              <PdfViewer onPreviewRendered={onPreviewRendered} pdfUrl={url} />
            )}
            {type == 'excel' && (
              <ExcelViewer
                onPreviewRendered={onPreviewRendered}
                height={height || 800}
                excelUrl={url}
                title={value?.name || ''}
              />
            )}
          </>
        ) : (
          <div className="doc-nofile-placeholder">
            <img src={placeholder} alt="" />
            <span className="placeholder-tip">(样张)点击上传文件</span>
          </div>
        )}
      </Card>
    </div>
  );
}

export default forwardRef(DocumentCard);
