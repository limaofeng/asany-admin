import { useCallback, useEffect, useState } from 'react';

import classnames from 'classnames';

import { Button, Form, Modal } from '@/metronic';
import { useForm } from '@/metronic/Form/Form';

type AdvancedSearchProps = {
  title?: string;
  children: React.ReactNode;
  values?: any;
  onSearch: (values: any) => void;
};

function AdvancedSearch(props: AdvancedSearchProps) {
  const { title = '高级查询', children, onSearch } = props;

  const form = useForm();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    visible && form.setFieldsValue(props.values);
  }, [visible]);

  const handleSwitchShowAndHide = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  const handleReset = useCallback(async () => {
    form.resetFields();
    const values = form.getFieldsValue();
    await onSearch(values);
    setVisible(false);
  }, []);

  const handleCancel = useCallback(() => {
    setVisible(false);
  }, [visible]);

  const handleSearch = useCallback(async () => {
    const values = await form.validateFields();
    await onSearch(values);
    setVisible(false);
  }, []);

  const isFieldsTouched = Object.keys(props.values).some(
    (key) => props.values[key] !== undefined,
  );

  return (
    <>
      <Button
        className={classnames('d-inline-flex align-items-center', {
          'btn-text-primary': isFieldsTouched,
        })}
        onClick={handleSwitchShowAndHide}
        variant={false}
      >
        {isFieldsTouched ? '搜索条件已应用' : '高级搜索'}
        <i
          className={classnames('fs-2 ki-duotone ms-1', {
            ['ki-filter']: !visible && !isFieldsTouched,
            ['ki-filter-edit']: visible,
            ['ki-filter-tick']: !visible && isFieldsTouched,
          })}
        >
          <span className="path1"></span>
          <span
            className={classnames('path2', {
              'text-primary': !visible && isFieldsTouched,
            })}
          ></span>
        </i>
      </Button>
      <Modal
        title={title}
        dialogStyle={{
          minWidth: `calc(860px + 3.5rem)`,
        }}
        visible={visible}
        centered
        onCancel={handleCancel}
      >
        <Modal.Body>
          <Form form={form} component={false}>
            {children}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <Button onClick={handleReset} className="me-2" variant="secondary">
              重置查询
            </Button>
            <Button onClick={handleSearch} variant="primary">
              执行查询
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AdvancedSearch;
