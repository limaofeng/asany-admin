import { useBlock } from '@asany/sunmao';

import { Controls } from '@/components';
import { Button, Card, Input, Table } from '@/metronic';
import type { TableColumn } from '@/metronic/Table/typings';

function DefaultListView() {
  const columns: TableColumn<any>[] = [
    {
      title: '名称',
    },
  ];

  const { props: blockProps, Provider } = useBlock({
    key: 'list',
    icon: '',
    title: '列表',
    props: {
      title: 'Sales This Months',
      fields: [{}, {}],
    },
    customizer: {
      fields: [
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

  console.log('blockProps', blockProps);

  return (
    <Provider>
      <div className="d-flex flex-wrap flex-stack pb-7">
        <div className="d-flex flex-wrap align-items-center">
          <h3 className="fw-bolder me-5">xx (0)</h3>
          <Input.Search
            placeholder="搜索"
            // onSearch={handleSearch}
            // defaultValue={variables.filter?.name_contains}
            className="border-body bg-body w-250px"
          />
        </div>
        <Controls>
          <div className="d-flex my-0">
            <Button
            // as={Link} to={`${baseUrl}/new`}
            >
              新建海报
            </Button>
          </div>
        </Controls>
      </div>
      <Card className="xx">
        <Table columns={columns} dataSource={[]} noRowsRenderer={() => <div>没有数据</div>} />
      </Card>
    </Provider>
  );
}

export default DefaultListView;
