import { useEffect, useMemo, useState } from 'react';
import React from 'react';

import Icon from '@asany/icons';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import classnames from 'classnames';
import { Link } from 'umi';

import { useFileQuery } from '../hooks';

import { BlockUI, Symbol, Tabs } from '@/pages/Metronic/components';
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

function ViewFileDetails(props: ViewFileDetailsProps) {
  const [file, setFile] = useState<FileObject>(props.file);

  const { data, loading } = useFileQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      id: props.file.id,
    },
  });

  useEffect(() => {
    data?.file && setFile(data?.file);
  }, [data?.file]);

  // console.log('ViewFileDetails', loading, data?.file);

  return (
    <BlockUI overlayClassName="bg-white bg-opacity-25" className="pt-5" loading={loading}>
      {!file.isDirectory && (
        <div className="file-preview mb-6">
          <Symbol src={`http://localhost:8080${file.path}`} />
        </div>
      )}
      {false && (
        <>
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
        </>
      )}
      <div className="fs-6 text-gray-800 mb-4">系统属性</div>
      <div className="row mb-4">
        <label className="col-lg-3 fw-bold text-muted">类型</label>
        <div className="col-lg-9">
          <span className="fs-7 text-gray-800">{file.isDirectory ? '文件夹' : file.mimeType}</span>
        </div>
      </div>
      {!file.isDirectory && (
        <div className="row mb-4">
          <label className="col-lg-3 fw-bold text-muted">大小</label>
          <div className="col-lg-9 fv-row">
            <span className="fs-7 text-gray-800">{file.size}</span>
          </div>
        </div>
      )}
      <div className="row mb-4">
        <label className="col-lg-3 fw-bold text-muted">位置</label>
        <div className="col-lg-9 d-flex align-items-center flex-wrap">
          <Link className="tw-truncate mw-90px" to="/drive/my-drive">
            全部文件
          </Link>
          {(file.parents || []).map((item) => (
            <React.Fragment key={item.id}>
              <Icon name={'Duotune/arr071'} className={classnames('svg-icon-5 svg-icon-primary')} />
              <Link className="tw-truncate mw-90px" to={`/drive/folders/${item.id}`}>
                {item.name}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* <div className="row mb-4">
        <label className="col-lg-3 fw-bold text-muted">所有者</label>
        <div className="col-lg-9">
          <a href="#" className="fs-7 text-gray-800 text-hover-primary">
            keenthemes.com
          </a>
        </div>
      </div> */}
      <div className="row mb-4">
        <label className="col-lg-3 fw-bold text-muted">修改时间</label>
        <div className="col-lg-9">
          <span className="fs-7 text-gray-800">{file.lastModified}</span>
        </div>
      </div>
      {/* <div className="row mb-4">
        <label className="col-lg-3 fw-bold text-muted">上次打开时间</label>
        <div className="col-lg-9">
          <span className="fs-7 text-gray-800">Email, Phone</span>
        </div>
      </div> */}
      <div className="row mb-4">
        <label className="col-lg-3 fw-bold text-muted">创建时间</label>
        <div className="col-lg-9">
          <span className="fs-7 text-gray-800">{file.createdAt}</span>
        </div>
      </div>
      <div className="row mb-4">
        <label className="col-lg-3 fw-bold text-muted">说明</label>
        <div className="col-lg-9">
          <span className="fs-7 text-gray-800">{file.description}</span>
        </div>
      </div>
    </BlockUI>
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
      return '多个文件';
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

  // console.log(title, suffix);

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
