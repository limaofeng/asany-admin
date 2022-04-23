import classnames from 'classnames';

type ImageUploadProps = {
  className?: string;
  width?: number;
  height?: number;
};

function ImageUpload(props: ImageUploadProps) {
  const { className, width, height } = props;
  return (
    <div
      className={classnames('image-input image-input-outline', className)}
      data-kt-image-input="true"
      style={{ backgroundImage: "url('/assets/media/svg/avatars/blank.svg')" }}
    >
      {/*--begin::Preview existing avatar--*/}
      <div
        className={'image-input-wrapper'}
        style={{ backgroundImage: 'url(/assets/media/avatars/300-1.jpg)', width, height }}
      />
      {/*--end::Preview existing avatar--*/}
      {/*--begin::Edit--*/}
      <label
        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
        data-kt-image-input-action="change"
        data-bs-toggle="tooltip"
        data-bs-dismiss="click"
        title="Change avatar"
      >
        <i className="bi bi-pencil-fill fs-7" />
        {/*--begin::Inputs--*/}
        <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
        <input type="hidden" name="avatar_remove" />
        {/*--end::Inputs--*/}
      </label>
      {/*--end::Edit--*/}
      {/*--begin::Cancel--*/}
      <span
        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
        data-kt-image-input-action="cancel"
        data-bs-toggle="tooltip"
        data-bs-dismiss="click"
        title="Cancel avatar"
      >
        <i className="bi bi-x fs-2" />
      </span>
      {/*--end::Cancel--*/}
      {/*--begin::Remove--*/}
      <span
        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
        data-kt-image-input-action="remove"
        data-bs-toggle="tooltip"
        data-bs-dismiss="click"
        title="Remove avatar"
      >
        <i className="bi bi-x fs-2" />
      </span>
      {/*--end::Remove--*/}
    </div>
  );
}

export default ImageUpload;
