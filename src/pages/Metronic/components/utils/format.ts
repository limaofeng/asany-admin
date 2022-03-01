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
