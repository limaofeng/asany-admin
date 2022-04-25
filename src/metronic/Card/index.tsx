import React, { useMemo } from 'react';
import type { CSSProperties } from 'react';

import classnames from 'classnames';
import { Card as BsCard } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface CardProps {
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
  className?: string;
  children: React.ReactNode;
};

function CardFooter(props: CardFooterProps) {
  const { className, children } = props;
  return <BsCard.Footer className={className}>{children}</BsCard.Footer>;
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
          <CardTitle as="h3" className={props.titleClassName}>
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
    _children.push(newChildren);
    return _children;
  }, [props.children, props.title, props.titleClassName, props.toolbar]);

  return (
    <BsCard.Header className={classnames(className, { ['border-0']: border == false })}>
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
  titleClassName && (props.titleClassName = titleClassName);
  if (!!header) {
    return React.cloneElement(header, props);
  }
  return title && <CardHeader {...props} />;
}

type CardBodyProps = {
  className?: string;
  children?: React.ReactNode;
};

function CardBody(props: CardBodyProps) {
  const { className, children } = props;
  return <BsCard.Body className={className}>{children}</BsCard.Body>;
}

function Card(props: CardProps & { to?: string }) {
  const { as, shadow, className, flush, titleClassName, headerClassName, style } = props;

  const { header, toolbar, body, footer, title } = useMemo(() => {
    const childs = React.Children.toArray(props.children);
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
    return {
      header: headerNode,
      toolbar: toolbarNode,
      body: bodyNode || <CardBody className={props.bodyClassName}>{newChildren}</CardBody>,
      footer: footerNode,
      title:
        titleNode ||
        (props.title && (
          <CardTitle as="h3" className={props.titleClassName}>
            {props.title}
          </CardTitle>
        )),
    };
  }, [props.children, props.title, props.titleClassName, props.bodyClassName]);

  return (
    <BsCard
      as={as == 'a' ? Link : as}
      to={props.to}
      style={style}
      className={classnames(className, 'x1221', {
        [`shadow-${shadow}`]: shadow,
        'card-flush': flush,
      })}
    >
      {randerHeader(
        header as React.ReactElement,
        headerClassName,
        toolbar as React.ReactElement,
        title || props.title,
        titleClassName,
      )}
      {body}
      {footer}
    </BsCard>
  );
}

Card.Title = CardTitle;
Card.Body = CardBody;
Card.Header = CardHeader;
Card.Toolbar = CardToolbar;
Card.Footer = CardFooter;

export default Card;
