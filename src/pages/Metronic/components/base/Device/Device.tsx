import React from 'react';

import iPhoneX from './iPhoneX';
import iPhone8 from './iPhone8';
import iPhone8Plus from './iPhone8Plus';
import GalaxyNote8 from './GalaxyNote8';
import type { DeviceGeneralProps } from './typings';

import './style/devices.scss';

const allDevice = {
  iPhoneX,
  iPhone8,
  iPhone8Plus,
  GalaxyNote8,
};

type DeviceProps = DeviceGeneralProps & {
  model: 'iPhoneX' | 'iPhone8' | 'iPhone8Plus' | 'GalaxyNote8';
};

function Device({ model, ...props }: DeviceProps) {
  return React.createElement(allDevice[model], props);
}

Device.iPhoneX = iPhoneX;
Device.iPhone8 = iPhone8;
Device.iPhone8Plus = iPhone8Plus;
Device.GalaxyNote8 = GalaxyNote8;

export default Device;
