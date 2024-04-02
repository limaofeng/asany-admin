import { useCallback, useRef } from 'react';

import { Modal, Toast } from '@/metronic';
import { delay } from '@/utils';

type DeleteOptions = {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  width?: string;
};

function useDelete(options: DeleteOptions, execute: () => Promise<void>) {
  const deleting = useRef(false);

  const onDelete = useCallback(async () => {
    const { width } = options;
    const result = await Modal.confirm({
      ...options,
      width,
      okText: '删 除',
      okClassName: 'btn-danger',
      allowOutsideClick: () => {
        return !deleting.current;
      },
      preConfirm: async () => {
        deleting.current = true;
        try {
          const okButton = document.querySelector('.swal2-confirm')!;
          okButton.textContent = '删除中...';
          const spinner = document.createElement('span');
          spinner.classList.add(
            'spinner-border-sm',
            'ms-2',
            'spinner-border',
            'align-middle',
          );
          okButton.appendChild(spinner);
          const _result = await delay(execute(), 350);
          console.log(_result);
        } finally {
          deleting.current = false;
        }
      },
    });
    if (!result.isConfirmed) {
      return false;
    }
    Toast.success('删除成功', 2000, {
      placement: 'top-center',
      progressBar: true,
    });
    return true;
  }, [execute, options]);

  return [onDelete];
}

export default useDelete;
