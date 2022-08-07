import axios from 'axios';

export const move2end = (ref: React.RefObject<HTMLDivElement>) => {
  const sel = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(ref.current!);
  range.collapse(false);
  sel?.removeAllRanges();
  sel?.addRange(range);
};

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

export const downloadFileUtil = (filePath: string, filename: string) => {
  axios
    .get(filePath, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      responseType: 'blob',
    })
    .then(function (response) {
      const blob = new Blob([response.data]);
      const fileName = filename;
      const linkNode = document.createElement('a');
      linkNode.download = fileName;
      linkNode.style.display = 'none';
      linkNode.href = URL.createObjectURL(blob);
      document.body.appendChild(linkNode);
      linkNode.click();
      URL.revokeObjectURL(linkNode.href);
      document.body.removeChild(linkNode);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const bytesToSize = (bytes: number) => {
  if (bytes === 0) return '0 B';
  const k = 1024,
    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));

  return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
};

export const switchFileIcon = (suffix: string) => {
  const imageSuffixs = ['jpeg', 'tiff', 'png', 'gif', 'jpg', 'gif'];
  const pptSuffixs = ['ppt', 'pptx'];
  const exelceSuffixs = ['xlsx', 'xls'];
  const worldSuffixs = ['doc', 'docx'];
  const zipSuffixs = ['rar', 'zip'];

  if (imageSuffixs.includes(suffix)) {
    return 'file_pic';
  } else if (pptSuffixs.includes(suffix)) {
    return 'file_ppt';
  } else if (exelceSuffixs.includes(suffix)) {
    return 'file_xslx';
  } else if (worldSuffixs.includes(suffix)) {
    return 'file_world';
  } else if (zipSuffixs.includes(suffix)) {
    return 'file_zip';
  } else if (suffix === 'pdf') {
    return 'file_pdf';
  } else {
    return 'file_unknow';
  }
};

export const contenteditableDivRange = () => {
  const selection = window.getSelection(),
    range = selection!.getRangeAt(0),
    br = document.createElement('br'),
    textNode = document.createTextNode('\u00a0'); //Passing " " directly will not end up being shown correctly
  range.deleteContents(); //required or not?
  range.insertNode(br);
  range.collapse(false);
  range.insertNode(textNode);
  range.selectNodeContents(textNode);
  selection!.removeAllRanges();
  selection!.addRange(range);
  document.execCommand('delete');
};

export const base64toFile = (base64Str: string) => {
  const arr = base64Str.split(','),
    fileType = arr[0].match(/:(.*?);/)![1],
    bstr = atob(arr[1]);

  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], `screenshot${Date.now()}.png`, {
    type: fileType,
  });
};
