import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';

import { useHistory, useModel } from 'umi';
import Icon from '@asany/icons';
import classnames from 'classnames';
import { useDropzone } from 'react-dropzone';

import FolderPath from '../components/FolderPath';
import {
  useAddStarForFilesMutation,
  useClearFilesInTrashMutation,
  useFolderQuery,
  useListFiles,
  useMoveFilesToTrashMutation,
  useRestoreFilesMutation,
} from '../hooks';

import FileDetails from './FileDetails';
import FileName from './FileName';
import NewFolderModal from './NewFolderModal';

import {
  Alert,
  Badge,
  BlockUI,
  Button,
  Card,
  Input,
  Modal,
  Table,
  Toast,
} from '@/pages/Metronic/components';
import type { FileFilter, FileObject } from '@/types';
import type { DataSource, Sorter } from '@/pages/Metronic/components/base/Table/typings';
import { fileSize } from '@/pages/Metronic/components/utils/format';

type ListFilesProps = {
  toolbar?: 'default' | 'starred' | 'trash';
  orderBy?: Sorter;
  filter?: FileFilter;
  rootFolder?: FileObject;
  currentFolder?: FileObject;
  folder?: string;
};

function generatePaths(rootFolder?: FileObject, currentFolder?: FileObject) {
  const _paths = rootFolder
    ? [
        {
          id: rootFolder.id,
          name: rootFolder.name,
          isDirectory: true,
          isRootFolder: true,
          path: '/',
        },
      ]
    : [];
  if (!!currentFolder && currentFolder.id !== rootFolder?.id) {
    currentFolder.parents && _paths.push(...currentFolder.parents!);
    if (!currentFolder.isRootFolder) {
      _paths.push({ ...(currentFolder as any) });
    }
  }
  return _paths;
}

