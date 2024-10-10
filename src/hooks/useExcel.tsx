import saveAs from 'file-saver';
import * as XLSX from 'xlsx';

import { Toast } from '@/metronic';
import { ToastObject } from '@/metronic/typings';

type ExcelField = {
  key: string;
  title?: string;
  type?: 'string' | 'number' | 'date';
  format?: string;
  example?: string;
  formatter?: (value: any) => any;
};

type ExcelDataSource = (toast: ToastObject) => Promise<Record<string, any>[]>;

type ExcelExportColumn = {
  key?: string;
  title?: string;
  dataIndex?: string;
  render?(value: any, record: Record<string, any>, index: number): string;
  style?: {
    wch: number;
  };
};

type ExcelExportOptions = {
  filename: string;
  columns: ExcelExportColumn[];
  dataSource: ExcelDataSource;
};

type ExcelOptions = {
  fields: ExcelField[];
  export?: ExcelExportOptions;
};

function useExcel(options: ExcelOptions) {
  const handleDownloadData = async () => {
    if (!options.export) {
      console.error('No export options provided');
      return;
    }
    const exportOptions = options.export;
    const fields: Record<string, ExcelField> = options.fields.reduce(
      (acc, field) => {
        acc[field.key] = field;
        return acc;
      },
      {} as Record<string, ExcelField>,
    );
    const columns = exportOptions.columns;
    const dataSource = exportOptions.dataSource;

    const excelData = [];

    // 获取表头信息
    const headers = columns.map((column) => {
      return column.title || (column.key ? fields[column.key].title : '');
    });

    excelData.push(headers);

    const toast = Toast.loading('正在生成 Excel 文件', {
      placement: 'top-center',
    });

    const result = await dataSource(toast);

    toast.update(`生成 ${exportOptions.filename} 文件`);
    for (let i = 0; i < result.length; i++) {
      const rowData = columns.map((column) => {
        const dataKey = column.dataIndex || column.key;
        const colValue = dataKey
          ?.split('.')
          .reduce((acc, key) => acc && acc[key], result[i]);
        if (column.render) {
          return column.render(colValue, result[i], i);
        }
        return colValue;
      });
      excelData.push(rowData);
    }

    // 创建工作簿和工作表
    const worksheet = XLSX.utils.aoa_to_sheet(excelData);

    // 设置列头样式
    /*
    const headerCell = worksheet['A1'];
    headerCell.s = {
      fill: {
        fgColor: { rgb: 'FFFF00' }, // 背景色
      },
      font: {
        bold: true,
        color: { rgb: 'FF0000' }, // 字体颜色
      },
    };
    */

    worksheet['!cols'] = exportOptions.columns.map((col) => {
      return col.style || {};
    });

    // 假设总共有 100 行
    /*     const totalRows = 0;
        for (let j = 1; j < totalRows; j++) {
          for (let i = 0; i < headers.length; i++) {
            let cellRef = XLSX.utils.encode_cell({ r: j, c: i });
            if (!worksheet[cellRef]) {
              // 如果单元格不存在，则创建一个空单元格
              worksheet[cellRef] = { v: null };
            }
            const field = fields[headers[i]];
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
        } */

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // 生成 Excel 文件的二进制数据
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    toast.update(`生成 ${exportOptions.filename} 文件成功`);
    toast.close();

    // 创建一个 Blob 对象并触发下载
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, exportOptions.filename || 'template.xlsx');
  };

  return {
    export: handleDownloadData,
  };
}

export default useExcel;
