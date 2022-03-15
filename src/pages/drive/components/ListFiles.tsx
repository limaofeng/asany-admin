import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import Icon from '@asany/icons';
import { useHistory } from 'umi';

import FileActions from '../components/FileActions';
import FolderPath from '../components/FolderPath';
import { useListFilesQuery } from '../hooks';

import { Badge, Button, Card, Input, Table } from '@/pages/Metronic/components';
import type { CloudDrive, FileObject } from '@/types';
import { sleep } from '@/utils';

type FileNameProps = {
  storageId: string;
  onClick: (file: FileObject) => void;
  onCancelRename: () => void;
  editable: boolean;
  data: FileObject;
};

function FileName(props: FileNameProps) {
  const { storageId, data, editable, onClick, onCancelRename } = props;

  const [saving, setSaving] = useState(false);
  const [name, setName] = useState(data.name);

  const handleChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleSaveNewName = useCallback(async () => {
    setSaving(true);
    await sleep(2000);
    setSaving(false);
    onCancelRename();
  }, [onCancelRename]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      onClick(data);
      e.preventDefault();
      e.stopPropagation();
    },
    [data, onClick],
  );

  useEffect(() => {
    setName(() => data.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editable]);

  return (
    <>
      <div className="d-flex align-items-center">
        <Icon
          name={`Duotune/${data.isDirectory ? 'fil012' : 'fil003'}`}
          className="svg-icon-2x svg-icon-primary me-4"
        />
        {editable ? (
          <>
            <Input
              value={name}
              onChange={handleChange}
              placeholder="输入新文件夹名称"
              className="mw-250px me-3"
            />
            <Button
              as="button"
              loading={saving}
              variantStyle="light"
              variant="primary"
              icon={<Icon name="Duotune/arr085" className="svg-icon-1" />}
              className="me-3"
              onClick={handleSaveNewName}
            />
            <Button
              as="button"
              variantStyle="light"
              variant="danger"
              icon={<Icon name="Duotune/arr088" className="svg-icon-1" />}
              className="svg-icon-1"
              onClick={onCancelRename}
            />
          </>
        ) : (
          <a
            className="text-gray-800 text-hover-primary"
            onClick={handleClick}
            href={
              data.isDirectory
                ? `/drive/folders/${data.id}`
                : `/preview?url=${encodeURIComponent(`/storages/${storageId}${data.path}`)}`
            }
          >
            {data.name}
          </a>
        )}
      </div>
    </>
  );
}

type ListFilesProps = {
  files?: FileObject[];
  cloudDrive?: CloudDrive;
  currentFolder?: FileObject;
  folder: string;
};

function generatePaths(cloudDrive?: CloudDrive, currentFolder?: FileObject) {
  const _paths = cloudDrive
    ? [
        {
          id: cloudDrive.rootFolder,
          name: '我的云盘',
          isDirectory: true,
          isRootFolder: true,
          path: '/',
        },
      ]
    : [];
  if (!!currentFolder) {
    currentFolder.parents && _paths.push(...currentFolder.parents!);
    if (!currentFolder.isRootFolder) {
      _paths.push({ ...(currentFolder as any) });
    }
  }
  return _paths;
}

