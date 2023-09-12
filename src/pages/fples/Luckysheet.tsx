import { useEffect } from 'react';

import LuckyExcel from 'luckyexcel';

const luckyCss = {
  margin: '0px',
  padding: '0px',
  position: 'absolute',
  width: '100%',
  height: '800px',
  left: '0px',
  top: '0px',
};

function loadRemoteExcel(excelFileURL: string) {
  // 使用 fetch API 下载 Excel 文件
  return fetch(excelFileURL)
    .then(function (response) {
      return response.arrayBuffer();
    })
    .then(function (data) {
      return new Uint8Array(data);
    });
}

function Luckysheet() {
  useEffect(() => {
    const url =
      'http://localhost:8001/生产情况检查表修改.xlsx';
    loadRemoteExcel(url).then((data) => {
      LuckyExcel.transformExcelToLucky(data, function (exportJson: any) {
        const luckysheet = window.luckysheet;

        console.log('exportJson',exportJson)

        luckysheet.create({
          container: 'luckysheet',
          plugins: ['chart'],
          title: exportJson.info.name, // 工作簿名称
          lang: 'zh', // 设定表格语言 国际化设置，允许设置表格的语言，支持中文("zh")和英文("en")
          allowCopy: false, // 是否允许拷贝
          showtoolbar: false, // 是否显示工具栏
          showinfobar: false, // 是否显示顶部信息栏
          showsheetbar: false, // 是否显示底部sheet页按钮
          showstatisticBar: false, // 是否显示底部计数栏
          sheetBottomConfig: false, // sheet页下方的添加行按钮和回到顶部按钮配置
          allowEdit: false, // 是否允许前台编辑
          enableAddRow: false, // 允许增加行
          enableAddCol: false, // 允许增加列
          userInfo: exportJson.info.creator, // 右上角的用户信息展示样式
          showRowBar: false, // 是否显示行号区域
          showColumnBar: false, // 是否显示列号区域
          sheetFormulaBar: false, // 是否显示公式栏
          enableAddBackTop: false, //返回头部按钮
          rowHeaderWidth: 0, //纵坐标
          columnHeaderHeight: 0, //横坐标
          showstatisticBarConfig: {
            count: false,
            view: false,
            zoom: false,
          },
          showsheetbarConfig: {
            add: false, //新增sheet
            menu: false, //sheet管理菜单
            sheet: false, //sheet页显示
          },
          hook: {
            // cellMousedown:this.cellMousedown,//绑定鼠标事件
          },
          forceCalculation: true, //强制计算公式
          data: exportJson.sheets,
        });
      });
    });
  }, []);

  return <div id="luckysheet" style={luckyCss} />;
}

export default Luckysheet;
