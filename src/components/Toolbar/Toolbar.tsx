import type Controls from '../Controls';

type ToolbarProps = {
  title: string;
  subtitle?: string;
  controls?: React.ReactElement<typeof Controls>;
};

function Toolbar(props: ToolbarProps) {
  const { title, subtitle, controls } = props;
  return (
    <div className="d-flex flex-wrap flex-stack my-5">
      {/*--begin::Heading--*/}
      <h2 className="fs-2 fw-bold my-2">
        {title}
        {subtitle && <span className="fs-6 text-gray-400 ms-1">{subtitle}</span>}
      </h2>
      {/*--end::Heading--*/}
      {/*--begin::Controls--*/}
      {controls}
      {/*--end::Controls--*/}
    </div>
  );
}

export default Toolbar;
