import PDFViewer from './PDF/PDFViewer';

type DocumentViewerProps = {
  url: string;
};

function DocumentViewer(props: DocumentViewerProps) {
  const { url } = props;
  return <PDFViewer url={url} />;
}

export default DocumentViewer;
