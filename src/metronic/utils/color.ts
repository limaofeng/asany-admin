import md5 from 'md5';

// http://stackoverflow.com/a/3943023/112731
// https://codepen.io/znak/pen/aOvMOd
/**
 * 根据当前的背景颜色确认适合背景色的文本颜色 (文本仅仅支持黑 和 白)
 * 场景: 适用于标签等用户自己定制颜色，文本颜色自适应
 */

const colorByBgColor = new Map();

const rgbRegex = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/;

const hex_convert = (x: string) => ('0' + parseInt(x).toString(16)).slice(-2);

function convertRGBToHex(rgb: string): string {
  const bg = rgb.match(rgbRegex);
  if (!bg) {
    return '';
  }
  return ('#' + hex_convert(bg[1]) + hex_convert(bg[2]) + hex_convert(bg[3])).toUpperCase();
}

const CACHE_ERROR = 'error';

export function generateBackgroundColor(name: string) {
  return '#' + md5(name).substring(0, 6);
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

//RGB颜色转化为16进制颜色
function colorHex(str: string) {
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  const that = str;
  if (/^(rgb|RGB)/.test(that)) {
    const aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
    let strHex = '#';
    for (let i = 0; i < aColor.length; i++) {
      let hex = Number(aColor[i]).toString(16);
      if (hex === '0') {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = that;
    }
    return strHex;
  } else if (reg.test(that)) {
    const aNum = that.replace(/#/, '').split('');
    if (aNum.length === 6) {
      return that;
    } else if (aNum.length === 3) {
      let numHex = '#';
      for (let i = 0; i < aNum.length; i += 1) {
        numHex += aNum[i] + aNum[i];
      }
      return numHex;
    }
  } else {
    return that;
  }
  return that;
}

/**
 * 16进制颜色转化为RGB颜色
 * @param str 颜色
 * @returns
 */
function colorRgb(str: string) {
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  let sColor = str.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = '#';
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    const sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
    }
    return 'rgb(' + sColorChange.join(',') + ')';
  } else {
    return sColor;
  }
}

function transformColor(_col: string, amt: number) {
  let usePound = false;
  let col = _col;
  if (col[0] == '#') {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (
    (usePound ? '#' : '') + String('000000' + (g | (b << 8) | (r << 16)).toString(16)).slice(-6)
  );
}

//判断是否为亮色
export function getContrastYIQ(hexcolor: string) {
  const colorrgb = colorRgb(hexcolor);
  const colors = colorrgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)!;
  const red = parseInt(colors[1]);
  const green = parseInt(colors[2]);
  const blue = parseInt(colors[3]);
  let brightness;
  brightness = red * 299 + green * 587 + blue * 114;
  brightness = brightness / 255000;
  if (brightness >= 0.5) {
    return 'light';
  } else {
    return 'dark';
  }
}

export function lightenColor(color: string, amt: number = 40) {
  return transformColor(colorHex(color), amt);
}

export function darkenColor(color: string, amt: number = 40) {
  return transformColor(colorHex(color), -amt);
}
