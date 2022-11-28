import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { useBlock } from '@asany/sunmao';
import type { ISortableItem, SortableItemProps, SortableItemRefObject } from '@asany/sortable';
import { dragPreview } from '@asany/sortable';
import Sortable from '@asany/sortable';
import classnames from 'classnames';

import useConnection from '../hooks/useConnection';

import { AdvancedSearch, Controls, Filter } from '@/components';
import { Button, Card, Checkbox, Input, Popover, Table } from '@/metronic';
import type { TableColumn } from '@/metronic/Table/typings';
import { useModelWithEndpointsLazyQuery } from '@/pages/module/hooks';
import type { ModelField } from '@/types';

import '../style/DefaultListView.scss';

type DefaultListViewTableColumn = TableColumn<any> & { checked: boolean; source: ModelField };

type ConfigureColumnsProps = {
  // allFields: ModelField[];
  columns: DefaultListViewTableColumn[];
  onChange: (cols: DefaultListViewTableColumn[]) => void;
};

type ModelColumnProps = SortableItemProps<any> & {
  onCheck: (id: string, checked: boolean) => void;
};

const ModelColumn = React.forwardRef(function (
  props: ModelColumnProps,
  ref: SortableItemRefObject,
) {
  const { drag, style, animated, className, onCheck } = props;

  const data = props.data.source as DefaultListViewTableColumn;

  const handleCheck = useCallback(() => {
    onCheck(data.key!, !data.checked);
  }, [data.checked, data.key, onCheck]);

  return (
    <div {...animated} style={style} ref={ref} className={classnames('model-column', className)}>
      <div ref={drag} className="column-item-drag-handle">
        <svg viewBox="0 0.5 9 13" focusable="false">
          <g fillRule="evenodd" transform="translate(0 .5)">
            <circle cx="1.5" cy="1.5" r="1.5" />
            <circle cx="7.5" cy="1.5" r="1.5" />
            <circle cx="1.5" cy="6.5" r="1.5" />
            <circle cx="7.5" cy="6.5" r="1.5" />
            <circle cx="1.5" cy="11.5" r="1.5" />
            <circle cx="7.5" cy="11.5" r="1.5" />
          </g>
        </svg>
      </div>
      <div className="column-item-content">
        <Checkbox onChange={handleCheck} checked={data.checked} label={data.title as any} />
      </div>
    </div>
  );
});

function ConfigureColumns(props: ConfigureColumnsProps) {
  const { columns, onChange } = props;

  const state = useRef({ columns });
  state.current.columns = columns;

  const container = useRef<HTMLDivElement>(null);

  const handleChange = useCallback(
    (value: ISortableItem[]) => {
      onChange(value.map((item) => state.current.columns.find((c) => c.key == item.id)!));
    },
    [onChange],
  );

  const handleCheck = useCallback(
    (id: string, checked: boolean) => {
      onChange(
        state.current.columns.map((c) => {
          if (c.key == id) {
            return { ...c, checked };
          }
          return c;
        }),
      );
    },
    [onChange],
  );

  return (
    <div ref={container}>
      <Sortable
        onChange={handleChange}
        tag="ul"
        className="configure-columns"
        accept={['default']}
        items={columns.map((item) => ({
          source: item,
          type: 'default',
          name: item.title,
          id: item.key!,
        }))}
        itemRender={React.createElement(ModelColumn, {
          onCheck: handleCheck,
        } as any)}
        preview={{
          render: dragPreview(React.createElement(ModelColumn)),
          axisLocked: true,
          offset: [-4, 0],
          container: document.body,
        }}
      />
    </div>
  );
}

