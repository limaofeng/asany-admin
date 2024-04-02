import $ from 'jquery';

export function isDoubleClick(ele: HTMLElement) {
  const clickNumber = parseInt($(ele).data('click-number') || 0) + 1;
  if (clickNumber == 2) {
    clearTimeout($(ele).data('timer-reset'));
    $(ele).data('click-number', 0);
    return true;
  }
  const timer = setTimeout(function () {
    $(ele).data('click-number', 0);
    clearTimeout(timer);
  }, 500);
  $(ele).data('click-number', clickNumber).data('timer-reset', timer);
  return false;
}

export function getDropPosition(
  rect: any,
  node: any,
  drop: any,
  indicator: number,
  index: number,
) {
  const interval = rect.height / 3 / 2;
  const inner =
    indicator < interval &&
    indicator > -interval &&
    drop?.parentKey !== node.id;
  if (inner) {
    return index;
  }
  if (indicator > 0) {
    return index + 1;
  }
  if (indicator < 0) {
    return index - 1;
  }
  return NaN;
}
