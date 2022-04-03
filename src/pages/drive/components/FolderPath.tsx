import React, { useCallback } from 'react';

import Icon from '@asany/icons';
import classnames from 'classnames';

import type { FileObject } from '@/types';

type FolderPathProps = {
  onClick: (item: FileObject) => void;
  paths: FileObject[];
};

function FolderPath(props: FolderPathProps) {
  const { paths, onClick } = props;
  console.log('FolderPath', paths);

  const handleClick = useCallback(
    (item: FileObject) => (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onClick(item);
    },
    [onClick],
  );

  return (
    <div className="folder-path badge badge-lg badge-white">
      <div className="d-flex align-items-center flex-wrap">
        {paths.map((item, i) => {
          const isFirst = i == 0;
          const isLast = i == paths.length - 1;
          return (
            <React.Fragment key={item.id}>
              {!isFirst && (
                <Icon
                  name={isFirst ? 'Duotune/abs039' : 'Duotune/arr071'}
                  className={classnames('svg-icon-2 svg-icon-primary', {
                    'mx-1': !isFirst,
                    'me-3': isFirst,
                  })}
                />
              )}
              {isLast ? (
                item.name
              ) : (
                <a
                  href={i == 0 ? `/drive/my-drive` : `/drive/folders/${item.id}`}
                  onClick={handleClick(item)}
                >
                  {item.name}
                </a>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default FolderPath;
