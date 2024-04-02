export const getRowKey = (
  record: any,
  rowKey: string | ((record: any) => string),
) => {
  if (!record) {
    return undefined;
  }
  if (typeof rowKey == 'function') {
    return rowKey(record);
  }
  return record[rowKey];
};
