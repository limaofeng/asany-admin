import type { CSSProperties } from 'react';
import React, { useMemo } from 'react';

import classnames from 'classnames';
import { Card as BsCard } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface CardProps {
  id?: string;
  as?: React.ElementType;
  title?: string;
  shadow?: false | 'sm' | 'lg';
  flush?: boolean;
  hoverable?: boolean;
  className?: string;
  titleClassName?: string;
  bodyClassName?: string;
  headerClassName?: string;
  style?: CSSProperties;
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
}

type CardToolbarProps = {
  className?: string;
  children: React.ReactNode;
};

function CardToolbar(props: CardToolbarProps) {
  const { className, children } = props;
  return <div className={classnames('card-toolbar', className)}>{children}</div>;
}

type CardFooterProps = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

function CardFooter(props: CardFooterProps) {
  const { className, children } = props;
  return (
    <BsCard.Footer id={props.id} className={className}>
      {children}
    </BsCard.Footer>
  );
}

interface CardTitleProps {
  as?: string | React.ComponentType<any>;
  className?: string;
  children?: React.ReactNode;
}

function CardTitle(props: CardTitleProps) {
  const { className, children, as } = props;
  if (as) {
    return React.createElement(as, { className: classnames('card-title', className) }, children);
  }
  return <div className={classnames('card-title', className)}>{children}</div>;
}

type CardHeaderProps = {
  id?: string;
  border?: false;
  title?: string | React.ReactNode;
  className?: string;
  titleClassName?: string;
  toolbar?: React.ReactNode;
  children?: React.ReactNode;
};

function CardHeader(props: CardHeaderProps) {
  const { className, border } = props;

  const children = useMemo(() => {
    const childs = React.Children.toArray(props.children);
    const _children = [];
    const titleNode = childs.find((item) => React.isValidElement(item) && item.type == CardTitle);
    const toolbarNode = childs.find(
      (item) => React.isValidElement(item) && item.type == CardToolbar,
    );
    const newChildren = childs.filter((item) => ![toolbarNode, titleNode].includes(item));
    if (titleNode) {
      _children.push(titleNode);
    } else if (props.title) {
      _children.push(
        typeof props.title === 'string' ? (
          <CardTitle key="card-title" as="h3" className={props.titleClassName}>
            {props.title}
          </CardTitle>
        ) : (
          props.title
        ),
      );
    }
    if (toolbarNode) {
      _children.push(toolbarNode);
    } else if (props.toolbar) {
      _children.push(props.toolbar);
    }
    if (!!newChildren.length) {
      _children.push(newChildren);
    }
    return _children;
  }, [props.children, props.title, props.titleClassName, props.toolbar]);

  return (
    <BsCard.Header
      id={props.id}
      className={classnames(className, { ['border-0']: border == false })}
    >
      {children}
    </BsCard.Header>
  );
}

function randerHeader(
  header?: React.ReactElement,
  className?: string,
  toolbar?: React.ReactElement,
  title?: string | React.ReactNode,
  titleClassName?: string,
) {
  const props: CardHeaderProps = {};
  className && (props.className = className);
  toolbar && (props.toolbar = toolbar);
  title && (props.title = title);
  titleClassName && (props.titleClassName = titleClassName);
  if (!!header) {
    return React.cloneElement(header, props);
  }
  return title && <CardHeader key="card-header" {...props} />;
}

type CardBodyProps = {
  className?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
  [key: string]: any;
};

function CardBody(props: CardBodyProps) {
  const { className, children, style } = props;
  return (
    <BsCard.Body id={props.id} style={style} className={className}>
      {children}
    </BsCard.Body>
  );
}

function Card(props: CardProps & { to?: string; onClick?: () => void }, ref: any) {
  const {
    as,
    shadow,
    className,
    flush,
    titleClassName,
    headerClassName,
    style,
    children,
    hoverable,

    bodyClassName,
    title: _title,
    ...otherProps
  } = props;

  const { extra, header, toolbar, body, footer, title } = useMemo(() => {
    const childs = React.Children.toArray(children);
    const toolbarNode = childs.find(
      (item) => React.isValidElement(item) && item.type == CardToolbar,
    );
    const footerNode = childs.find((item) => React.isValidElement(item) && item.type == CardFooter);
    const headerNode = childs.find((item) => React.isValidElement(item) && item.type == CardHeader);
    const titleNode = childs.find((item) => React.isValidElement(item) && item.type == CardTitle);
    const bodyNode = childs.find((item) => React.isValidElement(item) && item.type == CardBody);
    const newChildren = childs.filter(
      (item) => ![toolbarNode, footerNode, headerNode, titleNode].includes(item),
    );
    const _extra = newChildren.filter((item) => item !== bodyNode);
    return {
      header: headerNode,
      toolbar: toolbarNode,
      body: bodyNode || <CardBody className={bodyClassName}>{newChildren}</CardBody>,
      footer: footerNode,
      extra: bodyNode ? _extra : undefined,
      title:
        titleNode ||
        (_title && (
          <CardTitle key="card-title" as="h3" className={titleClassName}>
            {_title}
          </CardTitle>
        )),
    };
  }, [children, _title, titleClassName, bodyClassName]);

  return React.createElement(
    (as == 'a' ? Link : as) || 'div',
    {
      ...otherProps,
      ref,
      to: props.to,
      style,
      className: classnames('card', className, {
        [`shadow-${shadow}`]: shadow,
        'card-flush': flush,
      }),
    },
    <>
      {randerHeader(
        header as React.ReactElement,
        headerClassName,
        toolbar as React.ReactElement,
        title || props.title,
        titleClassName,
      )}
      {body}
      {extra}
      {footer}
    </>,
  );
}

interface CardWrapper
  extends React.ForwardRefExoticComponent<CardProps & React.RefAttributes<any | null>> {
  Title: typeof CardTitle;
  Body: typeof CardBody;
  Header: typeof CardHeader;
  Toolbar: typeof CardToolbar;
  Footer: typeof CardFooter;
}

const CardRef = React.forwardRef(Card) as CardWrapper;

CardRef.Title = CardTitle;
CardRef.Body = CardBody;
CardRef.Header = CardHeader;
CardRef.Toolbar = CardToolbar;
CardRef.Footer = CardFooter;

export default CardRef;
