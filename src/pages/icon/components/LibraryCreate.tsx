import { useCallback, useRef, useState } from 'react';

import classnames from 'classnames';
import Icon from '@asany/icons';

import { useCreateIconLibraryMutation } from '../hooks';

import { Card, Input, Spin } from '@/metronic';
import type { InputRef } from '@/metronic/Input';

type LibraryCreateProps = {
  onCreated: () => void;
};

function LibraryCreate(props: LibraryCreateProps) {
  const input = useRef<InputRef>(null);
  const [name, setName] = useState<string>();
  const [active, setActive] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);

  const [createLibrary] = useCreateIconLibraryMutation();

  const handleChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleFocus = useCallback(() => {
    setActive(true);
  }, []);

  const handleBlur = useCallback((e) => {
    setActive(!!e.target.value);
  }, []);

  const handleCancel = useCallback(() => {
    input.current?.blur();
    setName('');
    setActive(false);
    setLoading(false);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!name) {
      return;
    }
    try {
      setLoading(true);
      await createLibrary({ variables: { name } });
      await props.onCreated();
    } finally {
      handleCancel();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  console.log('name', name);

  return (
    <Card className="library-container library-create">
      <div className={classnames('library-create-form', { active })}>
        <Input
          ref={input}
          value={name}
          onChange={handleChange}
          className="library-name-input input-rimless"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onPressEnter={handleSubmit}
          placeholder="输入图标库名称"
        />
        <Spin spinning={loading} size="small">
          <div className="library-action-buttons">
            <a className="name-editing-cancel" onClick={handleCancel}>
              <Icon name="Duotune/arr088" className="svg-icon-2x" />
            </a>
            <a className="name-editing-ok" onClick={active ? handleSubmit : undefined}>
              <Icon name="Duotune/arr085" className="svg-icon-2x" />
            </a>
          </div>
        </Spin>
      </div>
    </Card>
  );
}

export default LibraryCreate;
