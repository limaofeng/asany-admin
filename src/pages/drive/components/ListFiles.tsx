import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';

import Icon from '@asany/icons';
import { useHistory } from 'umi';

// import FileActions from '../components/FileActions';
import FolderPath from '../components/FolderPath';
import { useFolderQuery, useListFiles } from '../hooks';

import FileDetails from './FileDetails';

import { Badge, BlockUI, Button, Card, Input, Table } from '@/pages/Metronic/components';
import type { CloudDrive, FileFilter, FileObject } from '@/types';
import { sleep } from '@/utils';
import type { DataSource } from '@/pages/Metronic/components/base/Table';
import type { Sorter } from '@/pages/Metronic/components/base/Table/typings';

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
  orderBy?: Sorter;
  filter?: FileFilter;
  cloudDrive?: CloudDrive;
  currentFolder?: FileObject;
  folder?: string;
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
  const { folder, cloudDrive, filter } = props;

  const history = useHistory();

  const temp = useRef<{
    cloudDrive?: CloudDrive;
    currentFolder?: FileObject;
    sorter: Sorter;
  }>({
    sorter: props.orderBy || { field: 'name', order: 'ascend' },
    cloudDrive,
    currentFolder: props.currentFolder,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const { data: loadFolderResult } = useFolderQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      folder: folder,
    },
  });

  const { sorter } = temp.current;

  const orderBy = useMemo(() => {
    if (!sorter) {
      return 'isDirectory_desc,name_asc';
    }
    return 'isDirectory_desc,' + sorter.field + '_' + (sorter.order == 'ascend' ? 'asc' : 'desc');
  }, [sorter]);

  const [pagination, loading, useFileObject, { loadedCount }] = useListFiles(
    folder,
    filter,
    orderBy,
  );

  const [, setRenameFile] = useState<FileObject>();
  const [selectedRows, setSelectedRows] = useState<FileObject[]>([]);

  const currentFolder = useMemo(() => {
    if (
      props.currentFolder &&
      loadFolderResult?.currentFolder &&
      props.currentFolder.id != loadFolderResult.currentFolder.id &&
      props.currentFolder.path.startsWith(loadFolderResult.currentFolder.path)
    ) {
      return (temp.current.currentFolder = props.currentFolder);
    }
    if (!loadFolderResult?.currentFolder) {
      return temp.current.currentFolder;
    }
    return (temp.current.currentFolder = loadFolderResult?.currentFolder as FileObject);
  }, [loadFolderResult?.currentFolder, props.currentFolder]);

  const handleSelectedRows = useCallback(
    (_, _selectedRows) => {
      console.log('selectedRows', _selectedRows);
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

  const handleClick = useCallback(
    (item: FileObject) => {
      if (item.isDirectory) {
        const _currentFolder = { ...item };

        if (!item.isRootFolder) {
          const _paths: FileObject[] = [
            ...(generatePaths(temp.current.cloudDrive, temp.current.currentFolder) as any),
            _currentFolder,
          ];

          _currentFolder.parents = _paths.slice(1, _paths.length - 1);
          const _index = _currentFolder.parents.findIndex((_item) => _item.path == item.path);

          if (_index != -1) {
            _currentFolder.parents = _currentFolder.parents.slice(0, _index);
          }
        }

        if (item.isRootFolder) {
          history.push(`/drive/my-drive`, {
            cloudDrive,
            currentFolder: _currentFolder,
            orderBy: temp.current.sorter,
          });
        } else {
          history.push(`/drive/folders/${item.id}`, {
            cloudDrive,
            currentFolder: _currentFolder,
            orderBy: temp.current.sorter,
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

  const renderStats = useCallback(() => {
    if (pagination.totalCount == loadedCount && loadedCount == 0) {
      return loading ? <>加载中....</> : <></>;
    }
    return (
      <>
        {pagination.totalCount == loadedCount ? <>已全部加载</> : <>已加载 {loadedCount} 个</>}
        ，共 {pagination.totalCount} 个
      </>
    );
  }, [loadedCount, loading, pagination.totalCount]);

  const handleChange = useCallback((_pagination, _filters, _sorter) => {
    temp.current.sorter = _sorter;
    console.log('handleChange', temp.current.sorter);
    forceRender();
  }, []);

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
                {renderStats()}
              </Badge>
            </div>
            <BlockUI overlayClassName="bg-white bg-opacity-25" loading={loading}>
              {!pagination.totalCount && !loading ? (
                noRowsRenderer()
              ) : (
                <Table
                  rowKey="id"
                  hover
                  rowSelection={{
                    type: 'checkbox',
                    renderTitle: (size) => (
                      <>
                        已选中<span className="mx-2">{size}</span>个文件/文件夹
                      </>
                    ),
                    onChange: handleSelectedRows,
                  }}
                  scroll={{
                    rowHeight: 50,
                    rowCount: pagination.totalCount,
                  }}
                  columns={[
                    {
                      key: 'name',
                      title: '文件名',
                      className: 'min-w-250px',
                      sorter: true,
                      sortOrder: sorter.field == 'name' ? sorter.order : undefined,
                      render: (_, record) => {
                        return (
                          <FileName
                            onClick={handleClick}
                            onCancelRename={handleCancelRename}
                            data={record}
                            editable={false} //record && record.id == renameFile?.id
                            storageId={''}
                          />
                        );
                      },
                    },
                    {
                      key: 'lastModified',
                      title: '更新时间',
                      sorter: true,
                      className: 'min-w-125px',
                      sortOrder: sorter.field == 'lastModified' ? sorter.order : undefined,
                    },
                    {
                      key: 'size',
                      title: '文件大小',
                      sorter: true,
                      className: 'min-w-100px',
                      sortOrder: sorter.field == 'size' ? sorter.order : undefined,
                      render(value, record) {
                        return record.isDirectory ? '-' : value;
                      },
                    },
                    // {
                    //   key: 'actions',
                    //   title: '',
                    //   className: 'w-125px',
                    //   render: (_, record) => {
                    //     return <FileActions data={record} onRename={handleRename} />;
                    //   },
                    // },
                  ]}
                  dataSource={
                    {
                      useItem: useFileObject,
                    } as DataSource<FileObject>
                  }
                  onChange={handleChange}
                />
              )}
            </BlockUI>
          </div>
          <div className="col-xl-3 file-details-quick-preview pb-7">
            <FileDetails />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ListFiles;
