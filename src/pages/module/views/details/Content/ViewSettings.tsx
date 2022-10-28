import { useCallback, useEffect } from 'react';

import { useSketch } from '@asany/sunmao';
import { isEqual } from 'lodash';

import { Drawer } from '@/metronic';

type ViewSettingsProps = {
  visible: boolean;
  onClose: () => void;
};

function ViewSettings(props: ViewSettingsProps) {
  const { visible, onClose } = props;

  const sketch = useSketch();

  const block = sketch.useSelector(
    'root',
    (s) => {
      console.log('xxx', s.blocks);
      const x = s.blocks?.find((b) => b.key == 'list');
      console.log('xxx', s, x);
      return x;
    },
    isEqual,
  );

  console.log('block', block);

  useEffect(() => {
    /*   const block = sketch.getBlock('root:list');
    console.log('sketch', block); */
  }, [sketch]);

  const handleClick = useCallback(() => {
    /*     const block = sketch.getBlock('root:list');
    console.log('sketch', block); */
  }, []);

  return (
    <Drawer
      title="视图设置"
      placement="right"
      width={280}
      mask={false}
      onClose={onClose}
      visible={visible}
    >
      <div>
        <span onClick={handleClick}>配置字段</span>
      </div>
      <ul>
        <li>11111111</li>
        <li>22222222</li>
        <li>33333333</li>
        <li>44444444</li>
        <li>55555555</li>
        <li>66666666</li>
        <li>77777777</li>
      </ul>
    </Drawer>
  );
}

export default ViewSettings;
