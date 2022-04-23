import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import Icon from '@asany/icons';
import classnames from 'classnames';

import { useRenameFileMutation } from '../hooks';

import type { InputRef } from '@/components/Metronic';
import { Toast } from '@/components/Metronic';
import { Button, Input, Symbol } from '@/components/Metronic';
import type { FileObject } from '@/types';
import { delay, sleep } from '@/utils';

type FileNameProps = {
  onClick: (file: FileObject) => void;
  onCancelRename: () => void;
  onSuccess: (file: FileObject) => void;
  editable: boolean;
  data: FileObject;
};

function FileName(props: FileNameProps) {
  const { data, editable, onClick, onCancelRename, onSuccess } = props;

  const inputRef = useRef<InputRef>(null);

  const [saving, setSaving] = useState(false);
  const [name, setName] = useState(data.name);

  const [rename] = useRenameFileMutation();

  const handleChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleSaveNewName = useCallback(
    async (e: React.MouseEvent) => {
      e.stopPropagation();
      try {
        setSaving(true);
        const { data: rdata } = await delay(
          rename({
            variables: {
              id: data.id,
              name: name,
            },
          }),
          350,
        );
        onSuccess(rdata.file);
        await sleep(350);
        setSaving(false);
        onCancelRename();
      } catch (_e: any) {
        setSaving(false);
        await Toast.error(_e.message, 200000, {
          progressBar: true,
          placement: 'middle-center',
        });
        await sleep(300);
        inputRef.current?.select();
      }
    },
    [data.id, name, onCancelRename, onSuccess, rename],
  );

  const handlePressEnter = useCallback(
    (e: React.KeyboardEvent) => {
      e.preventDefault();
      handleSaveNewName(e as any);
    },
    [handleSaveNewName],
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
    if (!editable) {
      return;
    }
    inputRef.current?.select(
      0,
      data.name.length - (data.extension ? data.extension.length + 1 : 0),
    );
  }, [data.extension, data.name, editable]);

  const handleBlocking = useCallback(
    (e: React.MouseEvent) => {
      if (editable) {
        e.stopPropagation();
        e.preventDefault();
      }
    },
    [editable],
  );

  const isImageOrVideo = useMemo(() => {
    return data.mimeType?.startsWith('image/') || data.mimeType?.startsWith('video/');
  }, [data.mimeType]);

  return (
    <div
      onClick={handleBlocking}
      className={classnames('d-flex align-items-center', { 'no-selecto-drag': editable })}
    >
      <div className="title-icon-container position-relative me-1 d-flex align-items-center justify-content-center">
        {isImageOrVideo ? (
          <Symbol
            alt={
              <Icon
                name={`Duotune/${data.isDirectory ? 'fil012' : 'fil003'}`}
                className="svg-icon-2x svg-icon-primary"
              />
            }
            src={process.env.API_URL + `/thumbnail/${data.id}?size=120x120`}
          />
        ) : (
          <Icon
            name={`Duotune/${data.isDirectory ? 'fil012' : 'fil003'}`}
            className="svg-icon-2x svg-icon-primary"
          />
        )}
        {data.starred && (
          <Icon name="Bootstrap/star-fill" className="position-absolute starred-flag" />
        )}
      </div>
      {editable ? (
        <>
          <Input
            ref={inputRef}
            value={name}
            onChange={handleChange}
            onPressEnter={handlePressEnter}
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
          className="text-gray-800 text-hover-primary no-selecto-drag"
          onClick={handleClick}
          href={data.isDirectory ? `/drive/folders/${data.id}` : `/preview/${data.id}`}
        >
          {data.name}
        </a>
      )}
    </div>
  );
}

export default FileName;
