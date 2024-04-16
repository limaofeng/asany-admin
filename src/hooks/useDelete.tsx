import { useCallback, useRef } from 'react';

import { Modal, Toast } from '@/metronic';
import { delay } from '@/utils';

type DeleteOptions<T> = {
  title?: string | React.ReactNode | ((data: T) => string | React.ReactNode);
  content?: string | React.ReactNode | ((data: T) => string | React.ReactNode);
  width?: string;
};

function fillTemplate(template: string, data: any) {
  return template.replace(/{(\w+)}/g, (match, key) => {
    return data[key] !== undefined ? data[key] : match;
  });
}

function useDelete<T = any>(
  options: DeleteOptions<T>,
  execute: (data?: T) => Promise<void>,
) {
  const deleting = useRef(false);

  const onDelete = useCallback(
    async (data?: T) => {
      const { width } = options;
      let { title, content } = options;

      if (data) {
        if (typeof title === 'string') {
          title = fillTemplate(title, data);
        }
        if (typeof content === 'string') {
          content = fillTemplate(content, data);
        }
        if (typeof title === 'function') {
          title = title(data);
        }
        if (typeof content === 'function') {
          content = content(data);
        }
      }

      const result = await Modal.confirm({
        ...options,
        title: title as any,
        content: content as any,
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
            const _result = await delay(execute(data), 350);
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
    },
    [execute, options],
  );

  return [onDelete];
}

export default useDelete;
