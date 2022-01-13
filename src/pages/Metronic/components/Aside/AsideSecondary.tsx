import React from 'react';

type AsideSecondaryProps = {
  children: React.ReactNode;
};

function AsideSecondary(props: AsideSecondaryProps) {
  const { children } = props;

  return <div className="aside-secondary d-flex flex-row-fluid">{children}</div>;
}

export default React.memo(AsideSecondary);
