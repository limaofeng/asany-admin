import { createPopper } from '@popperjs/core';

import * as KTUtil from './KTUtil';

// Init dropdown popper(new)
export function initDropdownPopper(item: any, sub: any, placement: string) {
  // Setup popper instance
  let reference;
  const attach = getItemOption(item, 'attach');

  if (attach) {
    if (attach === 'parent') {
      reference = item.parentNode;
    } else {
      reference = document.querySelector(attach);
    }
  } else {
    reference = item;
  }

  const popper = createPopper(reference, sub, _getDropdownPopperConfig(item, placement) as any);
  KTUtil.data(item).set('popper', popper);
}

export function destroyDropdownPopper(item: any) {
  if (KTUtil.data(item).has('popper') === true) {
    KTUtil.data(item).get('popper').destroy();
    KTUtil.data(item).remove('popper');
  }
}

export function _getDropdownPopperConfig(item: any, placement: string) {
  // Offset
  const offsetValue = getItemOption(item, 'offset');
  const offset = offsetValue ? offsetValue.split(',') : [];

  // Strategy
  const strategy = getItemOption(item, 'overflow') === true ? 'absolute' : 'fixed';

  const altAxis = getItemOption(item, 'flip') !== false ? true : false;

  // console.log('offset', offset, strategy);

  const popperConfig = {
    placement: placement,
    strategy: strategy,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: offset.map((n: any) => parseInt(n)),
        },
      },
      {
        name: 'preventOverflow',
        options: {
          altAxis: altAxis,
        },
      },
      {
        name: 'flip',
        options: {
          flipVariations: false,
        },
      },
    ],
  };

  return popperConfig;
}

export function getItemOption(item: any, name: string) {
  let attr;
  let value = null;

  if (item && item.hasAttribute('data-kt-menu-' + name)) {
    attr = item.getAttribute('data-kt-menu-' + name);
    value = KTUtil.getResponsiveValue(attr);

    if (value !== null && String(value) === 'true') {
      value = true;
    } else if (value !== null && String(value) === 'false') {
      value = false;
    }
  }

  return value;
}
