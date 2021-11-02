import React from 'react';

import Icon from '@asany/icons';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import type { FileObject, Storage } from '@/types';

type FolderPathProps = {
  storage: Storage;
  paths: FileObject[];
};

function FolderPath(props: FolderPathProps) {
  const { storage, paths } = props;
  return (
    <div className="badge badge-lg badge-light-primary">
      <div className="d-flex align-items-center flex-wrap">
        {paths.map((item, i) => {
          const isFirst = i == 0;
          const isLast = i == paths.length - 1;
          return (
            <React.Fragment>
              <Icon
                name={isFirst ? 'Duotune/abs039' : 'Duotune/arr071'}
                className={classnames('svg-icon-2 svg-icon-primary', {
                  'mx-1': isFirst,
                  'me-3': !isFirst,
                })}
              />
              {isLast ? (
                item.name
              ) : (
                <Link to={`/storages/${storage.id}${item.path}`}>{item.name}</Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default FolderPath;
