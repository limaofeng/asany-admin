import { useCallback, useEffect, useRef, useState } from 'react';

import classnames from 'classnames';

import { useCreateFolderMutation } from '../hooks';

import type { InputRef } from '@/components/Metronic';
import { Toast } from '@/components/Metronic';
import { Input, Modal } from '@/components/Metronic';
import { sleep } from '@/utils';
import type { FileObject } from '@/types';

type NewFolderModalProps = {
  parentFolder: string;
  visible: boolean;
  onCancel: () => void;
  onSuccess: (folder: FileObject) => void;
};

function NewFolderModal(props: NewFolderModalProps) {
  const { visible, onCancel, onSuccess, parentFolder } = props;

  const [value, setValue] = useState('未命名文件夹');
  const [disabled, setDisabled] = useState(false);

  const [newFolder, { loading }] = useCreateFolderMutation();

  const inputRef = useRef<InputRef>(null);

  const handleClose = useCallback(() => {
    onCancel();
  }, [onCancel]);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
    setDisabled(!e.target.value);
  }, []);

  const handleOk = useCallback(async () => {
    if (!value) {
      return;
    }
    try {
      const { data } = await newFolder({
        variables: {
          name: value,
          parentFolder,
        },
      });
      onCancel && onCancel();
      data?.folder && onSuccess(data.folder as any);
      Toast.success(`文件夹新增成功`, 2000, {
        progressBar: true,
        placement: 'bottom-start',
      });
    } catch (e: any) {
      await Toast.error(e.message, 2000, {
        progressBar: true,
      });
      await sleep(300);
      inputRef.current?.select();
    }
  }, [newFolder, onCancel, onSuccess, parentFolder, value]);

  const handlePressEnter = useCallback(() => {
    handleOk();
  }, [handleOk]);

  useEffect(() => {
    if (visible) {
      inputRef.current?.select();
    } else {
      setValue('未命名文件夹');
      setDisabled(false);
    }
  }, [visible]);

  return (
    <Modal
      centered
      visible={visible}
      dialogClassName="modal-dialog-small w-400px"
      onCancel={handleClose}
      onOk={handleOk}
      title="新建文件夹"
      closable={false}
      okButtonProps={{
        loading,
        className: classnames({ disabled }),
      }}
      headerClassName="border-bottom-0"
      bodyClassName="py-2"
      footerClassName="border-top-0"
    >
      <Input ref={inputRef} onPressEnter={handlePressEnter} onChange={handleChange} value={value} />
    </Modal>
  );
}

export default NewFolderModal;
