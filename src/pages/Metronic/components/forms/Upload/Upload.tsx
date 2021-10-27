import { useEffect } from 'react';

import Dropzone from 'dropzone';

import UploadAvatar from './UploadAvatar';

function Upload() {
  useEffect(() => {
    const myDropzone = new Dropzone('#kt_dropzonejs_example_1', {
      url: 'http://localhost:8080/files',
      paramName: 'file',
      uploadMultiple: false,
      addRemoveLinks: true,
      accept: function (file, done) {
        if (file.name == 'wow.jpg') {
          done("Naha, you don't.");
        } else {
          done();
        }
      },
      complete: (data) => {
        console.log(data);
      },
    });
    console.log(myDropzone);
    return () => {
      myDropzone.destroy();
    };
  }, []);

  return (
    <div className="dropzone" id="kt_dropzonejs_example_1">
      <div className="dz-message needsclick">
        <i className="bi bi-file-earmark-arrow-up text-primary fs-3x" />
        <div className="ms-4">
          <h3 className="fs-5 fw-bolder text-gray-900 mb-1">Drop files here or click to upload.</h3>
          <span className="fs-7 fw-bold text-gray-400">Upload up to 10 files</span>
        </div>
      </div>
    </div>
  );
}

Upload.UploadAvatar = UploadAvatar;

export default Upload;
