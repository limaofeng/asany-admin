import React, { useMemo } from 'react';

import classnames from 'classnames';

type NavbarCoverProps = {
  className?: string;
  children?: React.ReactNode;
};

function NavbarCover(props: NavbarCoverProps) {
  const { className, children } = props;
  return (
    <div
      className={classnames(
        'd-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4',
        className,
      )}
    >
      {children}
    </div>
  );
}

type NavbarDescriptionProps = {
  className?: string;
  children: React.ReactNode;
};

function NavbarDescription(props: NavbarDescriptionProps) {
  const { className, children } = props;
  return (
    <div
      className={classnames(
        'd-flex flex-wrap fw-bold mb-4 fs-5 text-gray-400',
        className,
      )}
    >
      {children || <p dangerouslySetInnerHTML={{ __html: '&nbsp;' }} />}
    </div>
  );
}

type NavbarTitleProps = {
  className?: string;
  children?: React.ReactNode;
};

function NavbarTitle(props: NavbarTitleProps) {
  const { className, children } = props;
  return (
    <div className={classnames('d-flex align-items-center mb-1', className)}>
      {children}
    </div>
  );
}

type NavbarToolbarProps = {
  className?: string;
  children: React.ReactNode;
};

function NavbarToolbar(props: NavbarToolbarProps) {
  const { className, children } = props;
  return <div className={classnames('d-flex mb-4', className)}>{children}</div>;
}

type NavbarHeaderProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  toolbar?: React.ReactNode;
};

function NavbarHeader(props: NavbarHeaderProps) {
  const { title, description, toolbar } = props;
  return (
    <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
      <div className="d-flex flex-column">
        {title}
        {description}
      </div>
      {toolbar}
    </div>
  );
}

type NavbarBodyProps = {
  className?: string;
  children: React.ReactNode;
};

function NavbarBody(props: NavbarBodyProps) {
  const { className, children } = props;
  return (
    <div
      className={classnames(
        'd-flex flex-wrap justify-content-start',
        className,
      )}
    >
      {children}
    </div>
  );
}

type NavbarFooterProps = {
  className?: string;
  separator?: boolean;
  children: React.ReactNode;
};

function NavbarFooter(props: NavbarFooterProps) {
  const { className, separator = true, children } = props;
  return (
    <>
      {separator && <div className="separator" />}
      <div className={classnames('d-flex overflow-auto', className)}>
        {children}
      </div>
    </>
  );
}

type NavbarItem = NavbarHeaderProps | NavbarBodyProps | NavbarFooterProps;

type NavbarProps = {
  cover?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactElement<NavbarItem> | React.ReactElement<NavbarItem>[];
};

function Navbar(props: NavbarProps) {
  const { cover, header, body, footer } = useMemo(() => {
    const childs = React.Children.toArray(props.children);

    let coverNode = childs.find(
      (item) => React.isValidElement(item) && item.type === NavbarCover,
    );
    let title = childs.find(
      (item) => React.isValidElement(item) && item.type === NavbarTitle,
    );
    let description = childs.find(
      (item) => React.isValidElement(item) && item.type === NavbarDescription,
    );
    const toolbar = childs.find(
      (item) => React.isValidElement(item) && item.type === NavbarToolbar,
    );
    let bodyNode = childs.find(
      (item) => React.isValidElement(item) && item.type === NavbarBody,
    );
    const footerNode = childs.find(
      (item) => React.isValidElement(item) && item.type === NavbarFooter,
    );

    const newChildren = childs.filter(
      (item) => ![cover, title, description, toolbar, footer].includes(item),
    );

    if (!coverNode && !!props.cover) {
      coverNode = <NavbarCover>{props.cover}</NavbarCover>;
    }

    if (!title && !!props.title) {
      title =
        typeof props.title === 'string' ? (
          <NavbarTitle>
            <span className="text-gray-800 text-hover-primary fs-2 fw-bolder me-3">
              {props.title}
            </span>
          </NavbarTitle>
        ) : (
          <NavbarTitle>{props.title}</NavbarTitle>
        );
    }
    if (!description && !!props.description) {
      description = <NavbarDescription>{props.description}</NavbarDescription>;
    }
    const headerNode = (
      <NavbarHeader title={title} description={description} toolbar={toolbar} />
    );

    if (!bodyNode) {
      bodyNode = <NavbarBody>{newChildren}</NavbarBody>;
    }

    return {
      cover: coverNode,
      header: headerNode,
      body: bodyNode,
      footer: footerNode,
    };
  }, [props.children, props.cover, props.description, props.title]);

  return (
    <div className="card mb-6 mb-xl-9">
      <div className="card-body pt-9 pb-0">
        <div className="d-flex flex-wrap flex-sm-nowrap mb-6">
          {cover}
          <div className="flex-grow-1">
            {header}
            {body}
          </div>
        </div>
        {footer}
      </div>
    </div>
  );
}

Navbar.Cover = NavbarCover;
Navbar.Title = NavbarTitle;
Navbar.Description = NavbarDescription;
Navbar.Toolbar = NavbarToolbar;
Navbar.Body = NavbarBody;
Navbar.Footer = NavbarFooter;

export default Navbar;