function DefaultListView() {
  const {
    props: blockProps,
    Provider,
    update,
  } = useBlock<{ model: string; title: string; fields: any[] }>({
    key: 'list',
    icon: '',
    title: '列表',
    props: {
      model: '',
      title: 'Sales This Months',
      fields: [],
    },
    customizer: {
      fields: [
        {
          name: 'model',
          type: 'String',
        },
        {
          name: 'fields',
          type: 'JSON',
          label: '显示字段',
          multiple: true,
        },
        {
          name: 'subtitle',
          type: 'String',
          label: '副标题',
        },
        {
          name: 'statistics',
          type: 'String',
          label: '统计',
        },
      ],
    },
  });

  const [loadModel, { data: modelData }] = useModelWithEndpointsLazyQuery({
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (!blockProps.model) {
      return;
    }
    loadModel({
      variables: {
        id: blockProps.model,
      },
    });
  }, [blockProps.model, loadModel]);

  const allColumns: DefaultListViewTableColumn[] = useMemo(() => {
    if (!modelData?.model) {
      return [];
    }
    return modelData.model.fields
      .map((f) => {
        const colIndex = blockProps.fields.findIndex((c: any) => c.key == f.id);
        return {
          key: f.id,
          title: f.name,
          dataIndex: f.code,
          source: f as ModelField,
          index: colIndex != -1 ? colIndex : f.index,
          checked: colIndex != -1 ? blockProps.fields[colIndex].checked : false,
        };
      })
      .sort((l, r) => l.index - r.index);
  }, [blockProps.fields, modelData?.model]);

  const fields = useMemo(() => {
    if (!allColumns.length) {
      return [];
    }
    return allColumns.filter((item) => item.checked).map((item) => item.source);
  }, [allColumns]);

  const [, { data, loading, error }] = useConnection(modelData?.model as any, fields);

  console.log('loading', loading, error);

  const columns: TableColumn<any>[] = useMemo(() => {
    if (!fields.length) {
      return [];
    }
    return fields.map((f) => ({
      key: f.code,
      title: f.name,
    }));
  }, [fields]);

  const handleDeleteInBatch = useCallback(
    (selectedRowKeys: string[]) => async () => {
      console.log('selectedRowKeys', selectedRowKeys);
    },
    [],
  );

  const tableToolbar = useMemo(() => {
    return (selectedRowKeys: string[]) => {
      return (
        <div>
          <Button color="success" onClick={handleDeleteInBatch(selectedRowKeys)} variant={false}>
            批量删除
          </Button>
        </div>
      );
    };
  }, [handleDeleteInBatch]);

  const handleChangeColumns = useCallback(
    (cols: DefaultListViewTableColumn[]) => {
      console.log('columns', 'change', cols);
      update('fields', cols);
    },
    [update],
  );

  const [layout, setLayout] = useState<'card' | 'table'>('table');

  const handleReLayout = useCallback((_layout: 'card' | 'table') => {
    setLayout(_layout);
  }, []);

  const model = modelData?.model;

  console.log('columns', allColumns, columns, data);

  return (
    <Provider>
      <AdvancedSearch />
      <div className="d-flex flex-wrap pb-7">
        <div className="d-flex flex-row-fluid flex-wrap align-items-center">
          <h3 className="fw-bolder me-5">
            {model?.name} ({data?.pagination?.totalCount})
          </h3>
          <Input.Search
            placeholder="搜索"
            // onSearch={handleSearch}
            // defaultValue={variables.filter?.name_contains}
            className="border-body bg-body w-250px"
          />
        </div>
        <Controls layout={layout} onLayout={handleReLayout}>
          <div className="d-flex my-0">
            <Filter />
            <Button
            // as={Link} to={`${baseUrl}/new`}
            >
              新建海报
            </Button>
          </div>
        </Controls>

        <Popover
          offset={[0, 0]}
          placement="bottom-end"
          content={<ConfigureColumns columns={allColumns} onChange={handleChangeColumns} />}
          overlayClassName="overlay-no-arrow configure-columns-popover"
        >
          <Button variant={false}>配置字段</Button>
        </Popover>
      </div>
      <Card flush bodyClassName="pt-3">
        {/* <div className="d-flex">
          <div className="flex-row-fluid">x</div>
        </div> */}
        {!!columns.length && (
          <Table
            columns={columns}
            rowKey="id"
            rowSelection={{
              type: 'checkbox',
              renderTitle: (size) => (
                <>
                  已选中<span className="mx-2">{size}</span>个活动
                </>
              ),
              toolbar: tableToolbar,
            }}
            dataSource={[]}
            noRowsRenderer={() => <div>没有数据</div>}
          />
        )}
      </Card>
    </Provider>
  );
}

export default DefaultListView;
