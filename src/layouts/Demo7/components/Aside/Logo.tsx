import React from 'react';

type LogoProps = {
  url?: string;
  logo?: string;
};
function Logo(props: LogoProps, ref: any) {
  const { url = '/', logo = '/assets/media/logos/logo-demo7.svg' } = props;
  return (
    <div
      ref={ref}
      className="aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-10"
    >
      <a href={url}>
        <img alt="Logo" src={logo} className="h-30px" />
      </a>
    </div>
  );
}

const LogoForwardRef = React.forwardRef(Logo);

export default LogoForwardRef;
