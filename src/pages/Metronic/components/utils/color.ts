import md5 from 'md5';

// http://stackoverflow.com/a/3943023/112731
// https://codepen.io/znak/pen/aOvMOd
/**
 * 根据当前的背景颜色确认适合背景色的文本颜色 (文本仅仅支持黑 和 白)
 * 场景: 适用于标签等用户自己定制颜色，文本颜色自适应
 */

const colorByBgColor = new Map();

const rgbRegex = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/;

const hex = (x: string) => ('0' + parseInt(x).toString(16)).slice(-2);

function convertRGBToHex(rgb: string): string {
  const bg = rgb.match(rgbRegex);
  if (!bg) {
    return '';
  }
  return ('#' + hex(bg[1]) + hex(bg[2]) + hex(bg[3])).toUpperCase();
}

const CACHE_ERROR = 'error';

export function generateBackgroundColor(name: string) {
  return '#' + md5(name).substr(0, 6);
}

/**
 * @param bgColor 字符串  #FFFBBC | rgb(222,33,44) 均可
 */
export function contrastTextColor(bgColor: string) {
  const cacheColor = colorByBgColor.get(bgColor);
  if (cacheColor) {
    if (cacheColor === CACHE_ERROR) {
      throw new Error('Invalid background color.' + bgColor);
    }
    return colorByBgColor.get(bgColor);
  }

  // 均转换为 hex 格式
  const backgroundHexColor = bgColor.length > 7 ? convertRGBToHex(bgColor) : bgColor;

  let _hex = backgroundHexColor;
  if (_hex.startsWith('#')) {
    _hex = _hex.substring(1);
  }
  if (_hex.length === 3) {
    _hex = [_hex[0], _hex[0], _hex[1], _hex[1], _hex[2], _hex[2]].join('');
  }

  if (_hex.length !== 6) {
    colorByBgColor.set(bgColor, CACHE_ERROR);
    throw new Error('Invalid background color.' + bgColor);
  }

  const r = parseInt(_hex.slice(0, 2), 16);
  const g = parseInt(_hex.slice(2, 4), 16);
  const b = parseInt(_hex.slice(4, 6), 16);

  if ([r, g, b].some((x) => Number.isNaN(x))) {
    colorByBgColor.set(bgColor, CACHE_ERROR);
    throw new Error('Invalid background color.' + bgColor);
  }

  const textColor = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000' : '#FFF';
  colorByBgColor.set(bgColor, textColor);
  return textColor;
}