function ListFiles(props: ListFilesProps) {
  const { folder, cloudDrive } = props;

  const history = useHistory();

  const temp = useRef<{
    files?: FileObject[];
    cloudDrive?: CloudDrive;
    currentFolder?: FileObject;
  }>({
    cloudDrive,
    currentFolder: props.currentFolder,
  });

  const { data, loading, previousData } = useListFilesQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      folder: folder,
    },
  });

  const [renameFile, setRenameFile] = useState<FileObject>();
  const [selectedRows, setSelectedRows] = useState<FileObject[]>([]);

  const currentFolder = useMemo(() => {
    if (
      props.currentFolder &&
      data?.currentFile &&
      props.currentFolder.id != data.currentFile.id &&
      props.currentFolder.path.startsWith(data?.currentFile.path)
    ) {
      return (temp.current.currentFolder = props.currentFolder);
    }
    if (!data?.currentFile) {
      return temp.current.currentFolder;
    }
    return (temp.current.currentFolder = data?.currentFile as FileObject);
  }, [data?.currentFile, props.currentFolder]);

  const handleSelectedRows = useCallback(
    (_, _selectedRows) => {
      setSelectedRows(_selectedRows);
    },
    [setSelectedRows],
  );

  const handleRename = useCallback((item) => {
    setRenameFile(item);
  }, []);

  const handleCancelRename = useCallback(() => {
    setRenameFile(undefined);
  }, []);

  const paths = useMemo(() => {
    return generatePaths(cloudDrive, currentFolder);
  }, [cloudDrive, currentFolder]);

  const files = useMemo(
    () => (data?.files || previousData?.files || props.files || []) as FileObject[],
    [data?.files, previousData?.files, props.files],
  );

  temp.current.files = files;

  const handleClick = useCallback(
    (item: FileObject) => {
      if (item.isDirectory) {
        const _currentFolder = { ...item };
        const _paths: FileObject[] = [
          ...(generatePaths(temp.current.cloudDrive, temp.current.currentFolder) as any),
          _currentFolder,
        ];

        _currentFolder.parents = _paths.slice(1, _paths.length - 1);
        const _index = _currentFolder.parents.findIndex((_item) => _item.path == item.path);

        if (_index != -1) {
          _currentFolder.parents = _currentFolder.parents.slice(0, _index);
        }

        if (item.isRootFolder) {
          history.push(`/drive/my-drive`, {
            cloudDrive,
            currentFolder: _currentFolder,
            files: temp.current.files,
          });
        } else {
          history.push(`/drive/folders/${item.id}`, {
            cloudDrive,
            currentFolder: _currentFolder,
            files: temp.current.files,
          });
        }

        return;
      }
    },
    [cloudDrive, history],
  );

  const noRowsRenderer = useCallback(() => {
    return (
      <div className="clouddrive-listfiles-no-rows d-flex flex-column flex-center">
        <img src="/assets/media/illustrations/sketchy-1/5.png" className="mw-200px" />
        <div className="fs-1 fw-bolder text-dark mb-4">将文件拖拽到此处</div>
        <div className="fs-6">
          或点击 “<span className="text-success">上传</span>” 按钮
        </div>
      </div>
    );
  }, []);

  console.log('ListFiles', loading, paths);

  return (
    <Card flush>
      <Card.Header className="pt-8">
        <Card.Title>
          <Input.Search solid className="w-250px" placeholder="搜索 文件 & 文件夹" />
        </Card.Title>
        <Card.Toolbar>
          <div className="d-flex justify-content-end">
            {!!selectedRows.length && (
              <Button variant="danger" className="me-3">
                删除
              </Button>
            )}
            {!!selectedRows.length && (
              <Button
                as="button"
                variantStyle="light"
                variant="primary"
                className="me-3"
                disabled={selectedRows.length != 1}
                onClick={() => handleRename(selectedRows[0])}
              >
                重命名
              </Button>
            )}
            <Button
              variantStyle="light"
              variant="primary"
              className="me-3"
              icon={<Icon className="svg-icon-2" name="Duotune/fil013" />}
            >
              新建文件夹
            </Button>
            <Button variant="primary" icon={<Icon className="svg-icon-2" name="Duotune/fil018" />}>
              上传文件
            </Button>
          </div>
        </Card.Toolbar>
      </Card.Header>
      <Card.Body>
        <div className="row g-7">
          <div className="col-xl-9">
            <div className="d-flex flex-stack">
              <FolderPath onClick={handleClick} paths={paths as any} />
              <Badge size="lg" color="white">
                {loading ? '加载中...' : `已完成加载，共${files.length}个`}
              </Badge>
            </div>
            {!!files.length ? (
              <Table
                rowKey="id"
                rowSelection={{
                  type: 'checkbox',
                  renderTitle: (size) => (
                    <>
                      已选中<span className="mx-2">{size}</span>个文件/文件夹
                    </>
                  ),
                  onChange: handleSelectedRows,
                }}
                columns={[
                  {
                    key: 'name',
                    title: '文件名',
                    className: 'min-w-250px',
                    render: (_, record) => {
                      return (
                        <FileName
                          onClick={handleClick}
                          onCancelRename={handleCancelRename}
                          data={record}
                          editable={record.id == renameFile?.id}
                          storageId={''}
                        />
                      );
                    },
                  },
                  {
                    key: 'size',
                    title: '文件大小',
                    className: 'min-w-10px',
                    render(value, record) {
                      return record.isDirectory ? '-' : value;
                    },
                  },
                  {
                    key: 'lastModified',
                    title: '更新时间',
                    className: 'min-w-125px',
                    render(value, record) {
                      return record.isDirectory ? '-' : value;
                    },
                  },
                  {
                    key: 'actions',
                    title: '',
                    className: 'w-125px',
                    render: (_, record) => {
                      return <FileActions data={record} onRename={handleRename} />;
                    },
                  },
                ]}
                dataSource={files}
              />
            ) : (
              noRowsRenderer()
            )}
          </div>
          <div className="col-xl-3 file-details-quick-preview">
            <div className="preview-container">文件详情</div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ListFiles;
