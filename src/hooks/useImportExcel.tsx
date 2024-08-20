import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import saveAs from 'file-saver';
import * as XLSX from 'xlsx';

type HandleImportExcel = (e: React.MouseEvent<HTMLElement>) => void;

type HandleDownloadTemplate = (e: React.MouseEvent<HTMLElement>) => void;

type FieldConfig = {
  index: number | string;
  name?: string;
  type?: 'string' | 'number' | 'date';
  format?: string;
  example?: string;
  formatter?: (value: any) => any;
};

type ImportConfig = {
  header: number;
  fields: {
    [key: string]: number | string | FieldConfig;
  };
  template?: {
    filename: string;
    cols?: {
      wch: number;
    }[];
  };
};

const parseCSV = (csvData: string) => {
  const lines = csvData.split('\n');
  return lines.map((line) => line.split(','));
};

const formatExcelData = (excelData: any[], config: ImportConfig) => {
  const [headers, ...rows] = excelData;
  return rows.map((row) => {
    let formattedRow = {} as any;
    for (let key of Object.keys(config.fields)) {
      const fc = config.fields[key];
      if (typeof fc === 'number') {
        formattedRow[key] = row[fc];
      } else if (typeof fc === 'string') {
        formattedRow[key] = row[headers.indexOf(fc)];
      } else if (typeof fc === 'object') {
        formattedRow[key] =
          typeof fc.index === 'string'
            ? row[headers.indexOf(fc.index)]
            : row[fc.index];
        if (fc.formatter) {
          formattedRow[key] = fc.formatter(formattedRow[key]);
        }
      }
    }
    return formattedRow;
  });
};

function useImportExcel(
  callback: (data: any[]) => void,
  importConfig: ImportConfig,
): [JSX.Element, HandleImportExcel, HandleDownloadTemplate, any] {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (!file) {
        return;
      }

      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const fileType = file.name.split('.').pop()!.toLowerCase();
        if (fileType === 'csv') {
          // 解析 CSV 文件
          const csvData = e.target!.result;
          const parsedData = parseCSV(csvData as string);
          console.log('Parsed CSV Data:', parsedData);
        } else if (fileType === 'xls' || fileType === 'xlsx') {
          // 解析 Excel 文件
          const binaryStr = e.target!.result;
          const workbook = XLSX.read(binaryStr, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const excelData = XLSX.utils.sheet_to_json(worksheet, {
            header: importConfig.header || 1,
            raw: false, // 保留原始数据
            dateNF: 'yyyy-mm-dd hh:mm:ss', // 设置默认日期格式
          });

          const formattedData = formatExcelData(excelData, importConfig);
          console.log('Formatted JSON Data:', formattedData);
          callback(formattedData);
        } else {
          console.error('Unsupported file type');
        }
      };

      if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
        reader.readAsText(file);
      } else {
        reader.readAsBinaryString(file);
      }
    },
    [callback],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
        '.xlsx',
      ],
    },
    maxFiles: 1,
  });
  const { onClick: browseLocalFiles } = getRootProps();

  const handleImportExcel = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      console.log('handleImportExcel');
      browseLocalFiles && browseLocalFiles(e);
    },
    [browseLocalFiles],
  );

  const handleDownloadTemplate = useCallback(() => {
    // 获取表头信息
    const headers = Object.keys(importConfig.fields).map((key) => {
      const fc = importConfig.fields[key];
      if (typeof fc === 'object') {
        return fc.name || key;
      }
      return key;
    });

    const example = Object.keys(importConfig.fields).map((key) => {
      const fc = importConfig.fields[key];
      if (typeof fc === 'object') {
        return fc.example || '';
      }
      return '';
    });

    const data = [headers, example];

    // 创建工作簿和工作表
    const worksheet = XLSX.utils.aoa_to_sheet(data);

    if (importConfig.template?.cols) {
      worksheet['!cols'] = importConfig.template.cols;
    }

    // 假设总共有 100 行
    const totalRows = 0;
    for (let j = 1; j < totalRows; j++) {
      for (let i = 0; i < headers.length; i++) {
        let cellRef = XLSX.utils.encode_cell({ r: j, c: i });
        if (!worksheet[cellRef]) {
          // 如果单元格不存在，则创建一个空单元格
          worksheet[cellRef] = { v: null };
        }
        const field = importConfig.fields[headers[i]];
        if (typeof field !== 'object') {
          continue;
        }
        switch (field.type) {
          case 'date':
            worksheet[cellRef].t = 'd';
            break;
        }
        if (field.format) {
          worksheet[cellRef].z = field.format;
        }
      }
    }

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // 生成 Excel 文件的二进制数据
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    // 创建一个 Blob 对象并触发下载
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, importConfig.template?.filename || 'template.xlsx');
  }, [importConfig]);

  return [
    <input {...getInputProps()} key="file-input" value="" />,
    handleImportExcel,
    handleDownloadTemplate,
    { data: {}, error: '', handleImportExcel },
  ];
}

export default useImportExcel;
