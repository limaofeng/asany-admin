export const formatDate = (timestamp: number) => {
  const now = new Date(timestamp);
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = now.getHours();
  let minute: any = now.getMinutes();
  if (minute.toString().length === 1) minute = '0' + minute;
  let second: any = now.getSeconds();
  if (second.toString().length === 1) second = '0' + second;
  const str1 = year + '-' + month + '-' + date;
  // const str2 = hour + ":" + minute + ":" + second
  const str2 = hour + ':' + minute;
  return [year, month, date, str1, str2];
};
