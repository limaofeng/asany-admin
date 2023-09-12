import ExcelViewer from './viewers/ExcelViewer';
import PdfViewer from './viewers/PdfViewer';

import { Card } from '@/metronic';

type Document = {
  id: string;
  url: string;
  type: 'pdf' | 'excel' | 'image';
};

type DocumentCardProps = {
  doc: Document;
  height?: number;
};

function DocumentCard(props: DocumentCardProps) {
  const { doc, height } = props;
  return (
    <Card className="document-card">
      {doc.type == 'pdf' && <PdfViewer pdfUrl={doc.url} />}
      {doc.type == 'excel' && <ExcelViewer height={height} excelUrl={doc.url} />}
    </Card>
  );
}

export default DocumentCard;
