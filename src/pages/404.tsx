import { useState } from 'react';

import Card from '@/metronic/Card';
import AreaPicker from '@/metronic/AreaPicker';

const NoFoundPage: React.FC = () => {
  const [value, setValue] = useState<string | string[]>(['31', '310104', '310104004']);

  return (
    <Card flush className="mt-6 mt-xl-9" headerClassName="mt-5">
      value = {typeof value == 'string' ? value : value.join(',')} 11122
      <br />
      <AreaPicker value={value} onChange={setValue} className="w-300px" placeholder="--请选择--" />
    </Card>
  );
};

export default NoFoundPage;
