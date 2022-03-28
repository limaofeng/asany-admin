import { useCallback } from 'react';

import { useModel } from 'umi';
import Icon from '@asany/icons';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import classnames from 'classnames';

import { Button, Progress, Tabs } from '@/pages/Metronic/components';
import type { UploadFile } from '@/models/cloud-drive';
import { fileSize } from '@/pages/Metronic/components/utils/format';

function randerFileIcon(file: UploadFile) {
  console.log('randerFileIcon', file);
  if (['zip'].includes(file.extension!)) {
    return <Icon name="Material/zip" className="svg-icon-2x" />;
  }
  if (file.mimeType.startsWith('video/')) {
    return <Icon name="Material/video" className="svg-icon-2x" />;
  }
  return <Icon name="Duotune/fil003" className="svg-icon-2x" />;
}

type UploadFileItemProps = {
  file: UploadFile;
};

function UploadFileItem(props: UploadFileItemProps) {
  const { file } = props;

  const api = useModel('cloud-drive', (model) => ({
    cancelUploadFile: model.cancelUploadFile,
    pauseUploadFile: model.pauseUploadFile,
    startUploadFile: model.startUploadFile,
    restoreUploadFile: model.restoreUploadFile,
  }));

  const handleCancelUpload = useCallback(() => {
    api.cancelUploadFile(file.id!);
  }, [api, file.id]);

  return (
    <li className="file-item" key={file.id}>
      <div className="file-icon">{randerFileIcon(file)}</div>
      <div className="file-details">
        <div className="file-title">{file.name}</div>
        <div className="file-transfer-progress progress">
          <Progress color="success" percent={file.progress} />
        </div>
        <div className="file-status">
          <div className="file-size">{fileSize(file.size)}</div>
          <div className="file-transfer-rate">{!!file.uploadSpeed && file.uploadSpeed + '/s'}</div>
        </div>
      </div>
      <div className="file-actions">
        {file.state == 'waiting' && (
          <Button icon={<Icon name="Bootstrap/clock" className="svg-icon-4" />} />
        )}
        {file.state == 'uploading' && (
          <Button icon={<Icon name="Bootstrap/pause" className="svg-icon-4" />} />
        )}
        {file.state == 'paused' && (
          <Button icon={<Icon name="Bootstrap/arrow-up-short" className="svg-icon-4" />} />
        )}
        {file.state == 'canceled' && (
          <Button icon={<Icon name="Bootstrap/arrow-counterclockwise" className="svg-icon-4" />} />
        )}
        {file.state != 'canceled' && (
          <Button
            onClick={handleCancelUpload}
            icon={<Icon name="Bootstrap/x" className="svg-icon-4" />}
          />
        )}
      </div>
    </li>
  );
}

function UploadFileList() {
  const uploadFiles = useModel('cloud-drive', ({ state }) => {
    console.log('uploadFiles', state.uploadFiles);
    return state.uploadFiles;
  });

  console.log('uploadFiles', uploadFiles);

  return (
    <OverlayScrollbarsComponent
      className={classnames('custom-scrollbar')}
      options={{
        scrollbars: { autoHide: 'scroll' },
      }}
    >
      <ul className="transfer-file-list">
        {uploadFiles.map((file) => (
          <UploadFileItem file={file} key={file.id} />
        ))}
      </ul>
    </OverlayScrollbarsComponent>
  );
}

function Transfers() {
  return (
    <Tabs tabPosition="left">
      <Tabs.TabPane key="upload" tab="文件上传">
        <UploadFileList />
      </Tabs.TabPane>
      <Tabs.TabPane key="download" tab="文件下载">
        ssss
      </Tabs.TabPane>
    </Tabs>
  );
}

export default Transfers;
