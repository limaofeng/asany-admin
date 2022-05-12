import { useEffect, useState } from 'react';

import { Card, RegionPicker } from '@/metronic';
import type { AreaValueType } from '@/metronic/typings';
import useAreas from '@/metronic/hooks/useAreas';
import OverviewFlow from '@/components/OverviewFlow';

const NoFoundPage: React.FC = () => {
  // const [value, setValue] = useState<string | string[]>(['310', '310104', '310104004']);
  const [value, setValue] = useState<AreaValueType>({
    province: undefined,
    city: '310',
    district: '310104',
    street: '310104004',
  });

  const [data, { loadRegion }] = useAreas();

  // const loadData = async (data) => {
  //   let _item;
  //   if (data.length) {
  //     _item = data[0];
  //   }

  //   while (!!_item) {
  //     console.log(_item);
  //     if (!_item.getChildren) {
  //       debugger;
  //     }
  //     const xchildren = await _item.getChildren();
  //     console.log('__xxx__', _item.code, xchildren);
  //     if (xchildren && xchildren.length) {
  //       _item = xchildren[0];
  //     } else {
  //       _item = null;
  //     }
  //   }
  // };

  useEffect(() => {
    console.log('xxx - 1', data);

    loadRegion('310104004');
    // loadData(data);
  }, [data, loadRegion]);

  console.log(data);

  return (
    <Card flush className="mt-6 mt-xl-9 h-800px" headerClassName="mt-5">
      <OverviewFlow />
      <br />
      <RegionPicker
        resultType="object"
        value={value}
        onChange={setValue}
        className="w-300px"
        placeholder="--请选择--"
      />
    </Card>
  );
};

export default NoFoundPage;
