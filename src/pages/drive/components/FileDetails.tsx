import { useEffect, useMemo, useState } from 'react';

import Icon from '@asany/icons';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import classnames from 'classnames';

import { useFileQuery } from '../hooks';

import { Symbol, Tabs } from '@/pages/Metronic/components';
import type { FileObject } from '@/types';

type FileDetailsProps = {
  currentFolder?: FileObject;
  files: FileObject[];
};

type OneFileProps = {
  file: FileObject;
};

function ViewFileActionLogs() {
  return <>日志</>;
}

type ViewFileDetailsProps = {
  file: FileObject;
};

// 'image/'

function ViewFileDetails(props: ViewFileDetailsProps) {
  const [file, setFile] = useState<FileObject>(props.file);

  const { data, loading } = useFileQuery({
    variables: {
      id: props.file.id,
    },
  });

  useEffect(() => {
    data?.file && setFile(data?.file);
  }, [data?.file]);

  console.log('ViewFileDetails', loading, data?.file);

  return (
    <>
      <div className="file-preview mb-6 mt-5">
        <img />
      </div>
      <div className="fs-6 text-gray-800 mb-4">有权使用的人</div>
      <div className="row mb-6">
        <div className="col-lg-12 persons-with-authority">
          <ul className="d-flex flex-row gap-5">
            <li>
              <Symbol.Avatar shape="circle" size={40} alt="李茂峰" />
            </li>
            <li>
              <Symbol.Avatar
                size={40}
                shape="circle"
                src={
                  <Icon
                    style={{ backgroundColor: '#689f38' }}
                    className="symbol-label svg-icon-white"
                    name="Duotune/cod007"
                  />
                }
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="fs-6 text-gray-800 mb-4">系统属性</div>
      <div className="row mb-4">
        <label className="col-lg-4 fw-bold text-muted">类型</label>
        <div className="col-lg-8">
          <span className="fs-7 text-gray-800">{file.mimeType}</span>
        </div>
      </div>
      <div className="row mb-4">
        <label className="col-lg-4 fw-bold text-muted">大小</label>
        <div className="col-lg-8 fv-row">
          <span className="fs-7 text-gray-800">{file.size}</span>
        </div>
      </div>
      <div className="row mb-4">
        <label className="col-lg-4 fw-bold text-muted">位置</label>
        <div className="col-lg-8 d-flex align-items-center">
          {(file.parents || []).map((item) => (
            <span key={item.id} className="fs-7 text-gray-800 me-2">
              {item.name}
            </span>
          ))}
        </div>
      </div>
      {/* <div className="row mb-4">
        <label className="col-lg-4 fw-bold text-muted">所有者</label>
        <div className="col-lg-8">
          <a href="#" className="fs-7 text-gray-800 text-hover-primary">
            keenthemes.com
          </a>
        </div>
      </div> */}
      <div className="row mb-4">
        <label className="col-lg-4 fw-bold text-muted">修改时间</label>
        <div className="col-lg-8">
          <span className="fs-7 text-gray-800">{file.lastModified}</span>
        </div>
      </div>
      {/* <div className="row mb-4">
        <label className="col-lg-4 fw-bold text-muted">上次打开时间</label>
        <div className="col-lg-8">
          <span className="fs-7 text-gray-800">Email, Phone</span>
        </div>
      </div> */}
      <div className="row mb-4">
        <label className="col-lg-4 fw-bold text-muted">创建时间</label>
        <div className="col-lg-8">
          <span className="fs-7 text-gray-800">{file.createdAt}</span>
        </div>
      </div>
      <div className="row mb-4">
        <label className="col-lg-4 fw-bold text-muted">说明</label>
        <div className="col-lg-8">
          <span className="fs-7 text-gray-800">{file.description}</span>
        </div>
      </div>
    </>
  );
}

function OneFile(props: OneFileProps) {
  const { file } = props;
  return (
    <Tabs className="nav-line-tabs-2x">
      <Tabs.TabPane key="file-details" tab="文件详情">
        <OverlayScrollbarsComponent
          className="flex-column-fluid custom-scrollbar"
          options={{
            scrollbars: { autoHide: 'scroll' },
          }}
        >
          <ViewFileDetails file={file} />
        </OverlayScrollbarsComponent>
      </Tabs.TabPane>
      <Tabs.TabPane key="action-records" tab="操作记录">
        <OverlayScrollbarsComponent
          className="flex-column-fluid custom-scrollbar"
          options={{
            scrollbars: { autoHide: 'scroll' },
          }}
        >
          <ViewFileActionLogs />
        </OverlayScrollbarsComponent>
      </Tabs.TabPane>
    </Tabs>
  );
}

function FileDetails(props: FileDetailsProps) {
  const { files, currentFolder } = props;

  const type = useMemo(() => {
    if (files.length == 1) {
      return 'file_details';
    }
    if (files.length > 1) {
      return 'many_file_details';
    }
    return 'current_folder';
  }, [files]);

  const titleFull = useMemo(() => {
    if (type === 'file_details') {
      return files[0].name;
    }
    if (type === 'many_file_details') {
      return files[0].name;
    }
    return currentFolder?.name || '';
  }, [currentFolder?.name, files, type]);

  const [title, suffix] = useMemo(() => {
    const index = titleFull.lastIndexOf('.');
    if (index == -1) {
      return [titleFull, undefined];
    }
    return [titleFull.substring(0, index), titleFull.substring(index + 1)];
  }, [titleFull]);

  console.log(title, suffix);

  return (
    <div className="preview-container">
      <div className="preview-header">
        <h4 className={classnames({ 'tw-truncate': !suffix, 'd-flex': suffix })}>
          {suffix ? (
            <>
              <span className="file-title shrink tw-truncate">{title}</span>
              <span className="file-suffix">.{suffix}</span>
            </>
          ) : (
            title
          )}
        </h4>
      </div>
      <div className="preview-body">{type == 'file_details' && <OneFile file={files[0]} />}</div>
    </div>
  );
}

export default FileDetails;
