import { useCallback, useMemo, useState } from 'react';

import { useHistory, useModel } from 'umi';
import Icon from '@asany/icons';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import classnames from 'classnames';

import { Button, Progress, Tabs } from '@/pages/Metronic/components';
import type { DownloadFile, UploadFile } from '@/models/cloud-drive';
import { fileSize } from '@/pages/Metronic/components/utils/format';

function randerFileIcon(file: UploadFile | DownloadFile) {
  if (['zip'].includes(file.extension!)) {
    return <Icon name="Bootstrap/file-zip-fill" className="svg-icon-2x" />;
  }
  if (file.mimeType.startsWith('image/')) {
    return <Icon name="Bootstrap/file-image-fill" className="svg-icon-2x" />;
  }
  if (file.mimeType.startsWith('video/')) {
    return <Icon name="Bootstrap/file-play-fill" className="svg-icon-2x" />;
  }
  return <Icon name="Bootstrap/file-post-fill" className="svg-icon-2x" />;
}

type UploadFileItemProps = {
  file: UploadFile;
};

function UploadFileItem(props: UploadFileItemProps) {
  const { file } = props;

  const history = useHistory();

  const baseApi = useModel('cloud-drive.index', (model) => model.api.base);
  const api = useModel('cloud-drive.index', (model) => model.api.upload);

  const handleCancelUpload = useCallback(() => {
    api.cancel(file.id!);
  }, [api, file.id]);

  const handleOpenFolder = useCallback(() => {
    baseApi.closeTransfers();
    history.push(`/drive/folders/${file.result!.parentFolder.id}`);
  }, [baseApi, file.result, history]);

  const handleStart = useCallback(() => {
    api.start(file.id!);
  }, [api, file.id]);

  const handleRestore = useCallback(() => {
    api.restore(file.id!);
  }, [api, file.id]);

  const handlePause = useCallback(() => {
    api.pause(file.id!);
  }, [api, file.id]);

  const handleDelete = useCallback(() => {
    api.delete(file.id!);
  }, [api, file.id]);

  return (
    <li
      className={classnames('file-item', {
        'file-item-uploaded': ['completed', 'error'].includes(file.state),
      })}
      key={file.id}
    >
      <div className="file-icon">{randerFileIcon(file)}</div>
      <div className="file-details">
        <div className="file-title">{file.name}</div>
        <div
          className={classnames('file-transfer-progress progress', {
            'opacity-0': file.state == 'completed',
          })}
        >
          <Progress color="success" percent={file.progress} />
        </div>
        <div className="file-status">
          <div className="file-size">{fileSize(file.size)}</div>
          {file.state == 'error' && <div className="upload-error text-danger">上传出现错误!</div>}
          {!['completed', 'error'].includes(file.state) && (
            <div className="file-transfer-rate">
              {file.progress == 100 ? '等待完成...' : !!file.uploadSpeed && file.uploadSpeed + '/s'}
            </div>
          )}
        </div>
      </div>
      <div className="file-actions">
        {file.state == 'waiting' && (
          <Button icon={<Icon name="Bootstrap/clock" className="svg-icon-4" />} />
        )}
        {file.state == 'uploading' && (
          <Button
            onClick={handlePause}
            icon={<Icon name="Bootstrap/pause" className="svg-icon-4" />}
          />
        )}
        {file.state == 'paused' && (
          <Button
            onClick={handleStart}
            icon={<Icon name="Bootstrap/arrow-up-short" className="svg-icon-4" />}
          />
        )}
        {['canceled', 'error'].includes(file.state) && (
          <Button
            onClick={handleRestore}
            icon={<Icon name="Bootstrap/arrow-counterclockwise" className="svg-icon-4" />}
          />
        )}
        {file.state == 'completed' && (
          <Button
            onClick={handleOpenFolder}
            icon={<Icon name="Bootstrap/folder2" className="svg-icon-6" />}
          />
        )}
        {!['completed', 'canceled', 'error'].includes(file.state) && (
          <Button
            onClick={handleCancelUpload}
            icon={<Icon name="Bootstrap/x" className="svg-icon-4" />}
          />
        )}
        {['completed', 'canceled', 'error'].includes(file.state) && (
          <Button
            onClick={handleDelete}
            icon={<Icon name="Bootstrap/eraser" className="svg-icon-6" />}
          />
        )}
      </div>
    </li>
  );
}

function UploadFileList() {
  const uploadFiles = useModel('cloud-drive.index', ({ state }) => {
    return state.uploadFiles;
  });

  return (
    <OverlayScrollbarsComponent
      className={classnames('custom-scrollbar')}
      options={{
        scrollbars: { autoHide: 'scroll' },
      }}
    >
      {!!uploadFiles.length ? (
        <ul className="transfer-file-list">
          {uploadFiles.map((file) => (
            <UploadFileItem file={file} key={file.id} />
          ))}
        </ul>
      ) : (
        <div className="transfer-list-empty">
          <img src="/assets/media/illustrations/dozzy-1/4.png" />
          <span className="empty-title">没有上传任务</span>
        </div>
      )}
    </OverlayScrollbarsComponent>
  );
}

type DownloadFileItemProps = {
  file: DownloadFile;
};

