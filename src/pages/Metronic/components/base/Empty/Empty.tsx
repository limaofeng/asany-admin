type EmptyProps = {
  title?: string;
  image?: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
};

function Empty(props: EmptyProps) {
  const {
    title,
    description,
    children,
    image = '/assets/media/illustrations/sigma-1/17.png',
  } = props;
  return (
    <>
      <div className="card-px text-center pt-20 pb-5">
        {title && <h2 className="fs-2x fw-bolder mb-0">{title}</h2>}
        {description && <p className="text-gray-400 fs-4 fw-bold py-7">{description}</p>}
        {children}
      </div>
      <div className="text-center px-5">
        <img src={image} alt="" className="mw-100 h-200px h-sm-325px" />
      </div>
    </>
  );
}

export default Empty;
