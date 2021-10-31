import { useCallback, useEffect, useMemo, useState } from 'react';

import type { RouteComponentProps } from 'react-router';
import Icon from '@asany/icons';
import { Link } from 'react-router-dom';

import { useListFilesQuery } from '../hooks';
import FileActions from '../components/FileActions';
import FolderPath from '../components/FolderPath';

import { Badge, Button, Card, Input, Table } from '@/pages/Metronic/components';
import type { FileObject, Storage } from '@/services/api';
import { sleep } from '@/utils';

type FileNameProps = {
  storageId: string;
  onCancelRename: () => void;
  editable: boolean;
  data: FileObject;
};

function FileName(props: FileNameProps) {
  const { storageId, data, editable, onCancelRename } = props;

  const [saving, setSaving] = useState(false);
  const [name, setName] = useState(data.name);

  // const handleClick = useCallback(
  //   (e: React.MouseEvent) => {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     onClick(data);
  //   },
  //   [data, onClick],
  // );

  const handleChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleSaveNewName = useCallback(async () => {
    setSaving(true);
    await sleep(2000);
    setSaving(false);
    onCancelRename();
  }, [onCancelRename]);

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
          <Link
            className="text-gray-800 text-hover-primary"
            to={
              data.isDirectory
                ? `/storages/${storageId}${data.path}`
                : `/preview?url=${encodeURIComponent(`/storages/${storageId}${data.path}`)}`
            }
          >
            {data.name}
          </Link>
        )}
      </div>
    </>
  );
}

type ListFilesProps = RouteComponentProps<{ id: string; 0: string }> & {
  storage: Storage;
};

function ListFiles(props: ListFilesProps) {
  const {
    storage,
    match: { params },
  } = props;
  const path = params[0];

  const { data, loading } = useListFilesQuery({
    variables: {
      storage: 'Global',
      path: path ? '/' + path + (path.endsWith('/') ? '' : '/') : undefined,
    },
  });

  const [renameFile, setRenameFile] = useState<FileObject>();
  const [selectedRows, setSelectedRows] = useState<FileObject[]>([]);

  const currentFile = data?.currentFile;
  const files = data?.files || [];

  /*   const handleClick = useCallback(
    (item) => {
      refetch({
        path: item.path,
      });
    },
    [refetch],
  ); */

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
    if (currentFile == null || storage == null) {
      return [];
    }
    const [, ...objects] = currentFile!.parents!;
    const _paths = [{ id: '', name: storage.id, path: '/' }, ...objects];
    if (currentFile.path !== '/') {
      _paths.push(currentFile);
    }
    return _paths;
  }, [storage, currentFile]);

  console.log('paths', paths);

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
          <div
            className="d-flex justify-content-end align-items-center d-none"
            data-kt-filemanager-table-toolbar="selected"
          >
            <div className="fw-bolder me-5">
              <span className="me-2" data-kt-filemanager-table-select="selected_count" />
              Selected
            </div>
            <button
              type="button"
              className="btn btn-danger"
              data-kt-filemanager-table-select="delete_selected"
            >
              Delete Selected
            </button>
          </div>
        </Card.Toolbar>
      </Card.Header>
      <Card.Body>
        <div className="d-flex flex-stack">
          <FolderPath storage={storage} paths={paths as any} />
          <Badge size="lg" color="white">
            {loading ? '加载中...' : `已完成加载，共${files.length}个`}
          </Badge>
        </div>
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
                    storageId={params.id}
                    onCancelRename={handleCancelRename}
                    data={record}
                    editable={record.id == renameFile?.id}
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
      </Card.Body>
    </Card>
  );
}

export default ListFiles;
