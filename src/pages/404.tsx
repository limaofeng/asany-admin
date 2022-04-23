import { Card, Upload } from '@/components/Metronic';

const ImageUpload = Upload.Image;

const NoFoundPage: React.FC = () => (
  <Card flush className="mt-6 mt-xl-9" headerClassName="mt-5">
    <ImageUpload width={300} height={300} crop={{ height: 450, zoomable: false, aspectRatio: 1 }} />
  </Card>
);

export default NoFoundPage;
