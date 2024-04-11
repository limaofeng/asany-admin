import jsPDF from 'jspdf';
import QRCode, { QRCodeToDataURLOptions } from 'qrcode';

// import '../../../assets/fonts/SourceHanSansCN-bold';

async function loadImage(url: string): Promise<string> {
  const response = await fetch(url);
  const blob = await response.blob();
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onloadend = () => {
      resolve(reader.result as any);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

const logoLoadPromise = loadImage('/assets/images/qrcode_logo.png');

type QRCodeLabel = {
  qrcode: string;
};

export async function generateQRCodeLabel(data: QRCodeLabel[]) {
  const width = 80,
    height = 40;
  const pdf = new jsPDF('l', 'mm', [width, height]);

  const qrCodes = await Promise.all(
    data.map((item) =>
      QRCode.toDataURL(
        item.qrcode as string,
        {
          width: 40,
          height: 40,
          errorCorrectionLevel: 'H',
          quality: 0.92,
        } as QRCodeToDataURLOptions,
      ),
    ),
  );

  for (let i = 0; i < data.length; i++) {
    pdf.addImage(qrCodes[i], 'JPEG', 0, 0, 40, 40, '', 'FAST');

    const logoBase64 = await logoLoadPromise;
    pdf.addImage(logoBase64, 'JPEG', 40, 0, 40, 40, '', 'FAST');

    // pdf.setLineWidth(0.5);
    // pdf.line(54, 8, 54, 13);

    // let top = 0;
    // pdf.setFont('SourceHanSansCN', 'bold');
    // pdf.setFontSize(14);
    // pdf.text('品牌名称', 56, 12);

    // pdf.setFont('SourceHanSansCN', 'bold');
    // pdf.setFontSize(13);
    // pdf.text('服务请扫二维码', 40, (top += 24));

    // pdf.setFont('SourceHanSansCN', 'bold');
    // pdf.setFontSize(10);
    // pdf.text('售后服务: 021-52217389', 40, (top += 10));

    if (i < qrCodes.length - 1) {
      pdf.addPage([width, height], 'l');
    }
  }

  window.open(pdf.output('bloburl'), '_blank');
}
