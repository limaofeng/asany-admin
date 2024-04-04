import jsPDF from 'jspdf';
import QRCode from 'qrcode';

let width, height;
let pdf;
let timer;

function addfont(pdf) {
  var font = 'AA****'; // 中的就是ttf转化成的编码
  pdf.addFileToVFS('bolds', font);
  return true;
}

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
      pageHeight: 60, // 一页的高度
      left: 35, // 标签左边距
      offsetLeft: 174, // 每个标签的偏移量
      top: 25, // 标签上间距
      picWidth: 100, // 二维码宽度
      picHeight: 100, // 二维码高度
      linePicNum: 5, // 一排显示个数
      rotateDeg: 270, // 角度
      fontSize: 58, // 字号
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
    addfont(pdf);
    pdf.addFont('bolds', 'customFont', 'normal');
    pdf.setFont('customFont');
    pdf.setFontSize(58);
  }
  // 生成二维码
  async buildQRcode() {
    const qrCodes = await Promise.all(this.list.map((item) => QRCode.toDataURL(item.qrcode)))
    this.generate(qrCodes);
  }
  // 生成pdf
  generate(qrCodes) {
    console.time('print');
    const picWidth = this.printConfig.picWidth;
    const picHeight = this.printConfig.picWidth;
    let left = 0;
    let top = this.printConfig.top;
    const textOpt = { angle: this.printConfig.rotateDeg };

    qrCodes.map((base64, index) => {
      left =
        this.printConfig.left +
        this.printConfig.offsetLeft * (index % this.printConfig.linePicNum);
      pdf.addImage(base64, 'JPEG', left, top, picWidth, picHeight, '', 'FAST');
      pdf.text(
        'hello 12345',
        left,
        top,
        textOpt,
      );
      pdf.text(
        '我说中文',
        left,
        top + 25,
        textOpt,
      );

      if (
        index !== 0 &&
        (index + 1) % this.printConfig.linePicNum === 0 &&
        index < qrCodes.length - 1
      ) {
        pdf.addPage([width, height], 'l');
      }
    });

    window.open(pdf.output('bloburl'), '_blank');
    console.timeEnd('print');
  }
}

export function generatePrint(data, step, lableType) {
  console.log(data, step);
  return new PrintTag(data, step, lableType).start();
}
