export function toPlainText(html: string) {
  //定义script的正则表达式，去除js可以防止注入
  const scriptRegex = '<script[^>]*?>[\\s\\S]*?<\\/script>';
  //定义style的正则表达式，去除style样式，防止css代码过多时只截取到css样式代码
  const styleRegex = '<style[^>]*?>[\\s\\S]*?<\\/style>';
  //定义HTML标签的正则表达式，去除标签，只提取文字内容
  const htmlRegex = '<[^>]+>';
  //定义空格,回车,换行符,制表符
  const spaceRegex = '\\s*|\t|\r|\n';
  // 过滤script标签
  let summary = html.replaceAll(new RegExp(scriptRegex, 'g'), '');
  // 过滤style标签
  summary = summary.replaceAll(new RegExp(styleRegex, 'g'), '');
  // 过滤html标签
  summary = summary.replaceAll(new RegExp(htmlRegex, 'g'), '');
  // 过滤空格等
  summary = summary.replaceAll(new RegExp(spaceRegex, 'g'), '');

  if (summary == html) {
    return html;
  }

  return summary.trim(); // 返回文本字符串
}
/**
 * 对文件大小进行简单的格式化（xxx bytes、xxx KB、xxx MB）
 * @param {Number/String} size 要格式化的数值
 * @return {String} 已格式化的值
 */
export function fileSize(size: number) {
  if (size < 1024) {
    return `${size} bytes`;
  } else if (size < 1048576) {
    return `${Math.round((size * 10) / 1024) / 10} KB`;
  }
  return `${Math.round((size * 10) / 1048576) / 10} MB`;
}