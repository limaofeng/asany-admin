import jsPDF from 'jspdf';
import QRCode from 'qrcode';

import '../../../assets/fonts/SourceHanSansCN-bold';

let width, height;
let pdf: jsPDF;

async function loadImage(url: string): Promise<string> {
  const response = await fetch(url)
  const blob = await response.blob()
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onloadend = () => {
      resolve(reader.result as any)
    }
    reader.onerror = reject
    reader.readAsDataURL(blob)
  });
}

const logoLoadPromise = loadImage('/assets/images/log.png');

class PrintTag {
  imageList: never[];
  list: any;
  printConfig: {
    pageWidth: number; // 一页宽度
    pageHeight: number; // 一页的高度
    left: number; // 标签左边距
    offsetLeft: number; // 每个标签的偏移量
    top: number; // 标签上间距
    picWidth: number; // 二维码宽度
    picHeight: number; // 二维码高度
    linePicNum: number; // 一排显示个数
    rotateDeg: number; // 角度
    fontSize: number; // 字号
  };
  constructor(data) {
    this.imageList = [];
    this.list = data;
    this.printConfig = {
      pageWidth: 80, // 一页宽度
      pageHeight: 40, // 一页的高度
      left: 5, // 标签左边距
      offsetLeft: 174, // 每个标签的偏移量
      top: 5, // 标签上间距
      picWidth: 40, // 二维码宽度
      picHeight: 40, // 二维码高度
      linePicNum: 5, // 一排显示个数
      rotateDeg: 10, // 角度
      // fontSize: 18, // 字号
    };
    this.setPdfConfig();
  }
  start() {
    this.buildQRcode();
  }
  // 设置pdf
  setPdfConfig() {
    width = this.printConfig.pageWidth;
    height = this.printConfig.pageHeight;
    pdf = new jsPDF('l', 'mm', [width, height]);
    //添加并设置字体
    // addfont(pdf);
    // pdf.addFont('bolds', 'customFont', 'normal');
    // pdf.setFont('customFont');
    // pdf.setFontSize(58);
  }
  // 生成二维码
  async buildQRcode() {
    const qrCodes = await Promise.all(this.list.map((item) => QRCode.toDataURL(item.qrcode, {
      width: 40,
      height: 40,
    })))
    this.generate(qrCodes);
  }
  // 生成pdf
  async generate(qrCodes) {
    console.time('print');

    let index = 0;
    for (const base64 of qrCodes) {
      pdf.addImage(base64, 'JPEG', 0, 0, 40, 40, '', 'FAST');

      const logoBase64 = await logoLoadPromise
      pdf.addImage(logoBase64, 'JPEG', 35, 0, 20, 20, '', 'FAST');

      pdf.setLineWidth(.5);
      pdf.line(54, 8, 54,13); 

      let top = 0;
      pdf.setFont('SourceHanSansCN', 'bold');
      pdf.setFontSize(14)
      pdf.text(
        '品牌名称',
        56,
        12
      );



      pdf.setFont('SourceHanSansCN', 'bold');
      pdf.setFontSize(13)
      pdf.text(
        '服务请扫二维码',
        40,
        top += 24
      );

      pdf.setFont('SourceHanSansCN', 'bold');
      pdf.setFontSize(10)
      pdf.text(
        '售后服务: 4008196788',
        40,
        top += 10
      );


      if (index < qrCodes.length - 1) {
        pdf.addPage([width, height], 'l');
      }
      index++;
    }

    window.open(pdf.output('bloburl'), '_blank');
    console.timeEnd('print');
  }
}

export function generatePrint(data, step, lableType) {
  console.log(data, step);
  return new PrintTag(data, step, lableType).start();
}