function DownloadFileItem(props: DownloadFileItemProps) {
  const { file } = props;

  const api = useModel('cloud-drive.index', (model) => model.api.download);

  const handleCancelUpload = useCallback(() => {
    api.cancel(file.id!);
  }, [api, file.id]);

  const handleSaveFile = useCallback(() => {
    api.save(file.id!);
    console.log('本地下载');
  }, [api, file.id]);

  const handleStart = useCallback(() => {
    api.start(file.id!);
  }, [api, file.id]);

  const handleRestore = useCallback(() => {
    api.restore(file.id!);
  }, [api, file.id]);

  const handlePause = useCallback(() => {
    api.pause(file.id!);
  }, [api, file.id]);

  const handleDelete = useCallback(() => {
    api.delete(file.id!);
  }, [api, file.id]);

  return (
    <li
      className={classnames('file-item', {
        'file-item-download': ['completed', 'error'].includes(file.state),
      })}
      key={file.id}
    >
      <div className="file-icon">{randerFileIcon(file)}</div>
      <div className="file-details">
        <div className="file-title">{file.name}</div>
        <div
          className={classnames('file-transfer-progress progress', {
            'opacity-0': file.state == 'completed',
          })}
        >
          <Progress color="primary" percent={file.progress} />
        </div>
        <div className="file-status">
          <div className="file-size">{fileSize(file.size)}</div>
          {file.state == 'error' && <div className="upload-error text-danger">下载出现错误!</div>}
          {!['completed', 'error'].includes(file.state) && (
            <div className="file-transfer-rate">
              {file.progress == 100
                ? '等待完成...'
                : !!file.downloadSpeed && file.downloadSpeed + '/s'}
            </div>
          )}
        </div>
      </div>
      <div className="file-actions">
        {file.state == 'waiting' && (
          <Button icon={<Icon name="Bootstrap/clock" className="svg-icon-4" />} />
        )}
        {file.state == 'downloading' && (
          <Button
            onClick={handlePause}
            icon={<Icon name="Bootstrap/pause" className="svg-icon-4" />}
          />
        )}
        {file.state == 'paused' && (
          <Button
            onClick={handleStart}
            icon={<Icon name="Bootstrap/arrow-down-short" className="svg-icon-4" />}
          />
        )}
        {['canceled', 'error'].includes(file.state) && (
          <Button
            onClick={handleRestore}
            icon={<Icon name="Bootstrap/arrow-counterclockwise" className="svg-icon-4" />}
          />
        )}
        {file.state == 'completed' && (
          <Button
            onClick={handleSaveFile}
            icon={<Icon name="Bootstrap/download" className="svg-icon-6" />}
          />
        )}
        {!['completed', 'canceled', 'error'].includes(file.state) && (
          <Button
            onClick={handleCancelUpload}
            icon={<Icon name="Bootstrap/x" className="svg-icon-4" />}
          />
        )}
        {['completed', 'canceled', 'error'].includes(file.state) && (
          <Button
            onClick={handleDelete}
            icon={<Icon name="Bootstrap/eraser" className="svg-icon-6" />}
          />
        )}
      </div>
    </li>
  );
}

function DownloadFileList() {
  const downloadFiles = useModel('cloud-drive.index', ({ state }) => {
    return state.downloadFiles;
  });

  return (
    <OverlayScrollbarsComponent
      className={classnames('custom-scrollbar')}
      options={{
        scrollbars: { autoHide: 'scroll' },
      }}
    >
      {!!downloadFiles.length ? (
        <ul className="transfer-file-list">
          {downloadFiles.map((file) => (
            <DownloadFileItem file={file} key={file.id} />
          ))}
        </ul>
      ) : (
        <div className="transfer-list-empty">
          <img src="/assets/media/illustrations/dozzy-1/4.png" />
          <span className="empty-title">没有下载任务</span>
        </div>
      )}
    </OverlayScrollbarsComponent>
  );
}

function Transfers() {
  const [activeKey, setActiveKey] = useState('upload');

  const handleChange = useCallback((_activeKey: string) => {
    setActiveKey(_activeKey);
  }, []);

  const api = useModel('cloud-drive.index', (model) => ({
    deleteUploadFile: model.api.upload.delete,
    deleteDownloadFile: model.api.download.delete,
  }));

  const uploadedFiles = useModel('cloud-drive.index', ({ state }) => {
    return state.uploadFiles.filter((item) => item.state == 'completed');
  });

  const downloadFiles = useModel('cloud-drive.index', ({ state }) => {
    return state.downloadFiles.filter((item) => item.state == 'completed');
  });

  const handleClearUploadedFiles = useCallback(async () => {
    for (const _file of uploadedFiles) {
      await api.deleteUploadFile(_file.id!);
    }
  }, [api, uploadedFiles]);

  const handleClearDownloadFiles = useCallback(async () => {
    for (const _file of downloadFiles) {
      await api.deleteDownloadFile(_file.id!);
    }
  }, [api, downloadFiles]);

  const showToolbar = useMemo(() => {
    return (
      (!!uploadedFiles.length && activeKey == 'upload') ||
      (!!downloadFiles.length && activeKey == 'download')
    );
  }, [activeKey, uploadedFiles.length, downloadFiles.length]);

  return (
    <>
      <div className="popover-header">
        <span className="popover-title">传输列表</span>
        <div className="popover-toolbar">
          {showToolbar && (
            <a
              className="cursor-pointer"
              onClick={activeKey == 'upload' ? handleClearUploadedFiles : handleClearDownloadFiles}
            >
              清空已完成
            </a>
          )}
        </div>
      </div>
      <Tabs activeKey={activeKey} onChange={handleChange} tabPosition="left">
        <Tabs.TabPane key="upload" tab="文件上传">
          <UploadFileList />
        </Tabs.TabPane>
        <Tabs.TabPane key="download" tab="文件下载">
          <DownloadFileList />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}

export default Transfers;