function ListFiles(props: ListFilesProps) {
  const { folder, rootFolder, filter, toolbar = 'default' } = props;

  const history = useHistory();

  const cloudDrive = useModel('cloud-drive.index', ({ state }) => state.cloudDrive);
  const upload = useModel('cloud-drive.index', (model) => model.upload);
  const download = useModel('cloud-drive.index', (model) => model.download);

  const temp = useRef<{
    rootFolder?: FileObject;
    currentFolder?: FileObject;
    newFolderVisible: boolean;
    sorter: Sorter;
    renameFile?: FileObject;
  }>({
    sorter: props.orderBy || { field: 'name', order: 'ascend' },
    rootFolder,
    newFolderVisible: false,
    currentFolder: props.currentFolder,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const handleOpenNewFolderModal = useCallback(() => {
    temp.current.newFolderVisible = true;
    forceRender();
  }, []);

  const handleCloseNewFolderModal = useCallback(() => {
    temp.current.newFolderVisible = false;
    forceRender();
  }, []);

  const { data: loadFolderResult } = useFolderQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      folder: folder,
    },
  });
  const [starFiles] = useAddStarForFilesMutation();
  // const [deleteFiles] = useDeleteFilesMutation();
  const [moveToTrash] = useMoveFilesToTrashMutation();
  const [clearTrash] = useClearFilesInTrashMutation();
  const [restoreFiles] = useRestoreFilesMutation();

  const { sorter } = temp.current;

  const orderBy = useMemo(() => {
    if (!sorter) {
      return 'isDirectory_desc,name_asc';
    }
    return 'isDirectory_desc,' + sorter.field + '_' + (sorter.order == 'ascend' ? 'asc' : 'desc');
  }, [sorter]);

  const [
    pagination,
    loading,
    useFileObject,
    { loadedCount, allItems, refetch, refetchForObjects, refetchWithRemoveForObjects },
  ] = useListFiles(rootFolder?.id, filter, orderBy);

  const dataSource: DataSource<FileObject> = useMemo(() => {
    return {
      loadedCount: loadedCount,
      rowCount: pagination.totalCount,
      get items() {
        return allItems();
      },
      useItem: useFileObject,
    };
  }, [allItems, loadedCount, pagination.totalCount, useFileObject]);

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

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

  const handleRowSelectionChange = useCallback(
    (_selectedKeys) => {
      setSelectedKeys(_selectedKeys);
    },
    [setSelectedKeys],
  );

  const handleSuccess = useCallback(
    async (file: FileObject) => {
      await refetchForObjects([file], (l, r) => l.id == r.id);
    },
    [refetchForObjects],
  );

  const selectedFile = useMemo(() => {
    if (selectedKeys.length != 1) {
      return undefined;
    }
    return allItems().find((item) => item && item.id == selectedKeys[0]);
  }, [allItems, selectedKeys]);

  const handleCancelRename = useCallback(() => {
    temp.current.renameFile = undefined;
    forceRender();
  }, []);

  const paths = useMemo(() => {
    return generatePaths(rootFolder, currentFolder);
  }, [rootFolder, currentFolder]);

  const handleClick = useCallback(
    async (item: FileObject) => {
      if (toolbar == 'trash') {
        await Modal.confirm({
          title: <>此文件{item.isDirectory && '夹'}位于您的回收站中</>,
          content: <>要查看该文件{item.isDirectory && '夹'}，您需要将其从回收站还原。</>,
          okText: '还原',
        });
        return;
      }
      if (item.isDirectory) {
        const _currentFolder = { ...item };

        if (!item.isRootFolder) {
          const _paths: FileObject[] = [
            ...(generatePaths(temp.current.rootFolder, temp.current.currentFolder) as any),
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
            rootFolder,
            currentFolder: _currentFolder,
            orderBy: temp.current.sorter,
          });
        } else {
          history.push(`/drive/folders/${item.id}`, {
            rootFolder,
            currentFolder: _currentFolder,
            orderBy: temp.current.sorter,
          });
        }

        return;
      }
    },
    [toolbar, history, rootFolder],
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

  const starred = allItems()
    .filter((item) => selectedKeys.includes(item.id))
    .every((item) => item.starred);

  const handleChange = useCallback((_pagination, _filters, _sorter) => {
    temp.current.sorter = _sorter;
    forceRender();
  }, []);

  const selectedFiles = useMemo(() => {
    return dataSource.items.filter((item) => selectedKeys.some((key) => key == item.id));
  }, [dataSource, selectedKeys]);

  const handleNewFolderSuccess = useCallback(
    async (_folder: FileObject) => {
      await refetch(1);
      const items = allItems();
      if (items.some((item) => item && item.id == _folder.id)) {
        setSelectedKeys([_folder.id]);
      }
    },
    [refetch, allItems],
  );

  const currentFolderId = currentFolder?.id || rootFolder?.id;

  useEffect(() => {
    setSelectedKeys([]);
  }, [currentFolderId, rootFolder?.name]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      upload(acceptedFiles, {
        space: cloudDrive!.space,
        folder: currentFolderId!,
      });
    },
    [cloudDrive, currentFolderId, upload],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  console.log('isDragActive', isDragActive);

  const { role, tabIndex, onClick: browseLocalFiles, ...rootProps } = getRootProps();

  const handleUpload = useCallback(
    (e) => {
      browseLocalFiles(e);
    },
    [browseLocalFiles],
  );

  const handleDownload = useCallback(async () => {
    // const zip = new JSZip();
    // zip.file('Hello.txt', 'Hello World\n');
    // const img = zip.folder('images')!;
    // img.file('smile.gif', 'xxx', { base64: true });
    // const content = await zip.generateAsync({ type: 'blob' });
    // saveAs(content, 'example.zip');
    // download('http://localhost:8080/download', {
    //   ids: ['uUw7hWtFvpx-vNSeMNpueccrRWGr8VF6tQJzCH9wgYccj8lolsWAa3h6YkXKtAfp'],
    // });

    const items = dataSource.items;
    const files = items.filter((item) => selectedKeys.includes(item.id));

    const filename =
      files.length == 1 ? files[0].name : `【批量下载】${files[0].name} 等 (${files.length}).zip`;

    download(files, filename);
  }, [dataSource, download, selectedKeys]);

  const handleDelete = useCallback(async () => {
    const message = selectedFile
      ? selectedFile?.isDirectory
        ? '文件夹'
        : '文件'
      : selectedKeys.length + ' 项内容';

    const result = await Modal.confirm({
      title: '确定删除',
      content: (
        <>
          <p className="tip-confirm">确定删除所选的文件吗？</p>
          <p>删除的文件可在 10天 内通过回收站还原</p>
        </>
      ),
      icon: 'info',
      okText: '删除',
    });
    if (!result.isConfirmed) {
      return;
    }
    const { data: rdata } = await moveToTrash({ variables: { ids: selectedKeys } });
    setSelectedKeys([]);
    refetchWithRemoveForObjects(rdata?.files as any, (l, r) => l.id == r.id);
    Toast.success(message + ' 已移至回收站', 2000, {
      placement: 'bottom-start',
      progressBar: true,
    });
  }, [moveToTrash, refetchWithRemoveForObjects, selectedFile, selectedKeys]);

  const handleClearTrash = useCallback(async () => {
    const result = await Modal.confirm({
      title: '清空回收站',
      content: '系统将永久删除回收站中的内容，此操作无法恢复 ？',
    });
    if (!result.isConfirmed) {
      return;
    }
    await clearTrash({
      variables: { folder },
    });
    refetch(1);
    Toast.success('回收站已被清空', 2000, {
      placement: 'bottom-start',
      progressBar: true,
    });
  }, [clearTrash, folder, refetch]);

  const handleRestore = useCallback(async () => {
    const message = selectedFile
      ? selectedFile?.isDirectory
        ? '文件夹'
        : '文件'
      : selectedKeys.length + ' 项内容';
    const result = await Modal.confirm({
      title: '确定还原',
      content: '确认还原选中的 ' + message + ' ？',
    });
    if (!result.isConfirmed) {
      return;
    }
    const { data: rdata } = await restoreFiles({ variables: { ids: selectedKeys } });
    setSelectedKeys([]);
    refetchWithRemoveForObjects(rdata?.files as any, (l, r) => l.id == r.id);
    Toast.success(message + ' 还原成功', 2000, {
      placement: 'bottom-start',
      progressBar: true,
    });
  }, [refetchWithRemoveForObjects, restoreFiles, selectedFile, selectedKeys]);

  const handleStar = useCallback(async () => {
    const message = selectedFile
      ? selectedFile?.isDirectory
        ? '文件夹'
        : '文件'
      : selectedKeys.length + ' 项内容';

    if (starred) {
      const { data: rdata } = await starFiles({
        variables: {
          ids: selectedKeys,
          mode: 'REMOVE',
        },
      });
      refetchForObjects(rdata?.files as any, (l, r) => l.id == r.id);
      Toast.success(message + '已从收藏中移除', 2000, {
        placement: 'bottom-start',
        progressBar: true,
      });
    } else {
      const { data: rdata } = await starFiles({
        variables: {
          ids: selectedKeys,
          mode: 'ADD',
        },
      });
      if (toolbar == 'starred') {
        setSelectedKeys([]);
        refetchWithRemoveForObjects(rdata?.files as any, (l, r) => l.id == r.id);
      } else {
        refetchForObjects(rdata?.files as any, (l, r) => l.id == r.id);
      }
      Toast.success(message + ' 已添加到收藏', 2000, {
        placement: 'bottom-start',
        progressBar: true,
      });
    }
    forceRender();
  }, [
    refetchForObjects,
    refetchWithRemoveForObjects,
    selectedFile,
    selectedKeys,
    starFiles,
    starred,
    toolbar,
  ]);

  const handleRename = useCallback(async () => {
    temp.current.renameFile = selectedFile;
    forceRender();
  }, [selectedFile]);

  const row_selection_state = useMemo(() => {
    if (!selectedKeys.length) {
      return 'no_rows';
    }
    if (selectedKeys.length == 1) {
      return 'row';
    }
    return 'multi-row';
  }, [selectedKeys.length]);

  const tableToolbar = useMemo(() => {
    if (toolbar == 'starred') {
      return () => {
        return (
          <div>
            <Button
              color="success"
              variant={false}
              className="trash-restore"
              onClick={handleStar}
              icon={<Icon name="Duotune/arr029" className="svg-icon-4 svg-icon-success" />}
            >
              取消收藏
            </Button>
          </div>
        );
      };
    }
    if (toolbar == 'trash') {
      return () => {
        return (
          <div>
            <Button
              color="success"
              variant={false}
              className="trash-restore"
              onClick={handleRestore}
              icon={<Icon name="Duotune/arr029" className="svg-icon-4 svg-icon-success" />}
            >
              还原
            </Button>
          </div>
        );
      };
    }
    return undefined;
  }, [handleRestore, handleStar, toolbar]);

  return (
    <Card flush>
      {toolbar == 'default' && (
        <Card.Header className="pt-8 flex-row-reverse">
          <Card.Title>
            <Input.Search
              size="lg"
              solid
              className="rounded-2 w-300px"
              placeholder="搜索 文件 & 文件夹"
            />
          </Card.Title>
          <Card.Toolbar>
            <div
              className={classnames('d-flex justify-content-end', {
                'file-action-group px-3 gap-2': ['row', 'multi-row'].includes(row_selection_state),
              })}
            >
              {row_selection_state == 'no_rows' && (
                <>
                  {toolbar == 'default' && (
                    <Button
                      variant="primary"
                      className="rounded-2 me-3"
                      icon={<Icon className="svg-icon-2" name="Duotune/fil018" />}
                      onClick={handleUpload}
                    >
                      上传文件
                    </Button>
                  )}
                  {toolbar == 'default' && rootFolder?.isRootFolder && (
                    <Button
                      variantStyle="light"
                      variant="primary"
                      className="rounded-2"
                      icon={<Icon className="svg-icon-2" name="Duotune/fil013" />}
                      onClick={handleOpenNewFolderModal}
                    >
                      新建文件夹
                    </Button>
                  )}
                </>
              )}
              {['row', 'multi-row'].includes(row_selection_state) && (
                <Button
                  variantStyle="light"
                  variant="primary"
                  className="rounded-2"
                  icon={<Icon className="svg-icon-2" name="Duotune/arr095" />}
                >
                  分享
                </Button>
              )}
              {['row', 'multi-row'].includes(row_selection_state) && (
                <Button
                  variantStyle="light"
                  variant="primary"
                  className="rounded-2"
                  icon={
                    <Icon
                      className="svg-icon-2"
                      style={{ transform: 'rotateZ(90deg)' }}
                      name="Duotune/arr076"
                    />
                  }
                  onClick={handleDownload}
                >
                  下载
                </Button>
              )}
              {['row', 'multi-row'].includes(row_selection_state) && (
                <Button
                  variantStyle="light"
                  variant="primary"
                  className="rounded-2"
                  icon={<Icon className="svg-icon-2" name="Duotune/gen027" />}
                  onClick={handleDelete}
                >
                  删除
                </Button>
              )}
              {row_selection_state == 'row' && (
                <Button
                  as="button"
                  variantStyle="light"
                  variant="primary"
                  className="rounded-2"
                  icon={<Icon className="svg-icon-2" name="Duotune/gen055" />}
                  onClick={handleRename}
                >
                  重命名
                </Button>
              )}
              {['row', 'multi-row'].includes(row_selection_state) && (
                <Button
                  variantStyle="light"
                  variant="primary"
                  className="rounded-2"
                  icon={<Icon className="svg-icon-2" name="Duotune/arr033" />}
                >
                  移动
                </Button>
              )}
              {['row', 'multi-row'].includes(row_selection_state) && (
                <Button
                  variantStyle="light"
                  variant="primary"
                  className="rounded-2"
                  icon={<Icon className="svg-icon-2" name="Duotune/abs024" />}
                  onClick={handleStar}
                >
                  {starred ? '取消收藏' : '收藏'}
                </Button>
              )}
            </div>
          </Card.Toolbar>
        </Card.Header>
      )}
      <Card.Body className="d-flex flex-row">
        <div className="flex-row-fluid" {...rootProps}>
          <div className="d-flex flex-stack">
            <FolderPath onClick={handleClick} paths={paths as any} />
            <Badge size="lg" color="white">
              {renderStats()}
            </Badge>
          </div>
          {toolbar == 'trash' && !!dataSource.rowCount && (
            <Alert
              theme="Light"
              type="primary"
              action={
                <Button
                  onClick={handleClearTrash}
                  variantStyle="light"
                  variant="primary"
                  className="me-3 ls-1"
                >
                  清空回收站
                </Button>
              }
              message="内容移至回收站后会在 10 天后被永久删除"
            />
          )}
          <input {...getInputProps()} />
          <BlockUI overlayClassName="bg-white bg-opacity-25" loading={loading}>
            {!pagination.totalCount && !loading ? (
              noRowsRenderer()
            ) : (
              <Table
                rowKey="id"
                hover
                rowSelection={{
                  type: 'checkbox',
                  selectedRowKeys: selectedKeys,
                  renderTitle: (size) => (
                    <>
                      已选中<span className="mx-2">{size}</span>个文件/文件夹
                    </>
                  ),
                  toolbar: tableToolbar,
                  onChange: handleRowSelectionChange,
                }}
                rowHeight={50}
                columns={[
                  {
                    key: 'name',
                    title: <span className="ps-2">文件名</span>,
                    className: 'min-w-250px',
                    sorter: true,
                    sortOrder: sorter.field == 'name' ? sorter.order : undefined,
                    render: (_, record) => {
                      return (
                        <FileName
                          onClick={handleClick}
                          onSuccess={handleSuccess}
                          onCancelRename={handleCancelRename}
                          data={record}
                          editable={record.id == temp.current.renameFile?.id}
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
                      return record.isDirectory ? '-' : fileSize(value);
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
                dataSource={dataSource}
                onChange={handleChange}
              />
            )}
          </BlockUI>
        </div>
        <div className="file-details-quick-preview pb-7">
          <FileDetails files={selectedFiles} currentFolder={currentFolder} />
        </div>
        <NewFolderModal
          onCancel={handleCloseNewFolderModal}
          visible={temp.current.newFolderVisible}
          parentFolder={currentFolderId!}
          onSuccess={handleNewFolderSuccess}
        />
      </Card.Body>
    </Card>
  );
}

export default ListFiles;
