type PlainOptions = {
  script?: boolean;
  style?: boolean;
  text?: 'pure' | 'format';
};

export function toPlainText(html: string, options?: PlainOptions) {
  const { script = true, style = true, text = 'pure' } = options || {};
  //定义script的正则表达式，去除js可以防止注入
  const scriptRegex = '<script[^>]*?>[\\s\\S]*?<\\/script>';
  //定义style的正则表达式，去除style样式，防止css代码过多时只截取到css样式代码
  const styleRegex = '<style[^>]*?>[\\s\\S]*?<\\/style>';
  //定义HTML标签的正则表达式，去除标签，只提取文字内容
  const htmlRegex = '<[^>]+>';
  //定义空格,回车,换行符,制表符
  const spaceRegex = '\\s*|\t|\r|\n';
  // 过滤script标签
  let summary = !script ? html : html.replaceAll(new RegExp(scriptRegex, 'g'), '');
  // 过滤style标签
  summary = !style ? html : summary.replaceAll(new RegExp(styleRegex, 'g'), '');
  // 过滤html标签
  summary = summary.replaceAll(new RegExp(htmlRegex, 'g'), (str) => {
    if (text == 'pure') {
      return '';
    }
    if (str === '</p>') {
      return '\n';
    }
    return '';
  });
  // 过滤空格等
  summary = text == 'format' ? summary : summary.replaceAll(new RegExp(spaceRegex, 'g'), '');

  return text == 'format' ? summary : summary.trim(); // 返回文本字符串
}

export function toHtml(text: string) {
  return text
    .split('\n')
    .map((line) => (line ? `<p>${line}</p>` : '<p><br/></p>'))
    .join('');
}

const FILE_UNITS = ['bytes', 'KB', 'MB', 'GB', 'TB'];

type FILE_UNIT_OF_TYPE = 'bytes' | 'KB' | 'MB' | 'GB' | 'TB';

export function fileSizeToBytes(size: number, unit: FILE_UNIT_OF_TYPE) {
  const index = FILE_UNITS.findIndex((item) => item == unit);
  return size * Math.pow(1024, index);
}

/**
 * 对文件大小进行简单的格式化（xxx bytes、xxx KB、xxx MB）
 * @param {Number/String} size 要格式化的数值
 * @return {String} 已格式化的值
 */
export function fileSize(length: number) {
  let i = 0,
    size = length;
  while (size >= 1024 && i < 4) {
    size /= 1024;
    i++;
  }
  return Math.ceil(size) + ' ' + FILE_UNITS[i];
}
