import { useCallback, useEffect, useState } from 'react';

import Icon from '@asany/icons';

import { Button, Input } from '@/pages/Metronic/components';
import type { FileObject } from '@/types';
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

  const handleSaveNewName = useCallback(
    async (e: React.MouseEvent) => {
      e.stopPropagation();
      setSaving(true);
      await sleep(2000);
      setSaving(false);
      onCancelRename();
    },
    [onCancelRename],
  );

  const handleCancel = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      onCancelRename();
    },
    [onCancelRename],
  );

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
  }, [data.name, editable]);

  const handleBlocking = useCallback(
    (e: React.MouseEvent) => {
      if (editable) {
        e.stopPropagation();
        e.preventDefault();
      }
    },
    [editable],
  );

  return (
    <div onClick={handleBlocking} className="d-flex align-items-center">
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
            size="sm"
            className="mw-250px me-3"
          />
          <Button
            as="button"
            loading={saving}
            variantStyle="light"
            variant="primary"
            size="sm"
            icon={<Icon name="Duotune/arr085" className="svg-icon-1" />}
            className="me-3"
            onClick={handleSaveNewName}
          />
          <Button
            as="button"
            variantStyle="light"
            size="sm"
            variant="danger"
            icon={<Icon name="Duotune/arr088" className="svg-icon-1" />}
            className="svg-icon-1"
            onClick={handleCancel}
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
  );
}

export default FileName;
