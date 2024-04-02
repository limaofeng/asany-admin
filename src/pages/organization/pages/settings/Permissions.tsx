import type { RouteComponentProps } from 'react-router-dom';

// import { usePermissionsConnectionQuery } from '../../hooks';

import GeneralList from '@/components/GeneralList';
import { ContentWrapper } from '@/layouts/components';

type PermissionsProps = RouteComponentProps<any>;

function Permissions(props: PermissionsProps) {
  console.log(props);
  return (
    <ContentWrapper
      className="page-organization-settings-permissions"
      footer={false}
    >
      <GeneralList
        {...props}
        hooks={{
          query: usePermissionsConnectionQuery,
        }}
        columns={[
          {
            key: 'id',
            title: '编码',
            sorter: true,
            width: '20%',
            // sortOrder: sorter.field === 'code' ? sorter.order : undefined,
          },
          {
            key: 'name',
            title: '名称',
            sorter: true,
            width: '30%',
            // sortOrder: sorter.field === 'name' ? sorter.order : undefined,
            // render(name, record) {
            //   return (
            //     <div>
            //       <Link className="text-gray-700" to={`/website/landing/stores/${record.id}`}>
            //         {name}
            //       </Link>
            //     </div>
            //   );
            // },
          },
          {
            key: 'description',
            title: '描述',
          },
          // {
          //   key: 'address.street',
          //   dataIndex: 'address.fullAddress',
          //   title: '门店地址',
          //   width: 120,
          //   sorter: true,
          //   sortOrder: sorter.field === 'location.street' ? sorter.order : undefined,
          // },
          // {
          //   key: 'createdAt',
          //   title: '创建时间',
          //   width: 150,
          //   sorter: true,
          //   sortOrder: sorter.field === 'createdAt' ? sorter.order : undefined,
          // },
          // {
          //   key: 'actions',
          //   title: '操作',
          //   width: 100,
          //   render: (_, record) => {
          //     return <Actions onDelete={handleDelete} history={props.history} data={record} />;
          //   },
          // },
        ]}
      />
    </ContentWrapper>
  );
}

export default Permissions;
